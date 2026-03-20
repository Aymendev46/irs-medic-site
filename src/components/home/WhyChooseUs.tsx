const WHY_CARDS = [
  {
    num: "01",
    title: "Attorneys & CPAs in one team",
    body: "No more advisors who don't talk to each other. Combined law and accounting delivering real outcomes.",
  },
  {
    num: "02",
    title: "International expertise",
    body: "Most firms aren't built for global families. We are. Offshore disclosure, expat compliance, cross-border structuring.",
  },
  {
    num: "03",
    title: "Proven track record",
    body: "Thousands of IRS resolutions, cleared penalties, and sustainable tax outcomes. True advocacy.",
  },
  {
    num: "04",
    title: "Personalized strategy",
    body: "Tailored to your unique situation and goals. No cookie-cutter solutions, no one-size-fits-all pitch.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="px-10 py-16 border-b border-white/[0.07]">
      <span className="block text-[10px] tracking-[2px] text-gold uppercase mb-2">
        Why choose us
      </span>
      <h2 className="font-playfair text-[1.9rem] font-bold text-white mb-2 tracking-[-0.3px]">
        OneTeam Legal &amp; Tax
      </h2>
      <p className="text-[14px] text-white/45 leading-[1.8] max-w-[540px] mb-10 font-light">
        Two decades resolving the toughest tax problems. One team, one strategy,
        one outcome.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WHY_CARDS.map((card) => (
          <div
            key={card.num}
            className="bg-white/[0.03] border border-white/[0.07] rounded-lg p-7"
          >
            <div className="font-playfair text-[2.2rem] font-bold text-gold/[0.18] mb-2">
              {card.num}
            </div>
            <h3 className="text-[15px] font-medium text-white mb-2">
              {card.title}
            </h3>
            <p className="text-[13px] text-white/45 leading-[1.7] font-light">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
