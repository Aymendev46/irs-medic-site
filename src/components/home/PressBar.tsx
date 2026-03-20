const OUTLETS = [
  { name: "Forbes", detail: "Featured" },
  { name: "Wall Street Journal", detail: "Coverage" },
  { name: "Bloomberg", detail: "Quoted" },
  { name: "Reuters", detail: "Featured" },
  { name: "Fox Business", detail: "Appeared" },
  { name: "USA Today", detail: "Quoted" },
];

export default function PressBar() {
  return (
    <section className="border-b border-white/[0.07] bg-[#080f1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-7">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="text-[10px] tracking-[2.5px] text-white/25 uppercase font-medium whitespace-nowrap">
            As seen in
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {OUTLETS.map((o) => (
              <span
                key={o.name}
                className="text-[12px] text-white/[0.22] font-semibold tracking-[0.5px] uppercase hover:text-white/40 transition-colors cursor-default font-playfair"
              >
                {o.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
