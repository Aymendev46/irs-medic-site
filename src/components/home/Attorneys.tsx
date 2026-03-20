const ATTORNEYS = [
  {
    name: "Anthony E. Parent",
    credentials: "Esq.",
    role: "Managing Partner",
    firm: "IRSMedic | Parent & Parent LLP",
    team: "OneTeam Legal & Tax",
    initials: "AP",
    quote:
      "Saving our clients' fortunes and their sanity honestly gives me a rush. I love what we do.",
    bio: "Anthony founded Parent & Parent LLP after recognizing that most tax attorneys lacked the accounting fluency to truly protect clients. He focuses on high-stakes IRS disputes, offshore disclosure, criminal tax defense, and complex international tax matters — representing clients before the U.S. Tax Court and in over 40 countries.",
    focus: [
      "IRS Criminal Defense",
      "Offshore & FBAR Disclosure",
      "Tax Court Litigation",
      "International Tax",
    ],
  },
  {
    name: "Michael Mellott",
    credentials: "CPA",
    role: "Tax Director",
    firm: "IRSMedic | Parent & Parent LLP",
    team: "OneTeam Legal & Tax",
    initials: "MM",
    quote:
      "Being a part of IRSMedic allows me to be the CPA I always wanted to be: On the side of our clients.",
    bio: "Michael leads the accounting and compliance operations at the firm, ensuring every legal strategy is grounded in airtight financial analysis. His work spans forensic accounting, offshore compliance, multi-year back filings, and tax return preparation — so clients are never left with a gap between their legal defense and their financial records.",
    focus: [
      "Forensic Accounting",
      "FBAR & FATCA Compliance",
      "Back Tax Filings",
      "Tax Preparation & Strategy",
    ],
  },
];

export default function Attorneys() {
  return (
    <section id="team" className="border-b border-white/[0.07] bg-[#080f1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-lime/60" />
            <span className="text-[10px] tracking-[2.5px] text-lime/70 uppercase">Our Team</span>
          </div>
          <h2 className="font-playfair text-[2rem] md:text-[2.4rem] font-bold text-white tracking-[-0.5px] mb-3">
            The attorneys &amp; CPAs behind your case
          </h2>
          <p className="text-[14px] text-white/40 max-w-[500px] leading-[1.8] font-light">
            You work directly with the people below — not a junior associate,
            not an intake coordinator. The actual experts on your case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ATTORNEYS.map((a) => (
            <div
              key={a.name}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl overflow-hidden hover:border-lime/20 transition-all"
            >
              {/* Quote banner */}
              <div className="relative bg-gradient-to-br from-[#0d1e10] to-[#0a1628] px-7 pt-7 pb-6 border-b border-white/[0.06]">
                {/* Big quotation mark */}
                <div className="absolute top-4 left-5 font-playfair text-[3rem] leading-none text-lime/25 select-none">
                  &ldquo;
                </div>
                {/* Left lime bar */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-lime/60 rounded-r" />

                <blockquote className="pl-4 pt-4">
                  <p className="text-[15px] font-playfair font-medium text-white/85 leading-[1.65] italic">
                    &ldquo;{a.quote}&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Bio */}
              <div className="px-7 py-6">
                {/* Name / role */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime/25 to-[#0d1e10] border-2 border-lime/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_-4px_rgba(141,198,63,0.25)]">
                    <span className="font-playfair text-[1.3rem] font-bold text-lime">
                      {a.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white">
                      {a.name},{" "}
                      <span className="text-lime font-normal">{a.credentials}</span>
                    </h3>
                    <p className="text-[11px] text-white/35 mt-0.5">{a.role}</p>
                    <p className="text-[10px] text-lime/40 mt-0.5 tracking-[0.3px]">
                      {a.firm}
                    </p>
                  </div>
                </div>

                <p className="text-[12px] text-white/40 leading-[1.75] font-light mb-5">
                  {a.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {a.focus.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] text-lime/60 border border-lime/15 bg-lime/5 px-2.5 py-1 rounded tracking-[0.3px]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-5 bg-white/[0.015] border border-white/[0.06] rounded-xl flex items-start gap-4">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lime/40 mt-0.5 flex-shrink-0">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <p className="text-[11px] text-white/30 leading-[1.7] font-light">
            Parent &amp; Parent LLP is licensed to practice law in Connecticut and before
            the U.S. Tax Court. We represent clients in IRS matters in all 50 states and
            internationally. Attorney advertising. Prior results do not guarantee similar outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
