import { Palette } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function SiteHeader() {
  const [location] = useLocation();

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-amber-900 ${
      location === path ? "text-amber-900 font-semibold" : "text-amber-700/80"
    }`;

  return (
    <header className="border-b border-amber-200/30 bg-white/40 backdrop-blur-md sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <Palette className="w-7 h-7 text-amber-700" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-900 to-orange-700 bg-clip-text text-transparent leading-tight">
                Personal Color Analysis
              </h1>
            </div>
          </Link>

          <nav className="flex items-center gap-4 md:gap-6 flex-wrap">
            <Link href="/" className={navLinkClass("/")}>
              Featured Analysis
            </Link>
            <Link href="/seasons" className={navLinkClass("/seasons")}>
              All 12 Seasons
            </Link>
            <Link href="/find-my-season" className={navLinkClass("/find-my-season")}>
              Find My Season
            </Link>
            <Link href="/my-analysis" className={navLinkClass("/my-analysis")}>
              My Analysis
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
