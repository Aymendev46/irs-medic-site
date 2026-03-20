export default function StatsBar() {
  return (
    <div className="border-b border-white/[0.07] bg-white/[0.015]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/[0.07]">
        {[
          { num: "$50M+", label: "Tax debt resolved" },
          { num: "2,000+", label: "Clients helped" },
          { num: "20+", label: "Years in practice" },
          { num: "50 States", label: "+ International" },
        ].map((s) => (
          <div key={s.num} className="px-6 text-center">
            <div className="font-playfair text-[1.7rem] font-bold text-gold leading-none mb-1">
              {s.num}
            </div>
            <div className="text-[11px] text-white/35 tracking-[0.3px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
