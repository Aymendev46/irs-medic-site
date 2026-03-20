import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/Dz1wT3u4usHegBD57nqA/logo-box-655x655-trans.png";
const SCHEDULE_URL =
  "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";
const PHONE = "(203) 285-8545";
const PHONE_HREF = "tel:+12032858545";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#080f1e]/95 backdrop-blur-sm border-b border-white/[0.07]">
      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="IRSMedic home">
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

        <div className="hidden md:flex items-center gap-7">
          {[
            ["Services", "#services"],
            ["Our Team", "#team"],
            ["Case Results", "#results"],
            ["Testimonials", "#testimonials"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[13px] text-white/45 tracking-[0.2px] hover:text-white/90 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

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
            className="bg-gold text-[#080f1e] text-[12px] font-semibold px-5 py-[9px] rounded hover:opacity-90 transition-opacity tracking-[0.2px]"
          >
            Free Consultation
          </a>
        </div>
      </nav>
    </header>
  );
}
