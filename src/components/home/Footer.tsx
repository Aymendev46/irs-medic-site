const FOOTER_LINKS = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Disclaimer", href: "#" },
];

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-8 border-t border-white/[0.07]">
      <p className="text-[12px] text-white/25">
        &copy; 2026 Parent &amp; Parent LLP. All rights reserved.
      </p>
      <div className="flex gap-8">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[12px] text-white/25 hover:text-white/50 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
