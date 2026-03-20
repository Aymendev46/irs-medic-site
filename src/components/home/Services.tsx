const SERVICES = [
  {
    title: "Offshore disclosure",
    description: "FBAR, FATCA, streamlined procedures",
  },
  {
    title: "Audit defense",
    description: "Aggressive representation at every stage",
  },
  {
    title: "Tax settlements",
    description: "IRS negotiations and OIC programs",
  },
  {
    title: "Business advisory",
    description: "Legal tax reduction strategies",
  },
  {
    title: "Estate planning",
    description: "Asset protection and legacy planning",
  },
  {
    title: "Tax preparation",
    description: "Individual, business, trust, nonprofit",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-10 py-16 border-b border-white/[0.07]">
      <span className="block text-[10px] tracking-[2px] text-gold uppercase mb-2">
        Our services
      </span>
      <h2 className="font-playfair text-[1.9rem] font-bold text-white mb-2 tracking-[-0.3px]">
        What we resolve
      </h2>
      <p className="text-[14px] text-white/45 leading-[1.8] max-w-[540px] mb-10 font-light">
        From IRS audits to estate planning, we handle the full spectrum of tax
        and legal challenges.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {SERVICES.map((svc) => (
          <div
            key={svc.title}
            className="bg-white/[0.03] border border-white/[0.07] rounded-lg p-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold mb-3" />
            <h3 className="text-[13px] font-medium text-white mb-1">
              {svc.title}
            </h3>
            <p className="text-[11px] text-white/35 leading-[1.6]">
              {svc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
