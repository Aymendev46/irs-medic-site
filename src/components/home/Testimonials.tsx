const TESTIMONIALS = [
  {
    quote:
      "I had offshore accounts and hadn't filed FBAR for eight years. I was convinced I was going to prison. Anthony and his team walked me through the Streamlined process step by step. I paid a small penalty and that was it. These people are miracle workers.",
    name: "R.K.",
    detail: "US Expat · Singapore",
    stars: 5,
  },
  {
    quote:
      "The IRS sent me a $340,000 notice out of nowhere. I panicked. Within two weeks of hiring IRSMedic, they had identified three errors in the IRS's calculation and reduced my liability to under $18,000. I wish I'd called them first.",
    name: "D.M.",
    detail: "Business Owner · Florida",
    stars: 5,
  },
  {
    quote:
      "After my accountant died, I discovered he had been filing my returns incorrectly for years. I had international assets I didn't even know needed to be disclosed. The team at IRSMedic cleaned up six years of returns and got me into compliance. Zero drama.",
    name: "H.W.",
    detail: "Retired Executive · New York",
    stars: 5,
  },
  {
    quote:
      "We had a criminal referral from the IRS for our business. The word 'criminal' in a tax context is absolutely terrifying. Anthony's team handled it with complete professionalism. Charges were never filed. I can't say enough about their work.",
    name: "M. &amp; T.B.",
    detail: "Small Business Owners · Texas",
    stars: 5,
  },
  {
    quote:
      "I'm a dual citizen and had no idea what my US filing obligations were after moving back to Germany. IRSMedic sorted out four years of back taxes, navigated the US-Germany tax treaty, and got me into FEIE compliance. Highly professional throughout.",
    name: "C.S.",
    detail: "Dual National · Frankfurt, Germany",
    stars: 5,
  },
  {
    quote:
      "What I appreciated most was that Anthony actually picked up the phone. He explained my situation in plain English, told me exactly what to expect, and delivered what he promised. The IRS lien on my home has been released.",
    name: "P.L.",
    detail: "Real Estate Investor · California",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-white/[0.07] bg-[#080f1e]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] tracking-[2.5px] text-gold/70 uppercase">Client Testimonials</span>
          </div>
          <h2 className="font-playfair text-[2rem] md:text-[2.4rem] font-bold text-white tracking-[-0.5px] mb-3">
            What clients say
          </h2>
          <p className="text-[14px] text-white/40 max-w-[480px] leading-[1.8] font-light">
            Real people who came to us in crisis and left with their lives back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-6 flex flex-col hover:border-gold/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-gold/70">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[13px] text-white/50 leading-[1.8] font-light flex-1 mb-5">
                &ldquo;<span dangerouslySetInnerHTML={{ __html: t.quote }} />&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/15 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-semibold text-gold/70">{t.name[0]}</span>
                </div>
                <div>
                  <div className="text-[12px] font-medium text-white/60"
                    dangerouslySetInnerHTML={{ __html: t.name }} />
                  <div className="text-[10px] text-white/25">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
