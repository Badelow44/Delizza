import { repo, withFallback, mockRepo, POPULAR_CATEGORY } from "@/data/repository";
import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pizza Deli'Zza — Pizzeria artisanale",
  description:
    "Découvrez les pizzas artisanales premium de Deli'Zza, préparées avec des ingrédients frais. Commandez depuis notre application mobile.",
};

export default async function HomePage() {
  const [featuredProducts, cats, prods] = await Promise.all([
    withFallback(() => repo.getFeaturedProducts(), () => mockRepo.getFeaturedProducts()),
    withFallback(() => repo.getCategories(), () => mockRepo.getCategories()),
    withFallback(() => repo.getProducts(), () => mockRepo.getProducts()),
  ]);

  return (
    <HomeClient
      featuredProducts={featuredProducts}
      categories={[POPULAR_CATEGORY, ...cats]}
      products={prods}
    />
  );
}