"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "writeups", label: "Articles" },
  { id: "career", label: "Carrière" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const active = pathname.split("/").filter(Boolean)[0] || "about";

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 flex size-10 items-center justify-center border-2 border-sidebar-border bg-sidebar text-sidebar-foreground shadow-lg md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 border-r-2 border-sidebar-border bg-sidebar p-8 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="mb-10 border-b-2 border-sidebar-border pb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/spring-logo.svg"
                alt=""
                width={28}
                height={28}
                className="size-7 opacity-80"
              />
              <h2 className="whitespace-nowrap font-heading text-xs font-semibold uppercase tracking-[0.12em] text-sidebar-foreground">
                E. ANDRIANOMBANA
              </h2>
            </div>

          </div>

          <nav className="flex-1 space-y-1">
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`/${s.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-left text-sm transition-all duration-150",
                  active === s.id
                    ? "bg-sidebar-accent font-semibold text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <ChevronRight
                  size={14}
                  className={cn(
                    "shrink-0 transition-all duration-150",
                    active === s.id
                      ? "translate-x-0 opacity-100 text-sidebar-primary"
                      : "-translate-x-1 opacity-0"
                  )}
                />
                {s.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 border-t-2 border-sidebar-border pt-6">
            <span className="inline-block size-2 animate-pulse rounded-full bg-sidebar-primary shadow-[0_0_6px] shadow-sidebar-primary" />
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-sidebar-primary">
              ON AIR
            </span>
            <span className="ml-auto font-heading text-[10px] uppercase tracking-[0.2em] text-sidebar-foreground/30">
              LIVE
            </span>
          </div>
        </div>
      </aside>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
