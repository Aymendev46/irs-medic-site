const SERVICES = [
  {
    title: "Offshore Disclosure",
    description:
      "FBAR violations, FATCA compliance, Streamlined Procedures, and voluntary disclosure programs. We protect clients with foreign accounts, assets, and income from severe IRS penalties.",
    tag: "High Priority",
    tagColor: "text-red-400/80 border-red-400/20 bg-red-400/5",
  },
  {
    title: "IRS Audit Defense",
    description:
      "From correspondence audits to full field examinations. We represent you at every stage — examination, appeals, and Tax Court — with a legal and accounting team working in tandem.",
    tag: "Most Common",
    tagColor: "text-gold/80 border-gold/20 bg-gold/5",
  },
  {
    title: "Tax Debt Relief",
    description:
      "Offers in Compromise, installment agreements, Currently Not Collectible status, penalty abatement, and lien releases. We negotiate directly with the IRS to reduce or eliminate your liability.",
    tag: "",
    tagColor: "",
  },
  {
    title: "Criminal Tax Defense",
    description:
      "Criminal investigations, grand jury subpoenas, and DOJ referrals require immediate attorney-client privilege protection. We've successfully defended clients facing potential prison time.",
    tag: "Urgent",
    tagColor: "text-red-400/80 border-red-400/20 bg-red-400/5",
  },
  {
    title: "Expat & International Tax",
    description:
      "US citizens abroad, dual nationals, Green Card holders, and foreign nationals with US income. We handle FEIE, foreign tax credits, Form 8938, and multi-country compliance.",
    tag: "Specialty",
    tagColor: "text-blue-400/70 border-blue-400/20 bg-blue-400/5",
  },
  {
    title: "Estate & Trust Planning",
    description:
      "Asset protection, irrevocable trusts, international estate planning, gifting strategies, and succession planning for high-net-worth families and business owners.",
    tag: "",
    tagColor: "",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-white/[0.07] bg-[#080f1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] tracking-[2.5px] text-gold/70 uppercase">Our Practice Areas</span>
          </div>
          <h2 className="font-playfair text-[2rem] md:text-[2.4rem] font-bold text-white tracking-[-0.5px] mb-3">
            What we resolve
          </h2>
          <p className="text-[14px] text-white/40 max-w-[500px] leading-[1.8] font-light">
            Every practice area is handled by both an attorney and a CPA — because
            tax law and accounting are inseparable when your future is at stake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white/[0.025] border border-white/[0.07] rounded-xl p-6 hover:border-gold/25 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gold/70" />
                </div>
                {svc.tag && (
                  <span className={`text-[9px] tracking-[1.5px] uppercase font-medium px-2 py-1 rounded border ${svc.tagColor}`}>
                    {svc.tag}
                  </span>
                )}
              </div>
              <h3 className="text-[14px] font-semibold text-white mb-2 group-hover:text-gold/90 transition-colors">
                {svc.title}
              </h3>
              <p className="text-[12px] text-white/40 leading-[1.7] font-light">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
