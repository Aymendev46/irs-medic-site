import Link from "next/link";

const SCHEDULE_URL = "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between px-10 py-4 bg-navy border-b border-white/[0.07]">
      <Link
        href="/"
        className="font-playfair text-xl font-bold tracking-[-0.3px] text-white"
        aria-label="IRSMedic home"
      >
        IRS<span className="text-gold">Medic</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link
          href="#services"
          className="text-[13px] text-white/45 tracking-[0.3px] hover:text-white transition-colors"
        >
          Services
        </Link>
        <Link
          href="#about"
          className="text-[13px] text-white/45 tracking-[0.3px] hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="#results"
          className="text-[13px] text-white/45 tracking-[0.3px] hover:text-white transition-colors"
        >
          Cases
        </Link>
        <Link
          href="#contact"
          className="text-[13px] text-white/45 tracking-[0.3px] hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>

      <a
        href={SCHEDULE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gold text-navy text-[13px] font-medium px-5 py-[9px] rounded hover:opacity-90 transition-opacity"
      >
        Schedule a call
      </a>
    </nav>
  );
}
