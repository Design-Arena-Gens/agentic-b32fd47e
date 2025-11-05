"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "#categories" },
  { label: "Collections", href: "#collections" },
  { label: "Stories", href: "#stories" }
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          <Image
            src="/logo.svg"
            alt="Astra Market"
            width={32}
            height={32}
            priority
          />
          <span>Astra Market</span>
        </Link>
        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button type="button" className="ghost">
            Sign in
          </button>
          <button type="button" className="primary">
            View cart
          </button>
        </div>
      </div>
    </header>
  );
}
