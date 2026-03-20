const STATS = [
  { num: "$7M", label: "Penalty reduced to $1.2M" },
  { num: "20+", label: "Years of experience" },
  { num: "1000s", label: "IRS resolutions" },
];

const CASES = [
  {
    outcome: "$2M tax liability — resolved",
    title: "Wealth manager facing career-ending lien",
    body: "Despite an active IRS lien, his firm grew from $800M to $6B under management. The right team makes a tax problem survivable.",
  },
  {
    outcome: "Criminal charges — dismissed",
    title: "Real estate developer raided at dawn",
    body: "Forensic accounting revealed only $40K unreported income. IRS dropped the case entirely.",
  },
  {
    outcome: "$7M penalty reduced to $1.2M",
    title: "US expat with $8M silver portfolio",
    body: "Another firm quoted $7M to resolve. We used the Streamlined program and cut the bill to $1.2M.",
  },
];

export default function Results() {
  return (
    <section id="results" className="px-10 py-16 border-b border-white/[0.07]">
      <span className="block text-[10px] tracking-[2px] text-gold uppercase mb-10">
        Results
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {STATS.map((stat) => (
          <div
            key={stat.num}
            className="text-center py-7 px-4 bg-white/[0.03] border border-white/[0.07] rounded-lg"
          >
            <div className="font-playfair text-[2.2rem] font-bold text-gold">
              {stat.num}
            </div>
            <div className="text-[11px] text-white/45 mt-1 tracking-[0.3px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-playfair text-[1.9rem] font-bold text-white mb-6 tracking-[-0.3px]">
        Cases we&apos;ve won
      </h2>

      <div className="flex flex-col gap-4">
        {CASES.map((c) => (
          <div
            key={c.title}
            className="bg-white/[0.03] border border-white/[0.07] border-l-2 border-l-gold rounded-r-lg px-7 py-7"
          >
            <div className="text-[10px] tracking-[1.5px] text-gold uppercase mb-2">
              {c.outcome}
            </div>
            <h3 className="text-[15px] font-medium text-white mb-2">
              {c.title}
            </h3>
            <p className="text-[13px] text-white/45 leading-[1.7] font-light">
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
