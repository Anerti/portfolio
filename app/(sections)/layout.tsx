import { Sidebar } from "@/components/sidebar";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <main className="min-h-screen bg-background md:ml-64">
        {children}
      </main>
    </>
  );
}
