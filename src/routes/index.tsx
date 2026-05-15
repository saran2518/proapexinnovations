import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProApex Innovations — Building the Next Generation of Consumer Apps" },
      {
        name: "description",
        content:
          "ProApex Innovations transforms consumer apps through behavioural research, precision UX, and AI-powered features. India to global.",
      },
      { property: "og:title", content: "ProApex Innovations" },
      {
        property: "og:description",
        content: "Consumer Experience · AI Innovation · UX Transformation",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:ital,wght@0,400;1,400&display=swap",
      },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    n: "01",
    t: "Deep behavioural research",
    d: "We start with users — not assumptions. Mapping real journeys, real drop-offs, real frustrations before a single pixel changes.",
  },
  {
    n: "02",
    t: "Precision UX & CX redesign",
    d: "Every interaction reconsidered. We rebuild flows from the ground up so the experience feels effortless at every step.",
  },
  {
    n: "03",
    t: "AI woven in where it matters",
    d: "Not AI for its own sake — AI that makes the product visibly smarter. Personalisation, prediction, and intelligence users actually feel.",
  },
  {
    n: "04",
    t: "Built with a global mindset",
    d: "Starting with India and expanding across international markets — our methodology is built to scale.",
  },
];

const SERVICES = [
  {
    n: "01",
    t: "Consumer Behaviour Analysis",
    d: "End-to-end journey mapping to uncover where users drop off, hesitate, and abandon — with granular precision.",
  },
  {
    n: "02",
    t: "UX & CX Transformation",
    d: "Redesigning flows, interactions, and the full customer experience so that using the app feels natural and effortless.",
  },
  {
    n: "03",
    t: "AI Feature Integration",
    d: "Embedding intelligent, context-aware features — smart search, personalisation engines, predictive flows — that users notice and value.",
  },
  {
    n: "04",
    t: "Continuous Optimisation",
    d: "Ongoing measurement, iteration, and improvement — so the product remains sharp long after the initial transformation.",
  },
];

const TICKER = [
  "Consumer Experience",
  "UX Transformation",
  "AI-Powered Features",
  "Behavioural Analytics",
  "Mobile Innovation",
  "CX Optimisation",
  "Product Strategy",
  "India → Global",
];

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 56" width="240" height="48" aria-label="ProApex Innovations">
      <path d="M10,2 C14,2 20,4 24,8 C28,4 34,2 40,2 C44,1 48,3 46,7 C42,6 38,7 36,10 C40,9 44,10 46,14 C42,13 38,14 36,18 L36,44 C36,47 33,49 30,49 L20,49 C17,49 14,47 14,44 L14,18 C12,14 8,13 4,14 C6,10 10,9 14,10 C12,7 8,6 4,7 C2,3 6,1 10,2 Z" fill="#c8a96e" />
      <ellipse cx="25" cy="26" rx="12" ry="14" fill="#c8a96e" />
      <rect x="17" y="28" width="16" height="3" rx="1.5" fill="#1a1f3c" />
      <path d="M13,32 Q11,38 13,44 L14,44 L14,32 Z" fill="#e8c98a" />
      <path d="M37,32 Q39,38 37,44 L36,44 L36,32 Z" fill="#e8c98a" />
      <rect x="14" y="44" width="22" height="5" rx="2" fill="#e8c98a" />
      <rect x="52" y="6" width="38" height="22" rx="3" fill="#1a1f3c" stroke="#c8a96e" strokeWidth="1.2" />
      <text x="71" y="21" fontFamily="Outfit, Arial, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle" fill="#c8a96e" letterSpacing="1.5">PRO</text>
      <text x="96" y="38" fontFamily="Outfit, Arial, sans-serif" fontSize="34" fontWeight="700" fill="#ffffff" letterSpacing="-0.5">APEX</text>
      <text x="97" y="50" fontFamily="Outfit, Arial, sans-serif" fontSize="8" fontWeight="400" fill="#c8a96e" letterSpacing="5">INNOVATIONS</text>
      <line x1="96" y1="54" x2="330" y2="54" stroke="#c8a96e" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

function Index() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".rev").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-[200] flex h-[72px] items-center justify-between bg-navy px-[5vw]">
        <a href="#hero" className="flex shrink-0 items-center">
          <Logo />
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {[
            ["About", "#about"],
            ["What We Do", "#services"],
            ["Careers", "#careers"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.85rem] font-normal tracking-[0.02em] text-white/60 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden whitespace-nowrap rounded-[3px] border border-gold px-[22px] py-[9px] text-[0.82rem] font-medium tracking-[0.04em] text-gold transition-all hover:bg-gold hover:text-navy md:inline-block"
        >
          Get in Touch
        </a>
        <div className="flex cursor-pointer flex-col gap-[5px] md:hidden">
          <span className="block h-[1.5px] w-[22px] bg-white" />
          <span className="block h-[1.5px] w-[22px] bg-white" />
          <span className="block h-[1.5px] w-[22px] bg-white" />
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy px-[5vw] pb-24 pt-[calc(72px+4rem)]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(200,169,110,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="relative z-10 max-w-[900px]">
          <div className="mb-10 flex items-center gap-[14px]">
            <div className="h-px w-9 bg-gold" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-gold/80">
              Consumer Experience · AI Innovation · UX Transformation
            </span>
          </div>
          <h1 className="mb-10 font-serif text-[clamp(3rem,6.5vw,6rem)] font-normal leading-[1.1] text-white">
            Building the Next Generation
            <br />
            of <em className="not-italic font-serif italic text-gold">Consumer Apps.</em>
          </h1>
          <p className="mb-14 max-w-[540px] text-[1.05rem] font-light leading-[1.85] text-white/55">
            We analyse consumer behaviour, identify what frustrates users, and
            transform those experiences — with precision design and AI-powered
            features that make a real difference.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/30">
              Scroll
            </span>
            <div className="scroll-bar relative h-px w-12 overflow-hidden bg-white/15" />
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-none bg-gold py-[1.2rem]">
        <div className="ticker-track flex w-max">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="px-10 font-mono text-[0.72rem] font-normal uppercase tracking-[0.1em] text-navy/70 whitespace-nowrap">
                {t}
              </span>
              <span className="px-2 font-mono text-[0.72rem] text-navy">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-28">
            <div className="rev">
              <SectionLabel>About Us</SectionLabel>
              <H2>
                Building what users <em className="not-italic font-serif italic text-gold">deserve.</em>
              </H2>
              <p className="max-w-[560px] text-base font-light leading-[1.85] text-slate-ink">
                Good products deserve great experiences. We look at what stands
                between users and what they're trying to do, understand why it
                breaks, and rebuild it so the product works exactly the way
                people expect.
              </p>
              <div className="mt-12 border-l-[3px] border-gold bg-cream px-10 py-8">
                <p className="font-serif text-[1.3rem] font-normal italic leading-[1.55] text-navy">
                  "The best consumer experiences feel inevitable — like they were always meant to work this way."
                </p>
              </div>
            </div>
            <div className="rev mt-2 border-t border-line">
              {PILLARS.map((p) => (
                <div key={p.n} className="flex gap-8 border-b border-line py-7">
                  <span className="shrink-0 pt-1 font-mono text-[0.65rem] tracking-[0.06em] text-gold">
                    {p.n}
                  </span>
                  <div>
                    <div className="mb-1.5 text-[0.95rem] font-semibold tracking-[0.01em] text-navy">
                      {p.t}
                    </div>
                    <div className="text-[0.87rem] font-light leading-[1.75] text-slate-ink">
                      {p.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-[5vw] h-px bg-line" />

      {/* SERVICES */}
      <section id="services" className="bg-cream py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="rev mb-20 grid items-end gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <H2>
                From friction
                <br />
                to <em className="not-italic font-serif italic text-gold">flow.</em>
              </H2>
            </div>
            <p className="max-w-[560px] pt-2 text-base font-light leading-[1.85] text-slate-ink">
              We take on consumer apps that underperform their potential —
              understand exactly why — and transform them into products people
              return to.
            </p>
          </div>
          <div className="rev border-t border-line">
            {SERVICES.map((s) => (
              <div
                key={s.n}
                className="group grid grid-cols-[40px_1fr_28px] items-center gap-6 border-b border-line py-8 transition-colors hover:bg-gold/5 md:grid-cols-[60px_1fr_28px] md:gap-8"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.06em] text-muted-ink">
                  {s.n}
                </span>
                <div>
                  <div className="mb-1.5 text-[1.05rem] font-semibold text-navy transition-colors group-hover:text-gold">
                    {s.t}
                  </div>
                  <div className="max-w-[540px] text-[0.87rem] font-light leading-[1.7] text-slate-ink">
                    {s.d}
                  </div>
                </div>
                <span className="-translate-x-2 text-base text-gold opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="bg-navy">
        <div className="mx-auto max-w-[1240px] px-[5vw] py-28">
          <div className="rev">
            <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-6 bg-gold" />
              Careers
            </div>
            <h2 className="mb-6 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-white">
              Work on things that <em className="not-italic font-serif italic text-gold">matter.</em>
            </h2>
            <p className="mb-16 max-w-[520px] text-base font-light leading-[1.85] text-white/45">
              We are building a team of people who care deeply about users and
              hold craft to an exceptional standard. If that sounds like you,
              we'd like to hear from you.
            </p>
          </div>
          <div className="rev rounded border border-gold/25 px-8 py-16 text-center md:px-20 md:py-24">
            <span className="mb-6 block font-serif text-3xl italic text-gold/30">◎</span>
            <div className="mb-3 font-serif text-[1.75rem] font-normal text-white/65">
              Openings coming soon
            </div>
            <p className="mx-auto mb-8 max-w-[360px] text-[0.87rem] font-light leading-[1.75] text-white/30">
              Roles across product, design, and engineering will be listed here as we grow.
            </p>
            <a
              href="mailto:careers@proapexinnovations.com"
              className="inline-block rounded-[3px] border border-gold/35 px-7 py-2.5 text-[0.8rem] font-medium tracking-[0.06em] text-gold transition-all hover:bg-gold hover:text-navy"
            >
              Express Interest
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-28">
            <div className="rev">
              <SectionLabel>Contact</SectionLabel>
              <H2>
                Let's start a <em className="not-italic font-serif italic text-gold">conversation.</em>
              </H2>
              <div className="mt-12 border-t border-line">
                {[
                  ["Email", <a key="e" href="mailto:hello@proapexinnovations.com" className="border-b border-line text-navy transition-colors hover:border-gold">hello@proapexinnovations.com</a>],
                  ["Location", "India"],
                  ["Registered As", "ProApex Innovations Private Limited"],
                  ["Markets", "India · United Kingdom · Europe"],
                ].map(([lbl, val], i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-between gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-ink">
                      {lbl}
                    </span>
                    <span className="text-left text-[0.92rem] text-navy sm:text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rev pt-2">
              <p className="mb-7 font-serif text-[clamp(1.5rem,2.8vw,2.1rem)] font-normal italic leading-[1.45] text-navy">
                "Whether you're a brand, a partner, or simply curious — our door is open."
              </p>
              <p className="text-[0.87rem] font-light leading-[1.8] text-slate-ink">
                We're at an early stage and intentionally selective about who we
                work with. Reach out and tell us about the problem you're
                trying to solve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy px-[5vw] py-10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[0.75rem] tracking-[0.06em] text-white/35">
            PROAPEX INNOVATIONS
          </div>
          <div className="font-mono text-[0.65rem] tracking-[0.04em] text-white/25">
            © 2025 ProApex Innovations Private Limited. All rights reserved.
          </div>
          <nav className="flex gap-8">
            {[
              ["About", "#about"],
              ["What We Do", "#services"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-[0.8rem] text-white/35 transition-colors hover:text-gold">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold">
      <span className="h-px w-6 bg-gold" />
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-navy">
      {children}
    </h2>
  );
}
