
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link href="/" className="logo" onClick={closeMenu}>
        <span className="logo-mark">W.</span>

        <span className="logo-text">
          <strong>WMMA</strong>
          <small>WE MAKE MOVIES ACADEMY</small>
        </span>
      </Link>

      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
        <Link href="/about" onClick={closeMenu}>
          L’Académie
        </Link>

        <Link href="/programs" onClick={closeMenu}>
          Nos programmes
        </Link>

        <Link href="/#projects" onClick={closeMenu}>
          Nos réalisations
        </Link>

        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <Link
        href="/programs"
        className="nav-cta"
        onClick={closeMenu}
      >
        Découvrir WMMA <span>↗</span>
      </Link>
    </header>
  );
}
