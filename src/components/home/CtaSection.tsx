const SCHEDULE_URL = "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";
const PHONE = "(203) 285-8545";
const PHONE_HREF = "tel:+12032858545";

export default function CtaSection() {
  return (
    <section id="contact" className="border-b border-white/[0.07] bg-[#0a1220]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] tracking-[2.5px] text-gold/70 uppercase">Get Help Now</span>
            <div className="w-6 h-px bg-gold/50" />
          </div>

          <h2 className="font-playfair text-[2rem] md:text-[2.6rem] font-bold text-white tracking-[-0.5px] mb-4">
            Your IRS problem won&apos;t resolve itself.
          </h2>
          <p className="text-[15px] text-white/45 font-light leading-[1.8] mb-3">
            The longer you wait, the more interest and penalties accumulate — and
            the fewer options you have. A free consultation costs you nothing.
            Waiting costs you everything.
          </p>
          <p className="text-[13px] text-white/30 font-light mb-10">
            Confidential · Attorney-client privilege applies from the first call ·
            No obligation
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-[#080f1e] text-[14px] font-semibold px-8 py-[15px] rounded hover:opacity-90 transition-opacity tracking-[0.2px]"
            >
              Schedule Your Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href={PHONE_HREF}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 text-[14px] px-8 py-[15px] rounded hover:border-white/40 hover:text-white transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.72 3.38 2 2 0 0 1 3.7 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Reassurance row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "Free first consultation",
              "Immediate attorney-client privilege",
              "No obligation",
              "Worldwide clients welcome",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-[11px] text-white/30">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold/50">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
