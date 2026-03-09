import type { Metadata } from "next";
import GoClient from "./GoClient";

export const metadata: Metadata = {
  title: "Redirection — Deli'Zza",
  robots: { index: false },
};

export default function GoPage() {
  return <GoClient />;
}
