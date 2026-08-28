"use client";

import Link from "next/link";
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

  return (
    <header className="sticky top-0 z-50 border-b border-[#c8b79c] bg-[#182b35]/95 shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96b] bg-[#233b47] text-lg font-bold text-[#e6d4ad]">
            த
          </div>

          <div>
            <h1 className="text-base font-extrabold tracking-wide text-[#f2e7cf]">
              தமிழண்ணல்
            </h1>

            <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#c8b79c]">
              Thamizhannal
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

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
                  className={`mt-0.5 block text-[8px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
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

        <button
          aria-label="Open menu"
          className="rounded border border-[#9d8763] px-2 py-1 text-base font-bold text-[#f2e7cf] lg:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
}