const PRESS_OUTLETS = ["Forbes", "WSJ", "Bloomberg", "Reuters", "Fox Business"];

export default function PressBar() {
  return (
    <div className="flex flex-wrap items-center gap-8 px-10 py-5 border-b border-white/[0.07]">
      <span className="text-[10px] tracking-[2px] text-white/25 uppercase">
        As seen in
      </span>
      {PRESS_OUTLETS.map((outlet) => (
        <span
          key={outlet}
          className="text-[12px] text-white/[0.18] font-medium tracking-[0.5px] uppercase"
        >
          {outlet}
        </span>
      ))}
    </div>
  );
}
