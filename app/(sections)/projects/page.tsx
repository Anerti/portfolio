import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projets",
  description: "Projets backend — passerelle de paiement, microservices, Kafka",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Projects />
    </div>
  );
}
