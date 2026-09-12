"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { tamil: "முகப்பு", english: "Home", href: "/" },
  { tamil: "தமிழ்வாழ்வு", english: "His Life", href: "/life" },
  { tamil: "நூல்கள்", english: "Books", href: "/books" },
  { tamil: "ஒளிப்படங்கள்", english: "Gallery", href: "/gallery" },
  { tamil: "நினைவேந்தல்", english: "Remembrance", href: "/remembrance" },
  { tamil: "தொடர்புகொள்ள", english: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActiveLink = (href: string) => {
    return href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#c8b79c]/30 bg-[#162a36] shadow-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a96b]/80 bg-[#1e3847] text-base font-bold text-[#e6d4ad]">
            த
          </div>

          <div>
            <h1 className="text-base font-bold tracking-wide text-[#f2e7cf]">
              தமிழண்ணல்
            </h1>

            <p className="text-[7.5px] font-semibold uppercase tracking-[0.28em] text-[#c8b79c]">
              Thamizhannal
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={item.tamil}
                href={item.href}
                className="group relative text-center"
              >
                <span
                  className={`block text-xs font-bold transition-colors duration-200 ${
                    isActive
                      ? "text-[#d8b36a]"
                      : "text-[#f0e5ce] group-hover:text-[#d8b36a]"
                  }`}
                >
                  {item.tamil}
                </span>

                <span
                  className={`mt-0.5 block text-[8px] font-semibold uppercase tracking-wider ${
                    isActive
                      ? "text-[#d8b36a]"
                      : "text-[#9eaaad]"
                  }`}
                >
                  {item.english}
                </span>

                <span
                  className={`absolute -bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-[#d8b36a] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU */}
        <div className="relative lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded border border-[#9d8763] text-lg font-bold text-[#f2e7cf] transition hover:bg-[#233b47]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* RIGHT SIDE MOBILE DROPDOWN */}
          {menuOpen && (
            <div
              className="
                absolute right-0 top-[calc(100%+0.75rem)]
                z-[60]
                w-52
                overflow-hidden
                rounded-lg
                border border-[#b99b61]/40
                bg-[#182b35]/85
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <nav className="py-1.5">
                {navItems.map((item) => {
                  const isActive = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.tamil}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        block px-4 py-3
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#233b47]/90"
                            : "hover:bg-[#ffffff]/5"
                        }
                      `}
                    >
                      {/* Tamil Navigation */}
                      <span
                        className={`block text-sm font-extrabold ${
                          isActive
                            ? "text-[#d8b36a]"
                            : "text-[#f2e7cf]"
                        }`}
                      >
                        {item.tamil}
                      </span>

                      {/* English Translation */}
                      <span
                        className={`mt-0.5 block text-[8px] font-semibold uppercase tracking-[0.18em] ${
                          isActive
                            ? "text-[#e0c88e]"
                            : "text-[#aeb6b5]"
                        }`}
                      >
                        {item.english}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}