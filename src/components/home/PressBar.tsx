/* Sliding press/media strip — brands from the original irsmedic.com */

const OUTLETS = [
  { name: "The Wall Street Journal", type: "press", color: "#C8A951" },
  { name: "CNBC",                    type: "press", color: "#0096D9" },
  { name: "Fox Business",            type: "press", color: "#F5821F" },
  { name: "ExpatFocus",              type: "press", color: "#38BDF8" },
  { name: "TaxConnections",          type: "press", color: "#22C55E" },
  { name: "FAIRtax",                 type: "press", color: "#E63329" },
  { name: "Amazon Best Seller",      type: "book",  color: "#FF9900" },
  { name: "Forbes",                  type: "press", color: "#D92B2B" },
];

// Duplicate for seamless loop
const ITEMS = [...OUTLETS, ...OUTLETS];

export default function PressBar() {
  return (
    <section className="border-b border-white/[0.07] bg-[#080f1e] overflow-hidden">
      <div className="py-4 flex items-center gap-0">
        {/* Label — fixed left */}
        <div className="flex-shrink-0 flex items-center gap-3 pl-6 md:pl-10 pr-8 border-r border-white/[0.07] mr-6">
          <div className="w-1 h-6 bg-lime rounded-full" />
          <span className="text-[10px] tracking-[2.5px] text-white/35 uppercase whitespace-nowrap font-medium">
            As seen in
          </span>
        </div>

        {/* Marquee track */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080f1e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080f1e] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {ITEMS.map((o, i) => (
              <span key={i} className="inline-flex items-center gap-2 mx-8">
                {o.type === "book" ? (
                  <span className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF9900]/60" />
                    <span className="text-[13px] font-playfair font-bold text-white/55 tracking-wide">
                      Amazon Best Seller
                    </span>
                    <span className="text-[11px] font-bold text-[#080f1e] bg-[#FF9900] px-2 py-0.5 rounded font-sans tracking-[0.5px]">
                      #1
                    </span>
                  </span>
                ) : (
                  <span
                    className="press-item flex items-center gap-2 cursor-default"
                    style={{ "--brand-color": o.color } as React.CSSProperties}
                  >
                    <span className="press-dot w-1 h-1 rounded-full bg-white/15 transition-colors duration-300" />
                    <span className="press-name text-[13px] font-playfair font-bold text-white/40 tracking-wide uppercase transition-colors duration-300">
                      {o.name}
                    </span>
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
