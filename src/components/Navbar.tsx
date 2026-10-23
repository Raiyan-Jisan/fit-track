"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // These will come from the shared plan/saved state later
  const planCount = 0;
  const savedCount = 0;

  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
      active
        ? "bg-brand/10 text-brand"
        : "text-base-content/70 hover:text-brand"
    }`;

  return (
    <header className="border-b border-base-300">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6">
        {/* Left: logo */}
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="FitLog logo" width={28} height={28} />
            <span className="hidden font-heading text-lg font-semibold tracking-wider sm:inline">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Center: links (only the active one has a pill) */}
        <div className="navbar-center">
          <ul className="flex items-center gap-2">
            <li>
              <Link href="/" className={linkClass(pathname === "/")}>
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={linkClass(pathname === "/my-plan")}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: counters */}
        <div className="navbar-end">
          <Link href="/my-plan" className="flex items-center gap-6 text-xs">
            <span className="flex items-center gap-2 text-base-content">
              Plan
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1.5 text-[10px] font-bold text-black">
                {planCount}
              </span>
            </span>
            <span className="flex items-center gap-2 text-base-content/60">
              Saved
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-base-300 bg-base-100 px-1.5 text-[10px] font-bold text-base-content">
                {savedCount}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}