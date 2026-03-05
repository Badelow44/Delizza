import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Deli'Zza",
  description:
    "Découvrez comment Deli'Zza collecte, utilise et protège vos données personnelles conformément au RGPD.",
};

export default function PrivacyPage() {
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
          Politique de Confidentialité
        </h1>
        <p className="mb-8 text-[13px] text-[#6B6B6B]">Dernière mise à jour : mars 2025</p>

        <Section title="1. Qui sommes-nous ?">
          <p>
            Deli&apos;Zza est une application mobile de commande de pizzas artisanales éditée par
            WLHORIZON. Le responsable du traitement des données est WLHORIZON. Pour toute question
            relative à vos données personnelles, vous pouvez nous contacter à l&apos;adresse suivante :{" "}
            <a
              href="mailto:contact@delizza.fr"
              className="text-[#D4A053] underline underline-offset-2 hover:text-[#E8C078]"
            >
              contact@delizza.fr
            </a>
            .
          </p>
        </Section>

        <Section title="2. Données collectées">
          <p className="mb-3">Dans le cadre de l&apos;utilisation de l&apos;application et du site Deli&apos;Zza, nous pouvons collecter les données suivantes :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse(s) de livraison</li>
            <li>Historique des commandes</li>
            <li>Données de navigation et préférences sur l&apos;application</li>
          </ul>
        </Section>

        <Section title="3. Géolocalisation">
          <p>
            L&apos;application peut demander l&apos;accès à votre position géographique afin de vous
            proposer les restaurants à proximité et de faciliter la saisie de votre adresse de
            livraison. Cet accès est facultatif et peut être refusé ou révoqué à tout moment dans
            les paramètres de votre appareil.
          </p>
        </Section>

        <Section title="4. Données de paiement">
          <p>
            Les informations relatives à votre carte bancaire ne sont jamais stockées sur nos
            serveurs. Les paiements sont entièrement gérés par un prestataire de paiement tiers
            sécurisé. Seul un identifiant de transaction nous est transmis à des fins de suivi des
            commandes.
          </p>
        </Section>

        <Section title="5. Cookies">
          <p className="mb-3">
            Le site Deli&apos;Zza utilise des cookies pour améliorer votre expérience de navigation.
            Vous pouvez gérer vos préférences via la bannière de consentement affichée lors de
            votre première visite. Les types de cookies utilisés sont :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-[#F5F5F5]">Cookies essentiels</strong> — nécessaires au bon
              fonctionnement du site (toujours actifs).
            </li>
            <li>
              <strong className="text-[#F5F5F5]">Cookies analytiques</strong> — nous permettent de
              mesurer l&apos;audience et d&apos;améliorer nos services.
            </li>
            <li>
              <strong className="text-[#F5F5F5]">Cookies marketing</strong> — utilisés pour vous
              proposer des contenus personnalisés et des offres adaptées.
            </li>
          </ul>
        </Section>

        <Section title="6. Notifications push">
          <p>
            Avec votre consentement, l&apos;application peut vous envoyer des notifications push via
            Firebase Cloud Messaging (Google LLC) pour vous informer de l&apos;état de vos commandes,
            des offres spéciales et des actualités Deli&apos;Zza. Vous pouvez désactiver ces
            notifications à tout moment depuis les paramètres de votre appareil.
          </p>
        </Section>

        <Section title="7. Partage de données avec des tiers">
          <p className="mb-3">
            Nous ne vendons jamais vos données personnelles. Vos données peuvent être partagées
            uniquement avec :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nos partenaires de livraison, dans le strict cadre de l&apos;exécution de votre commande.</li>
            <li>Notre prestataire de paiement, pour la sécurisation des transactions.</li>
            <li>Firebase (Google LLC) pour les notifications push et l&apos;authentification.</li>
            <li>Les autorités compétentes, si la loi l&apos;exige.</li>
          </ul>
        </Section>

        <Section title="8. Durée de conservation">
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire à la finalité pour
            laquelle elles ont été collectées, et au maximum pendant 3 ans à compter du dernier
            contact ou de la suppression de votre compte.
          </p>
        </Section>

        <Section title="9. Vos droits RGPD">
          <p className="mb-3">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
            des droits suivants :
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-[#F5F5F5]">Droit d&apos;accès</strong> — obtenir une copie de vos données.</li>
            <li><strong className="text-[#F5F5F5]">Droit de rectification</strong> — corriger des données inexactes.</li>
            <li><strong className="text-[#F5F5F5]">Droit à l&apos;effacement</strong> — demander la suppression de vos données.</li>
            <li><strong className="text-[#F5F5F5]">Droit à la portabilité</strong> — recevoir vos données dans un format structuré.</li>
            <li><strong className="text-[#F5F5F5]">Droit d&apos;opposition</strong> — vous opposer à certains traitements.</li>
            <li><strong className="text-[#F5F5F5]">Droit à la limitation</strong> — restreindre le traitement de vos données.</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous à{" "}
            <a
              href="mailto:contact@delizza.fr"
              className="text-[#D4A053] underline underline-offset-2 hover:text-[#E8C078]"
            >
              contact@delizza.fr
            </a>
            . Vous pouvez également introduire une réclamation auprès de la CNIL (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A053] underline underline-offset-2 hover:text-[#E8C078]"
            >
              www.cnil.fr
            </a>
            ).
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Pour toute question concernant cette politique ou vos données personnelles :{" "}
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
