import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Compétences",
  description: "Soft skills, hard skills, langues et compétences techniques",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Skills />
    </div>
  );
}
