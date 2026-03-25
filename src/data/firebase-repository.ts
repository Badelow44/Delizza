/**
 * FirebaseRepository — reads catalog data from Firestore (WLHORIZON collections).
 *
 * Collections:
 *   wl_catalog_categories  — menu categories
 *   wl_catalog_items       — menu products / items
 *   wl_option_templates    — reusable option templates (e.g. pizza sizes)
 *
 * Hero slides and offers don't exist in WLHORIZON Firestore; they are
 * delegated to mock data (same as MockRepository).
 */

import { FieldPath } from "firebase-admin/firestore";
import type { Product, Category, HeroSlide, Offer } from "@/types";
import type { ProductOption, OptionChoice, OptionType } from "@/types/product-options";
import type { DataRepository } from "@/data/repository";
import { buildFeaturedProducts } from "@/data/repository";
import { getDb, WL_APP_ID, FIREBASE_STORAGE_BUCKET } from "@/config/firebase";
import {
  categories as mockCategories,
  products as mockProducts,
  heroSlides as mockHeroSlides,
  offers as mockOffers,
} from "@/data/mock";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Generate a URL-friendly slug from a display name */
function slugify(name: string): string {
  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "item";
}

/** Resolve a Firebase Storage image URL from imagePath or imageUrl */
function resolveImage(
  imagePath?: string | null,
  imageUrl?: string | null,
): string {
  if (imageUrl) return imageUrl;
  if (imagePath && FIREBASE_STORAGE_BUCKET) {
    return `https://firebasestorage.googleapis.com/v0/b/${FIREBASE_STORAGE_BUCKET}/o/${encodeURIComponent(imagePath)}?alt=media`;
  }
  return "/images/placeholder.svg";
}

/** Extract a string from an unknown Firestore field value */
function str(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}
function num(v: unknown, fallback = 0): number {
  return typeof v === "number" ? v : fallback;
}
function bool(v: unknown, fallback = false): boolean {
  return typeof v === "boolean" ? v : fallback;
}
function arr(v: unknown): string[] {
  return Array.isArray(v) ? (v as string[]) : [];
}

/** Parse a raw Firestore options array into typed ProductOption[] */
function parseOptions(raw: unknown): ProductOption[] {
  if (!Array.isArray(raw)) return [];
  return (raw as unknown[])
    .map((opt): ProductOption | null => {
      if (typeof opt !== "object" || opt === null) return null;
      const o = opt as Record<string, unknown>;
      const choices: OptionChoice[] = Array.isArray(o.choices)
        ? (o.choices as unknown[])
            .map((c): OptionChoice | null => {
              if (typeof c !== "object" || c === null) return null;
              const ch = c as Record<string, unknown>;
              const modifier =
                typeof ch.priceModifier === "object" && ch.priceModifier !== null
                  ? (ch.priceModifier as Record<string, unknown>)
                  : undefined;
              return {
                id: str(ch.id),
                name: str(ch.name),
                priceModifier: {
                  amountCents: typeof modifier?.amountCents === "number" ? modifier.amountCents : 0,
                  currency: str(modifier?.currency, "EUR"),
                },
                isActive: bool(ch.isActive, false),
              };
            })
            .filter((c): c is OptionChoice => c !== null)
            .filter((c) => c.isActive)
        : [];
      return {
        id: str(o.id),
        name: str(o.name),
        type: (o.type === "single" || o.type === "multiple") ? (o.type as OptionType) : "single",
        required: bool(o.required, false),
        choices,
        order: num(o.order, 0),
      };
    })
    .filter((opt): opt is ProductOption => opt !== null)
    .sort((a, b) => a.order - b.order);
}

/** Parse appliedTemplateIds from a Firestore document field */
function parseTemplateIds(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return (v as unknown[]).filter((id): id is string => typeof id === "string");
}

/** Convert a raw Firestore wl_option_templates document into a ProductOption */
function mapTemplateToOption(id: string, data: FirestoreDoc, order: number): ProductOption {
  const choices: OptionChoice[] = Array.isArray(data.choices)
    ? (data.choices as unknown[])
        .map((c): OptionChoice | null => {
          if (typeof c !== "object" || c === null) return null;
          const ch = c as Record<string, unknown>;
          const modifier =
            typeof ch.priceModifier === "object" && ch.priceModifier !== null
              ? (ch.priceModifier as Record<string, unknown>)
              : undefined;
          return {
            id: str(ch.id),
            name: str(ch.name),
            priceModifier: {
              amountCents: typeof modifier?.amountCents === "number" ? modifier.amountCents : 0,
              currency: str(modifier?.currency, "EUR"),
            },
            isActive: bool(ch.isActive, false),
          };
        })
        .filter((c): c is OptionChoice => c !== null)
        .filter((c) => c.isActive)
    : [];
  return {
    id,
    name: str(data.name),
    type: (data.type === "single" || data.type === "multiple") ? (data.type as OptionType) : "single",
    required: bool(data.required, false),
    choices,
    order,
  };
}

/** Filter offers by active status + date window */
function filterActiveOffers(offers: Offer[]): Offer[] {
  const now = new Date();
  return offers.filter((o) => {
    if (!o.active) return false;
    if (o.start_at && new Date(o.start_at) > now) return false;
    if (o.end_at && new Date(o.end_at) < now) return false;
    return true;
  });
}

// ---------------------------------------------------------------------------
// Firestore document mappers
// ---------------------------------------------------------------------------

type FirestoreDoc = FirebaseFirestore.DocumentData;

function mapCategory(id: string, data: FirestoreDoc): Category {
  return {
    id,
    name: str(data.name),
    slug: str(data.slug) || slugify(str(data.name)),
    order: num(data.order),
    active: bool(data.isActive, true),
    icon: typeof data.icon === "string" ? data.icon : undefined,
  };
}

function mapProduct(id: string, data: FirestoreDoc): Product & { appliedTemplateIds: string[] } {
  // Price: prefer nested Money object, fall back to legacy flat field
  const priceObj = data.price as Record<string, unknown> | undefined;
  const priceCents =
    typeof priceObj?.amountCents === "number"
      ? priceObj.amountCents
      : num(data.priceCents);

  return {
    id,
    name: str(data.name),
    slug: str(data.slug) || slugify(str(data.name)),
    description_short: str(data.description),
    ingredients: arr(data.ingredients),
    price_cents: priceCents,
    tax_rate_bps: num(data.taxRateBps, 1000),
    image: resolveImage(
      data.imagePath as string | null,
      data.imageUrl as string | null,
    ),
    category: str(data.categoryId),
    badge: typeof data.badge === "string" ? data.badge : undefined,
    active: bool(data.isActive, true),
    is_popular: bool(data.isPopular, false),
    tags: arr(data.tags),
    options: parseOptions(data.options),
    appliedTemplateIds: parseTemplateIds(data.appliedTemplateIds),
  };
}

// ---------------------------------------------------------------------------
// FirebaseRepository
// ---------------------------------------------------------------------------

export class FirebaseRepository implements DataRepository {
  /** Hero slides don't exist in WLHORIZON Firestore — delegate to mock */
  async getHomeHeroSlides(): Promise<HeroSlide[]> {
    return mockHeroSlides
      .filter((s) => s.active)
      .sort((a, b) => a.order - b.order);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return buildFeaturedProducts(await this.getProducts());
  }

  async getCategories(): Promise<Category[]> {
    const snap = await getDb()
      .collection("wl_catalog_categories")
      .where("appId", "==", WL_APP_ID)
      .where("isActive", "==", true)
      .orderBy("order")
      .get();

    return snap.docs.map((doc) => mapCategory(doc.id, doc.data()));
  }

  async getProducts(): Promise<Product[]> {
    const snap = await getDb()
      .collection("wl_catalog_items")
      .where("appId", "==", WL_APP_ID)
      .where("isActive", "==", true)
      .get();

    const rawProducts = snap.docs.map((doc) => mapProduct(doc.id, doc.data()));

    // Collect all unique template IDs referenced across products
    const allTemplateIds = [
      ...new Set(rawProducts.flatMap((p) => p.appliedTemplateIds)),
    ];

    // Batch-fetch option templates (Firestore `in` query limit: 30 IDs per query)
    const templateMap = new Map<string, ProductOption>();
    if (allTemplateIds.length > 0) {
      const db = getDb();
      const chunks: string[][] = [];
      for (let i = 0; i < allTemplateIds.length; i += 30) {
        chunks.push(allTemplateIds.slice(i, i + 30));
      }
      const templateSnaps = await Promise.all(
        chunks.map((chunk) =>
          db
            .collection("wl_option_templates")
            .where("appId", "==", WL_APP_ID)
            .where(FieldPath.documentId(), "in", chunk)
            .get()
        )
      );
      templateSnaps
        .flatMap((s) => s.docs)
        .forEach((doc, index) => {
          templateMap.set(doc.id, mapTemplateToOption(doc.id, doc.data(), index));
        });
    }

    // Merge template-derived options (first) with any inline options
    return rawProducts.map(({ appliedTemplateIds, ...product }) => {
      const templateOptions = appliedTemplateIds
        .map((id) => templateMap.get(id))
        .filter((opt): opt is ProductOption => opt !== undefined);
      return {
        ...product,
        options: [...templateOptions, ...product.options],
      };
    });
  }

  async getPopularProducts(): Promise<Product[]> {
    const all = await this.getProducts();
    return all.filter((p) => p.is_popular);
  }

  /** Offers don't exist in WLHORIZON Firestore — delegate to mock */
  async getOffers(): Promise<Offer[]> {
    return filterActiveOffers(mockOffers);
  }
}

// Re-export for convenience
export { mockCategories, mockProducts };
