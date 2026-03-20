const SCHEDULE_URL = "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";
const PHONE_HREF = "tel:+12032858545";
const PHONE = "(203) 285-8545";

const TRUST_BADGES = [
  "IRS Licensed",
  "20+ Years Experience",
  "Global Families & Expats",
  "Criminal Defense",
  "Offshore Disclosure",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080f1e] min-h-[calc(100vh-72px)] flex flex-col justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1e38] via-[#080f1e] to-[#080f1e] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-gold/50" />
          <span className="text-[11px] tracking-[2.5px] text-gold/70 uppercase font-medium">
            Parent &amp; Parent LLP — IRS Resolution Since 2007
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-[2.8rem] md:text-[3.8rem] lg:text-[4.4rem] font-bold leading-[1.1] tracking-[-1px] text-white max-w-[820px] mb-6">
          The IRS sends letters.{" "}
          <em className="text-gold not-italic">We send attorneys.</em>
        </h1>

        {/* Sub */}
        <p className="text-[16px] md:text-[17px] text-white/55 max-w-[560px] leading-[1.8] mb-3 font-light">
          Attorney-CPA teams have resolved over{" "}
          <span className="text-white/80 font-normal">$50 million</span> in IRS tax debt
          for entrepreneurs, expats, and global families. Your situation is survivable —
          we&apos;ll prove it.
        </p>
        <p className="text-[14px] text-white/35 max-w-[500px] leading-[1.7] mb-10 font-light">
          Offshore disclosure · Audit defense · Tax debt relief · Criminal defense ·
          Estate planning
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href={SCHEDULE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-[#080f1e] text-[13px] font-semibold px-7 py-[14px] rounded tracking-[0.3px] hover:opacity-90 transition-opacity"
          >
            Schedule a Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-[13px] px-7 py-[14px] rounded hover:border-white/40 hover:text-white transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.72 3.38 2 2 0 0 1 3.7 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {PHONE}
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-1 text-white/45 text-[13px] px-4 py-[14px] hover:text-white/70 transition-colors"
          >
            View case results ↓
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {TRUST_BADGES.map((badge, i) => (
            <span key={badge} className="flex items-center gap-2 text-[11px] text-white/35">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/20" />}
              <span className="flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold/60">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {badge}
              </span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
