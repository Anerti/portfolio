"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useLayoutEffect, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const childrenRef = useRef(children);
  const [transitioning, setTransitioning] = useState(false);
  const [oldChildren, setOldChildren] = useState<ReactNode>(null);

  useLayoutEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      setOldChildren(childrenRef.current);
      setTransitioning(true);
    }
    childrenRef.current = children;
  }, [pathname, children]);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 400);
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined"
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reducedMotion || !transitioning) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pip-boy-exit">{oldChildren}</div>
      <div className="absolute inset-0 pip-boy-enter">{children}</div>
    </div>
  );
}
