import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Me contacter — GitHub, LinkedIn, Discord",
};

export default function ContactPage() {
  return <Contact />;
}
