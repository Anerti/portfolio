import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Writeups } from "@/components/sections/writeups";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <main className="md:ml-64">
        <div className="mx-auto max-w-3xl px-6">
            <About />
            <Skills />
            <Projects />
            <Writeups />
            <Career />
        </div>
        <Contact />
      </main>
    </div>
  );
}
