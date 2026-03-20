const ATTORNEYS = [
  {
    name: "Anthony E. Parent",
    credentials: "J.D.",
    role: "Founding Attorney",
    initials: "AP",
    bio: "Anthony founded IRSMedic after recognizing that most tax attorneys lacked the accounting fluency to truly protect clients. He focuses on high-stakes IRS disputes, offshore disclosure, criminal tax defense, and complex international tax matters. He is admitted to practice before the U.S. Tax Court and has represented clients in over 40 countries.",
    focus: [
      "IRS Criminal Defense",
      "Offshore & FBAR Disclosure",
      "Tax Court Litigation",
      "International Tax",
    ],
  },
  {
    name: "Jonathan Mariner Parent",
    credentials: "CPA",
    role: "Managing CPA",
    initials: "JP",
    bio: "Jonathan leads the accounting and compliance side of the firm, ensuring every legal strategy is grounded in airtight financial analysis. His expertise in forensic accounting, offshore compliance, and tax preparation means clients never have a gap between their legal defense and their financial records.",
    focus: [
      "Forensic Accounting",
      "FBAR & FATCA Compliance",
      "Estate & Trust Planning",
      "Tax Preparation & Strategy",
    ],
  },
];

export default function Attorneys() {
  return (
    <section id="team" className="border-b border-white/[0.07] bg-[#080f1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] tracking-[2.5px] text-gold/70 uppercase">Our Team</span>
          </div>
          <h2 className="font-playfair text-[2rem] md:text-[2.4rem] font-bold text-white tracking-[-0.5px] mb-3">
            The attorneys &amp; CPAs behind your case
          </h2>
          <p className="text-[14px] text-white/40 max-w-[500px] leading-[1.8] font-light">
            You&apos;ll work directly with the people below. Not a junior associate.
            Not an intake team. The actual experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ATTORNEYS.map((a) => (
            <div
              key={a.name}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-7 hover:border-gold/25 transition-all"
            >
              <div className="flex items-start gap-5 mb-5">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair text-[1.1rem] font-bold text-gold">
                    {a.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">
                    {a.name},{" "}
                    <span className="text-gold font-normal">{a.credentials}</span>
                  </h3>
                  <p className="text-[11px] text-white/35 tracking-[0.3px] mt-0.5">
                    {a.role} · Parent &amp; Parent LLP
                  </p>
                </div>
              </div>

              <p className="text-[13px] text-white/45 leading-[1.75] font-light mb-5">
                {a.bio}
              </p>

              <div className="flex flex-wrap gap-2">
                {a.focus.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] text-gold/60 border border-gold/15 bg-gold/5 px-2.5 py-1 rounded tracking-[0.3px]"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Firm note */}
        <div className="mt-8 p-5 bg-white/[0.015] border border-white/[0.06] rounded-xl flex items-start gap-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/50 mt-0.5 flex-shrink-0">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p className="text-[12px] text-white/35 leading-[1.7] font-light">
            Parent &amp; Parent LLP is licensed to practice law in Connecticut and before
            the U.S. Tax Court. We represent clients in IRS matters in all 50 states and
            internationally. Attorney advertising. Prior results do not guarantee similar outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
