import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader variant="bar" className="site:hidden" />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
