const SCHEDULE_URL = "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="px-10 py-20 text-center bg-navy-light border-t border-gold/[0.15]"
    >
      <h2 className="font-playfair text-[2rem] font-bold text-white mb-3">
        Ready to end your IRS anxiety?
      </h2>
      <p className="text-[14px] text-white/45 mb-8 font-light">
        Book a call with our team. We&apos;ll give you clarity on your situation
        and a roadmap you can act on.
      </p>
      <a
        href={SCHEDULE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gold text-navy text-[13px] font-medium px-[26px] py-[13px] rounded tracking-[0.3px] hover:opacity-90 transition-opacity"
      >
        Schedule your anxiety-elimination call
      </a>
    </section>
  );
}
