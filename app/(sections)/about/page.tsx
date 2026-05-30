import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "À propos",
  description: "Backend developer portfolio — Java, Spring Boot, PostgreSQL",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <About />
    </div>
  );
}
