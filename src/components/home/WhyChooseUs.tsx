const PILLARS = [
  {
    icon: "⚖",
    title: "Attorneys & CPAs — One Team",
    body: "Most firms are either law firms or accounting firms. We're both. When your attorney and accountant are on the same team, there are no communication gaps, no finger-pointing, and no missed strategy. You get a unified plan.",
  },
  {
    icon: "🌐",
    title: "Built for Global Families",
    body: "US citizens abroad, foreign nationals with US income, dual-status filers, expats with offshore accounts — we serve clients in over 40 countries. Most domestic tax firms are not equipped for international complexity. We are.",
  },
  {
    icon: "🔒",
    title: "Attorney-Client Privilege",
    body: "Conversations with your attorney are protected. This matters enormously in tax disputes. If the IRS is already asking questions, accountant-only communications may not be protected the same way.",
  },
  {
    icon: "📋",
    title: "We Know How the IRS Thinks",
    body: "Our team has resolved thousands of cases. We know IRS procedures, agent tendencies, appeals strategies, and when to fight vs. when to negotiate. Experience you can't get from a generalist.",
  },
  {
    icon: "✅",
    title: "Transparent, Flat-Fee Engagements",
    body: "No billing surprises. We agree on scope and price upfront. You'll know exactly what we're doing and what it costs — because anxious clients don't need billing anxiety on top.",
  },
  {
    icon: "📞",
    title: "Real Attorneys Answer the Phone",
    body: "You work with the attorney directly. Not a paralegal, not an intake coordinator. When you have a question or get a letter, you reach the person who knows your case.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-white/[0.07] bg-[#0a1220]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] tracking-[2.5px] text-gold/70 uppercase">Why IRSMedic</span>
          </div>
          <h2 className="font-playfair text-[2rem] md:text-[2.4rem] font-bold text-white tracking-[-0.5px] mb-3">
            Not all tax help is equal
          </h2>
          <p className="text-[14px] text-white/40 max-w-[520px] leading-[1.8] font-light">
            The IRS has a team of attorneys working against you. You deserve a team
            of attorneys working for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:border-gold/20 transition-all"
            >
              <div className="text-[1.4rem] mt-0.5 flex-shrink-0 w-9">{p.icon}</div>
              <div>
                <h3 className="text-[14px] font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-[12px] text-white/40 leading-[1.75] font-light">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
