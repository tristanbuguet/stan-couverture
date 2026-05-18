"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#avis", label: "Avis clients" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`pointer-events-auto mx-auto max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)] lg:max-w-[1400px] mt-3 rounded-[22px] border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-out ${
          isScrolled
            ? "bg-[rgba(248,248,246,0.88)] backdrop-blur-md shadow-[0_8px_32px_rgba(17,17,17,0.12)] border-[rgba(231,231,231,0.8)]"
            : "bg-transparent backdrop-blur-none border-transparent shadow-[0_8px_32px_rgba(17,17,17,0)]"
        }`}
      >
      <div className="page-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M11.9927 1C12.3328 1.14713 12.7931 1.40923 13.1386 1.58849L15.2845 2.70078L21.9938 6.18657C21.9782 7.49782 22.0315 8.89616 21.968 10.2016C21.9319 10.9417 21.1978 11.4831 20.6647 11.541C20.2517 11.5862 19.7764 11.5721 19.3437 11.5721L16.8293 11.5708L9.54385 11.5711C8.32966 11.5708 7.11861 11.5656 5.90117 11.5728C5.07305 11.5777 5.23034 12.1561 5.21393 12.9901C5.20632 13.3758 5.21137 13.8048 5.23457 14.1889C5.34623 14.3956 5.47133 14.57 5.67497 14.605C6.02087 14.6642 6.43588 14.642 6.78956 14.64L8.54269 14.6358L16.8101 14.6384L18.9775 14.6351C19.9009 14.6332 20.8257 14.5039 21.5404 15.423C22.0317 16.0551 21.9956 16.7107 21.9872 17.5365C21.9838 17.8634 21.9872 18.2089 21.9872 18.538L21.9869 22.9993L2 23L2.0002 19.0762L5.21994 19.0746C5.2172 19.28 5.21572 19.4858 5.21549 19.6913C5.21592 20.2063 5.31819 20.5282 5.76446 20.5841C6.09172 20.625 6.43337 20.6048 6.76339 20.6044L8.59979 20.6005L17.791 20.6077C18.1313 20.6077 18.6984 20.5936 18.7202 19.9995C18.7427 19.3883 18.7125 18.7729 18.731 18.1552C18.7435 17.7345 18.4772 17.5718 18.1851 17.5414C17.7649 17.5215 17.3373 17.5378 16.9163 17.5417C16.1917 17.547 15.4671 17.547 14.7425 17.5414L6.97015 17.5408L4.96092 17.5444C4.52356 17.546 4.04162 17.58 3.61077 17.4904C2.78795 17.3252 2.00638 16.4882 2.01649 15.333C2.02986 13.8087 1.96177 12.0243 2.05231 10.5006C2.08944 9.87539 2.81923 9.23773 3.29895 9.19945C3.82503 9.1579 4.46211 9.16313 5.02232 9.16281H8.18397L18.7724 9.16215L18.7794 7.98531L12.0122 4.17107C10.4075 5.04345 8.79721 6.04117 7.19136 6.92412C6.62269 7.23673 5.89454 7.73273 5.30828 7.96437C5.1736 8.01737 4.36548 8.00068 4.18033 8.00068L2.01367 7.99741L2.00154 6.22086L11.9927 1Z"
                fill={isScrolled ? "#1C1B1F" : "white"}
                style={{ transition: "fill 300ms ease" }}
              />
            </svg>
            <div className="hidden md:flex flex-col justify-center h-8">
              <span
                className={`text-lg font-bold tracking-tight transition-colors leading-none block ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Stanislas Couverture
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#6B705C] ${
                  isScrolled ? "text-slate-600" : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33187202727"
              className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-[#6B705C]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              01 87 20 27 27
            </a>
            <a
              href="#contact"
              className="btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex"
            >
              Devis gratuit
            </a>
            <button
              type="button"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-[var(--color-border)] bg-[rgba(248,248,246,0.92)] backdrop-blur-md rounded-b-[22px]"
          >
            <div className="page-container py-4 space-y-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center py-3 text-slate-700 font-medium hover:text-[#6B705C] transition-colors border-b border-[#E7E7E7] last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href="tel:+33187202727"
                  className="flex items-center gap-2 text-slate-600 text-sm"
                >
                  <Phone className="w-4 h-4 text-[#1C1B1F]" />
                  01 87 20 27 27 &middot; 24h/24, 7j/7
                </a>
                <a
                  href="#contact"
                  className="btn-primary w-full px-5 py-3 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Devis gratuit en 48h
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </motion.header>
  );
}
