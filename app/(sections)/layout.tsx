import { Sidebar } from "@/components/sidebar";
import { PageTransition } from "@/components/page-transition";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-background md:ml-64">
        <PageTransition>{children}</PageTransition>
      </main>
    </>
  );
}
