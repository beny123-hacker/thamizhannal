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
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* ===============================
              ABOUT
          ================================ */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b99b61] text-base font-extrabold text-[#e4ce9c]">
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

            <p className="mt-4 max-w-sm text-xs font-semibold leading-6 text-[#aeb6b5]">
              மூதறிஞர் இராம. பெரியகருப்பன்
              <br />
              12.08.1928 – 29.12.2015
            </p>
          </div>


          {/* ===============================
              QUICK LINKS
          ================================ */}
          <div>
            <h4 className="border-l-4 border-[#d8b875] pl-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d8b875]">
              Quick Links
            </h4>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.tamil}
                  href={item.href}
                  className="text-xs font-semibold text-[#b7bfbe] transition duration-200 hover:text-[#e0c88e]"
                >
                  {item.tamil}
                </Link>
              ))}
            </div>
          </div>


          {/* ===============================
              CONTACT
          ================================ */}
          <div>
            <h4 className="border-l-4 border-[#d8b875] pl-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d8b875]">
              Contact
            </h4>

            <p className="mt-4 max-w-md text-xs font-semibold leading-6 text-[#aeb6b5]">
              தமிழண்ணல் தொடர்பான தகவல்கள், நூல்கள், ஒளிப்படங்கள் அல்லது
              நினைவுகளைப் பகிர விரும்பினால் எங்களைத் தொடர்புகொள்ளுங்கள்.
            </p>


            {/* CONTACT ACTIONS */}
            <div className="mt-4 flex flex-wrap items-center gap-3">

              <Link
                href="/contact"
                className="text-xs font-bold text-[#e0c88e] transition hover:text-white"
              >
                Send a message →
              </Link>


              {/* FACEBOOK BUTTON */}
              <a
                href="https://www.facebook.com/Thamizhannal.Facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Thamizhannal on Facebook"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-[#4c6680]
                  bg-[#233b4b]
                  px-3
                  py-1.5
                  text-[11px]
                  font-bold
                  text-[#d9e5ed]
                  transition
                  duration-200
                  hover:border-[#d8b875]
                  hover:bg-[#2b4b60]
                  hover:text-[#f1e6d0]
                "
              >
                {/* Facebook icon */}
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 fill-current text-[#7fa6c2]"
                >
                  <path d="M13.5 21v-8h2.75l.5-3H13.5V8.25c0-.87.29-1.46 1.56-1.46H16.9V4.1c-.32-.04-1.42-.1-2.7-.1-2.67 0-4.5 1.63-4.5 4.62V10H6.7v3h3v8h3.8Z" />
                </svg>

                Connect on Facebook
              </a>

            </div>
          </div>
        </div>


        {/* ===============================
            COPYRIGHT
        ================================ */}
        <div className="mt-8 border-t border-[#43565e] pt-5 text-center">
          <p className="text-[9px] font-semibold tracking-wide text-[#8f9a9b]">
            © 2026 தமிழண்ணல் — Thamizhannal Tamil Development Foundation.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}