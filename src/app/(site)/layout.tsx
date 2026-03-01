import BottomNav from "@/components/ui/BottomNav";
import AppBanner from "@/components/ui/AppBanner";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBanner />
      <main className="mx-auto max-w-md min-h-screen pb-20">
        {children}
      </main>
      <BottomNav />
    </>
  );
}
