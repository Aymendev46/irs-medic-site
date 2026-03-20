"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LOGO_URL =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/Dz1wT3u4usHegBD57nqA/logo-box-655x655-trans.png";
const SCHEDULE_URL =
  "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";
const PHONE = "(203) 285-8545";
const PHONE_HREF = "tel:+12032858545";

const NAV_LINKS = [
  ["Services", "#services"],
  ["Our Team", "#team"],
  ["Case Results", "#results"],
  ["Testimonials", "#testimonials"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="h-[72px] sticky top-0 z-50 bg-[#080f1e]/95 backdrop-blur-sm border-b border-white/[0.07] flex items-center">
        <nav className="w-full max-w-5xl mx-auto flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="IRSMedic home" onClick={close}>
            <Image
              src={LOGO_URL}
              alt="IRSMedic logo"
              width={40}
              height={40}
              priority
              className="rounded"
            />
            <span className="font-playfair text-[1.25rem] font-bold tracking-[-0.3px] text-white leading-none">
              IRS<span className="text-gold">Medic</span>
              <span className="block text-[10px] text-lime/50 font-sans font-normal tracking-widest uppercase mt-0.5">
                Parent &amp; Parent LLP
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-[13px] text-white/45 tracking-[0.2px] hover:text-white/90 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden lg:flex items-center gap-2 text-[12px] text-white/50 hover:text-white transition-colors border border-white/10 px-4 py-[8px] rounded"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.72 3.38 2 2 0 0 1 3.7 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>

            <a
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-gold text-[#080f1e] text-[12px] font-semibold px-5 py-[9px] rounded hover:opacity-90 transition-opacity tracking-[0.2px]"
            >
              Free Consultation
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors gap-[5px]"
            >
              <span
                className={`block h-[1.5px] bg-white/70 rounded-full transition-all duration-300 origin-center ${
                  open ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white/70 rounded-full transition-all duration-300 ${
                  open ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white/70 rounded-full transition-all duration-300 origin-center ${
                  open ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-40 md:hidden transition-all duration-300 ease-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl bg-[#0d1728] border border-white/[0.09] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Nav links */}
          <nav className="px-2 pt-3 pb-2">
            {NAV_LINKS.map(([label, href], i) => (
              <Link
                key={label}
                href={href}
                onClick={close}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] text-white/60 hover:text-white hover:bg-white/[0.06] transition-all group"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <span className="w-1 h-1 rounded-full bg-lime/40 group-hover:bg-lime transition-colors" />
                {label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px bg-white/[0.07] mx-4" />

          {/* Phone + CTA */}
          <div className="px-4 py-4 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              onClick={close}
              className="flex items-center justify-center gap-2.5 text-[13px] text-white/55 border border-white/10 rounded-xl py-3 hover:text-white hover:border-white/25 transition-all"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.72 3.38 2 2 0 0 1 3.7 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>
            <a
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-center bg-gold text-[#080f1e] text-[13px] font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity tracking-[0.2px]"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
