/* Sliding press/media strip — brands from the original irsmedic.com */

const OUTLETS = [
  { name: "The Wall Street Journal", type: "press" },
  { name: "CNBC", type: "press" },
  { name: "Fox Business", type: "press" },
  { name: "ExpatFocus", type: "press" },
  { name: "TaxConnections", type: "press" },
  { name: "FAIRtax", type: "press" },
  { name: "Amazon Best Seller", type: "book" },
  { name: "Forbes", type: "press" },
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
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-8"
              >
                {o.type === "book" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime/60" />
                    <span className="text-[12px] font-playfair font-bold text-white/50 tracking-wide">
                      {o.name}
                    </span>
                    <span className="text-[9px] text-lime/70 border border-lime/25 bg-lime/5 px-1.5 py-0.5 rounded uppercase tracking-[1px] font-medium">
                      #1
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/15" />
                    <span className="text-[13px] font-playfair font-bold text-white/40 tracking-wide uppercase hover:text-white/60 transition-colors cursor-default">
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
