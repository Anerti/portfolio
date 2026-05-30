import type { Metadata } from "next";
import { Writeups } from "@/components/sections/writeups";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles techniques — Spring Boot, paiement, observabilité",
};

export default function WriteupsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Writeups />
    </div>
  );
}
