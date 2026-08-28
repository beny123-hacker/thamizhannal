import Link from "next/link";

const navItems = [
  { tamil: "முகப்பு", href: "/" },
  { tamil: "தமிழ்வாழ்வு", href: "/life" },
  { tamil: "நூல்கள்", href: "/books" },
  { tamil: "ஒளிப்படங்கள்", href: "/gallery" },
  { tamil: "நினைவேந்தல்", href: "/remembrance" },
  { tamil: "தொடர்புகொள்ள", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#53636a] bg-[#182b35] text-[#d9d0c0]">
      <div className="mx-auto max-w-6xl px-5 py-9">
        <div className="grid gap-7 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b99b61] text-base font-extrabold text-[#e4ce9c]">
                த
              </div>

              <div>
                <h3 className="font-serif text-lg font-extrabold text-[#f1e6d0]">
                  தமிழண்ணல்
                </h3>

                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9ea7a8]">
                  Thamizhannal
                </p>
              </div>
            </div>

            <p className="mt-3 max-w-sm text-xs font-semibold leading-6 text-[#aeb6b5]">
              மூதறிஞர் இராம. பெரியகருப்பன்
              <br />
              12.08.1928 – 29.12.2015
            </p>
          </div>

          <div>
            <h4 className="border-l-4 border-[#d8b875] pl-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d8b875]">
              Quick Links
            </h4>

            <div className="mt-3 grid grid-cols-2 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.tamil}
                  href={item.href}
                  className="text-xs font-semibold text-[#b7bfbe] transition hover:text-[#e0c88e]"
                >
                  {item.tamil}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="border-l-4 border-[#d8b875] pl-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d8b875]">
              Contact
            </h4>

            <p className="mt-3 text-xs font-semibold leading-6 text-[#aeb6b5]">
              தமிழண்ணல் தொடர்பான தகவல்கள், நூல்கள், ஒளிப்படங்கள் அல்லது
              நினைவுகளைப் பகிர விரும்பினால் எங்களைத் தொடர்புகொள்ளுங்கள்.
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-block text-xs font-bold text-[#e0c88e] hover:text-white"
            >
              Send a message →
            </Link>
          </div>
        </div>

        <div className="mt-7 border-t border-[#43565e] pt-5 text-center">
          <p className="text-[9px] font-semibold text-[#8f9a9b]">
            © 2026 தமிழண்ணல் — Thamizhannal Tamil Development Foundation.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}