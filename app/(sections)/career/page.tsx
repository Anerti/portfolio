import type { Metadata } from "next";
import { Career } from "@/components/sections/career";

export const metadata: Metadata = {
  title: "Carrière",
  description: "Parcours professionnel et formation",
};

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Career />
    </div>
  );
}
