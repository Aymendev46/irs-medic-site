import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/funnel-ai-production/chat/Dz1wT3u4usHegBD57nqA/logo-box-655x655-trans.png";
const SCHEDULE_URL = "https://link.vidlead.com/widget/survey/57A0zx2heAA1qH0Rzm8M";
const CLIENT_PORTAL = "https://prep.irsmedic.com";
const PHONE = "(203) 285-8545";
const PHONE_HREF = "tel:+12032858545";

const SERVICES_LINKS = [
  ["Offshore Disclosure", "#services"],
  ["IRS Audit Defense", "#services"],
  ["Tax Debt Relief", "#services"],
  ["Criminal Tax Defense", "#services"],
  ["Expat & International", "#services"],
  ["Estate Planning", "#services"],
];

const ABOUT_LINKS = [
  ["Anthony Parent, J.D.", "#team"],
  ["Jonathan Parent, CPA", "#team"],
  ["Case Results", "#results"],
  ["Testimonials", "#testimonials"],
  ["Client Portal", CLIENT_PORTAL],
];

export default function Footer() {
  return (
    <footer className="bg-[#060d1a] border-t border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src={LOGO_URL} alt="IRSMedic" width={32} height={32} className="rounded" />
              <span className="font-playfair text-[1.1rem] font-bold text-white">
                IRS<span className="text-gold">Medic</span>
              </span>
            </Link>
            <p className="text-[12px] text-white/35 leading-[1.7] mb-5">
              Parent &amp; Parent LLP<br />
              Attorneys &amp; CPAs<br />
              Connecticut · Worldwide
            </p>
            <a
              href={PHONE_HREF}
              className="text-[13px] text-gold/70 hover:text-gold transition-colors font-medium"
            >
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[2px] text-white/30 uppercase mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[12px] text-white/40 hover:text-white/70 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[10px] tracking-[2px] text-white/30 uppercase mb-4">Firm</h4>
            <ul className="space-y-2.5">
              {ABOUT_LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[12px] text-white/40 hover:text-white/70 transition-colors"
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-[10px] tracking-[2px] text-white/30 uppercase mb-4">Get Help</h4>
            <a
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-gold text-[#080f1e] text-[12px] font-semibold px-4 py-[11px] rounded hover:opacity-90 transition-opacity mb-3"
            >
              Free Consultation
            </a>
            <a
              href={CLIENT_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center border border-white/15 text-white/40 text-[12px] px-4 py-[11px] rounded hover:border-white/25 hover:text-white/60 transition-all"
            >
              Client Portal
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} Parent &amp; Parent LLP. All rights reserved.
          </p>
          <p className="text-[11px] text-white/15 max-w-md leading-[1.6]">
            Attorney Advertising. This website is for informational purposes only and does not
            constitute legal advice. Prior results do not guarantee a similar outcome.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Disclaimer"].map((l) => (
              <a key={l} href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
