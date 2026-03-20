const SCHEDULE_URL = "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";

export default function Hero() {
  return (
    <section className="px-10 pt-24 pb-20 border-b border-white/[0.07]">
      <span className="inline-block text-[11px] tracking-[2px] text-gold uppercase mb-6 border border-gold/30 px-[14px] py-1 rounded-sm">
        Parent &amp; Parent LLP
      </span>

      <h1 className="font-playfair text-[3.2rem] md:text-[3.2rem] text-[2.2rem] font-bold leading-[1.15] tracking-[-0.5px] text-white max-w-[680px] mb-5">
        We eliminate your IRS anxiety.
        <br />
        <em className="text-gold not-italic italic">Legally. Permanently.</em>
      </h1>

      <p className="text-[15px] text-white/45 max-w-[520px] leading-[1.8] mb-10 font-light">
        Attorneys and CPAs working as one team to resolve your toughest tax
        problems, protect your assets, and build a clear path forward for global
        families and entrepreneurs.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href={SCHEDULE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold text-navy text-[13px] font-medium px-[26px] py-[13px] rounded tracking-[0.3px] hover:opacity-90 transition-opacity"
        >
          Schedule your call
        </a>
        <a
          href="#results"
          className="border border-white/25 text-white/70 text-[13px] px-[26px] py-[13px] rounded hover:border-white/50 transition-colors"
        >
          View our cases
        </a>
      </div>
    </section>
  );
}
