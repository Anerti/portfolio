"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "writeups", label: "Write-ups" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const scrollTo = (id: string) => {
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
            <h2 className="font-heading text-xl font-semibold uppercase tracking-[0.2em] text-sidebar-foreground">
              A. Neri
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-sidebar-primary" />
              <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-sidebar-primary">
                Backend Developer
              </span>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-left text-sm transition-all duration-150",
                  active === s.id
                    ? "bg-sidebar-accent font-semibold text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/60 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <span
                  className={cn(
                    "inline-block size-1.5 rounded-full transition-colors duration-150",
                    active === s.id ? "bg-sidebar-primary" : "bg-transparent"
                  )}
                />
                {s.label}
              </button>
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
