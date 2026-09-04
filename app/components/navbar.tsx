"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          தமிழண்ணல்
        </Link>

        <div className="navbar-links">
          <Link href="/">முகப்பு</Link>

          <Link href="/life">வாழ்க்கை</Link>

          <Link href="/books">நூல்கள்</Link>

          <Link href="/gallery">ஒளிப்படங்கள்</Link>

          <Link href="/remembrance">நினைவகம்</Link>

          <Link href="/contact">தொடர்பு</Link>
        </div>
      </div>
    </nav>
  );
}