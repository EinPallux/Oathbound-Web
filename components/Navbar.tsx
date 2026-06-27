"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "#realm", label: "The Realm" },
  { href: "#first-look", label: "First Look" },
];

// TODO: replace with the real Oathbound community invite once available.
const COMMUNITY_URL = "#community";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" aria-label="Oathbound — home">
          <img src="/icon.svg" alt="" className="crest" />
          <Wordmark size="sm" />
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <a href={COMMUNITY_URL} className="btn-epic nav-cta">
          <FontAwesomeIcon icon={faDiscord} /> Join
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      <div className={`mobile-drawer${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={COMMUNITY_URL} className="btn-epic" onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faDiscord} /> Join the Community
        </a>
      </div>
    </nav>
  );
}
