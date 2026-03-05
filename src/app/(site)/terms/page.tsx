import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Deli'Zza",
  description:
    "Consultez les conditions générales d'utilisation de l'application et du site Deli'Zza.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] px-5 py-10 text-[#C0C0C0] md:px-10">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-[13px] text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Retour
        </Link>

        <h1 className="mb-2 text-[28px] font-bold text-[#F5F5F5]">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="mb-8 text-[13px] text-[#6B6B6B]">Dernière mise à jour : mars 2025</p>

        <Section title="1. Objet du service">
          <p>
            Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et
            l&apos;utilisation de l&apos;application mobile et du site web Deli&apos;Zza, édités par
            WLHORIZON. Le service permet aux utilisateurs de consulter la carte des produits
            disponibles et de passer des commandes de pizzas artisanales en ligne, avec livraison
            ou retrait en point de vente.
          </p>
        </Section>

        <Section title="2. Inscription et compte utilisateur">
          <p className="mb-3">
            Pour passer commande, l&apos;utilisateur doit créer un compte en fournissant des
            informations exactes et à jour (nom, adresse e-mail valide, numéro de téléphone). Il
            s&apos;engage à :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maintenir la confidentialité de ses identifiants.</li>
            <li>Ne pas créer de compte au nom d&apos;un tiers sans son autorisation.</li>
            <li>Informer Deli&apos;Zza de toute utilisation non autorisée de son compte.</li>
          </ul>
          <p className="mt-3">
            Deli&apos;Zza se réserve le droit de suspendre ou supprimer tout compte en cas de
            violation des présentes CGU.
          </p>
        </Section>

        <Section title="3. Commandes et paiement">
          <p className="mb-3">
            Toute commande passée via l&apos;application constitue un contrat de vente entre
            l&apos;utilisateur et Deli&apos;Zza. Les prix affichés sont en euros TTC. Le paiement
            s&apos;effectue en ligne, de manière sécurisée, via notre prestataire de paiement.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>La confirmation de commande est envoyée par notification et/ou e-mail.</li>
            <li>
              En cas de rupture de stock ou d&apos;indisponibilité d&apos;un produit,
              l&apos;utilisateur en est informé et peut modifier ou annuler sa commande.
            </li>
            <li>
              Les annulations sont possibles avant la prise en charge de la commande par nos
              équipes.
            </li>
          </ul>
        </Section>

        <Section title="4. Livraison">
          <p className="mb-3">
            Les délais de livraison sont estimatifs et peuvent varier en fonction de la distance,
            du volume de commandes et des conditions de circulation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>L&apos;utilisateur s&apos;assure d&apos;être joignable et présent à l&apos;adresse de livraison.</li>
            <li>Des frais de livraison peuvent s&apos;appliquer selon la zone géographique et le montant de la commande.</li>
            <li>Deli&apos;Zza ne saurait être tenu responsable des retards liés à des circonstances extérieures (événements imprévisibles, intempéries, etc.).</li>
          </ul>
        </Section>

        <Section title="5. Responsabilités">
          <p className="mb-3">
            Deli&apos;Zza s&apos;engage à mettre tout en œuvre pour assurer la disponibilité et le bon
            fonctionnement du service. Toutefois, WLHORIZON ne peut être tenu responsable :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Des interruptions de service liées à des opérations de maintenance ou à des incidents techniques indépendants de sa volonté.</li>
            <li>Des dommages résultant d&apos;une utilisation frauduleuse ou non conforme aux présentes CGU.</li>
            <li>Des contenus ou services fournis par des tiers accessibles via l&apos;application.</li>
          </ul>
        </Section>

        <Section title="6. Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus présents sur le site et l&apos;application Deli&apos;Zza (textes,
            images, logos, icônes, etc.) sont la propriété exclusive de WLHORIZON ou de ses
            partenaires et sont protégés par les lois sur la propriété intellectuelle. Toute
            reproduction, distribution ou utilisation sans autorisation préalable écrite est
            strictement interdite.
          </p>
        </Section>

        <Section title="7. Données personnelles">
          <p>
            La collecte et le traitement de vos données personnelles sont régis par notre{" "}
            <Link
              href="/privacy"
              className="text-[#D4A053] underline underline-offset-2 hover:text-[#E8C078]"
            >
              Politique de Confidentialité
            </Link>
            , accessible à tout moment depuis l&apos;application et le site web. En utilisant nos
            services, vous acceptez les pratiques décrites dans cette politique.
          </p>
        </Section>

        <Section title="8. Modification des CGU">
          <p>
            Deli&apos;Zza se réserve le droit de modifier les présentes CGU à tout moment. Les
            utilisateurs seront informés de toute modification significative via l&apos;application ou
            par e-mail. La poursuite de l&apos;utilisation du service après notification vaut
            acceptation des nouvelles conditions.
          </p>
        </Section>

        <Section title="9. Droit applicable et juridiction">
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, les parties
            s&apos;engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut
            d&apos;accord, le litige sera soumis aux tribunaux compétents du ressort du siège social de
            WLHORIZON.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Pour toute question relative aux présentes CGU :{" "}
            <a
              href="mailto:contact@delizza.fr"
              className="text-[#D4A053] underline underline-offset-2 hover:text-[#E8C078]"
            >
              contact@delizza.fr
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-[18px] font-semibold text-[#F5F5F5]">{title}</h2>
      <div className="text-[14px] leading-relaxed">{children}</div>
    </section>
  );
}
