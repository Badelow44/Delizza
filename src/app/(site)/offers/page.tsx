import type { Metadata } from "next";
import { repo, withFallback, mockRepo } from "@/data/repository";
import OffersClient from "./OffersClient";

export const metadata: Metadata = {
  title: "Offres et promotions — Pizza Deli'Zza",
  description:
    "Retrouvez les offres et promotions de Pizza Deli'Zza, votre pizzeria artisanale à La Varenne.",
  alternates: { canonical: "/offers" },
};

export default async function OffersPage() {
  const offers = await withFallback(
    () => repo.getOffers(),
    () => mockRepo.getOffers(),
  );

  return <OffersClient offers={offers} />;
}
