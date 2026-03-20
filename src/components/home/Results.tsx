const STATS = [
  { num: "$50M+", label: "In tax debt resolved" },
  { num: "2,000+", label: "Clients helped" },
  { num: "20+", label: "Years in practice" },
  { num: "40+", label: "Countries served" },
];

const CASES = [
  {
    outcome: "$7M penalty → $1.2M",
    category: "Offshore Disclosure",
    title: "US expat with $8M silver portfolio",
    body: "A prior firm quoted $7 million to resolve his offshore penalty. We enrolled him in the IRS Streamlined Program and cut his total bill to $1.2M — a savings of $5.8 million. He had no idea this program existed.",
    highlight: "Saved $5.8M",
  },
  {
    outcome: "Criminal charges dismissed",
    category: "Criminal Tax Defense",
    title: "Real estate developer raided at 6am",
    body: "The IRS Criminal Investigation Division executed a search warrant on his home and office. After forensic accounting review, we demonstrated only $40K in unreported income — a far cry from the alleged scheme. The DOJ declined prosecution entirely.",
    highlight: "No charges filed",
  },
  {
    outcome: "$2M liability — resolved",
    category: "IRS Resolution",
    title: "Wealth manager with career-ending lien",
    body: "An active IRS lien threatened his ability to manage hundreds of millions in client assets. We negotiated a resolution while preserving his professional licenses. His AUM grew from $800M to $6B under management in the years that followed.",
    highlight: "Career saved",
  },
  {
    outcome: "10 years of unfiled returns",
    category: "Back Tax Filing",
    title: "US citizen living abroad since 2010",
    body: "She hadn't filed US returns in over a decade while living in Switzerland. We filed all delinquent returns through the Streamlined Foreign Offshore Procedure and she owed zero penalties. No enforcement action taken.",
    highlight: "Zero penalties",
  },
];

export default function Results() {
  return (
    <section id="results" className="border-b border-white/[0.07] bg-[#0a1220] min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] tracking-[2.5px] text-gold/70 uppercase">Proven Results</span>
          </div>
          <h2 className="font-playfair text-[2rem] md:text-[2.4rem] font-bold text-white tracking-[-0.5px] mb-3">
            Cases we&apos;ve won
          </h2>
          <p className="text-[14px] text-white/40 max-w-[500px] leading-[1.8] font-light">
            Every case below represents a real person whose life was put on hold by an IRS
            problem — and who came out the other side.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {STATS.map((s) => (
            <div
              key={s.num}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-5 text-center"
            >
              <div className="font-playfair text-[1.9rem] font-bold text-gold leading-none mb-1.5">
                {s.num}
              </div>
              <div className="text-[11px] text-white/35 tracking-[0.3px] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.02] border border-white/[0.07] border-l-[3px] border-l-gold/60 rounded-r-xl px-6 py-6 hover:border-l-gold transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[9px] tracking-[1.5px] text-white/25 uppercase">
                    {c.category}
                  </span>
                  <div className="text-[11px] text-gold font-semibold mt-0.5 tracking-[0.3px]">
                    {c.outcome}
                  </div>
                </div>
                <span className="text-[9px] text-green-400/70 border border-green-400/15 bg-green-400/5 px-2 py-1 rounded whitespace-nowrap font-medium tracking-[0.5px] uppercase">
                  {c.highlight}
                </span>
              </div>
              <h3 className="text-[14px] font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-[12px] text-white/40 leading-[1.75] font-light">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[11px] text-white/20 text-center">
          Results shown are representative of past cases. Prior results do not guarantee a similar outcome.
          Names and identifying details have been changed to protect client privacy.
        </p>
      </div>
    </section>
  );
}
