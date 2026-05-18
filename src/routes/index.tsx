import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProApex Innovations — AI-First Consumer Applications" },
      {
        name: "description",
        content:
          "ProApex Innovations builds AI-native consumer applications grounded in behavioural data, precision UX, and problem-layer AI. India · UK · Europe.",
      },
      { property: "og:title", content: "ProApex Innovations" },
      {
        property: "og:description",
        content: "Behavioural Data · Precision UX · AI-Native Products",
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
    t: "Behavioural Data Foundation",
    d: "Every product decision is derived from quantified user behaviour data — journey telemetry, drop-off signals, interaction heatmaps — before a single component is designed.",
  },
  {
    n: "02",
    t: "Precision UX Architecture",
    d: "UX is the core infrastructure, not a surface layer. Interaction flows, information hierarchy, and response patterns are engineered to align exactly with how users process and navigate.",
  },
  {
    n: "03",
    t: "Problem-Layer AI Integration",
    d: "AI is embedded at the point where it solves a defined user problem — adaptive personalisation, predictive intent mapping, contextual inference — not deployed as a feature for its own visibility.",
  },
  {
    n: "04",
    t: "Global-Scale Architecture",
    d: "Products are architected from inception for multi-market deployment — scalable infrastructure, internationalisation-ready codebases, and compliance frameworks built for India, UK, and Europe.",
  },
];

const SERVICES = [
  {
    n: "01",
    t: "Consumer Behavioural Research",
    d: "Quantitative and qualitative analysis of real user behaviour — journey mapping, drop-off attribution, hesitation point identification, and intent signal extraction — conducted before any design or development begins.",
  },
  {
    n: "02",
    t: "Precision UX Engineering",
    d: "Interaction architecture and interface engineering built from validated user intent data. Every flow, transition, and decision point is designed to reduce cognitive load and eliminate friction at the interaction layer.",
  },
  {
    n: "03",
    t: "AI Feature Engineering",
    d: "AI capabilities — adaptive personalisation engines, predictive navigation, contextual inference, and intelligent search — are scoped and integrated at the problem layer, with defined success metrics per feature.",
  },
  {
    n: "04",
    t: "Product Deployment & Iteration",
    d: "Full-cycle deployment across target markets, followed by continuous iteration driven by live usage data, cohort analysis, and performance benchmarks against defined product KPIs.",
  },
];

const TICKER = [
  "Behavioural Intelligence",
  "AI-Native Engineering",
  "Precision UX",
  "User Intent Mapping",
  "Consumer Applications",
  "Global Scale",
  "Problem-Layer AI",
  "India · UK · Europe",
];

import proapexMark from "@/assets/proapex-mark.png";

function Logo() {
  return (
    <div className="flex items-center" aria-label="ProApex Innovations">
      <img
        src={proapexMark}
        alt="ProApex Innovations"
        className="h-[165px] w-auto select-none -my-7"
        draggable={false}
      />
    </div>
  );
}

function Index() {
  useEffect(() => {
    document.documentElement.classList.add("rev-ready");
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
    return () => {
      obs.disconnect();
      document.documentElement.classList.remove("rev-ready");
    };
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-[200] flex h-[130px] items-center justify-between border-b border-line bg-white pl-4 pr-[5vw]">
        <a href="#hero" className="flex shrink-0 items-center">
          <Logo />
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {[
            ["About", "#about"],
            ["What We Do", "#services"],
            ["Our Products", "#products"],
            ["Careers", "#careers"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.95rem] font-normal tracking-[0.02em] text-navy/75 transition-colors hover:text-navy"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden whitespace-nowrap rounded-[3px] border border-navy px-[22px] py-[9px] text-[0.9rem] font-medium tracking-[0.04em] text-navy transition-all hover:bg-navy hover:text-white md:inline-block"
        >
          Get in Touch
        </a>
        <div className="flex cursor-pointer flex-col gap-[5px] md:hidden">
          <span className="block h-[1.5px] w-[22px] bg-navy" />
          <span className="block h-[1.5px] w-[22px] bg-navy" />
          <span className="block h-[1.5px] w-[22px] bg-navy" />
        </div>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy px-[5vw] pb-16 pt-[calc(130px+3rem)]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="relative z-10 max-w-[900px]">
          <div className="mb-12 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-white/60" />
            <span className="font-mono text-[clamp(0.7rem,0.95vw,0.95rem)] uppercase tracking-[0.22em] text-white/85">
              Behavioural Data
            </span>
            <span className="text-white/40 text-[0.7rem]">✦</span>
            <span className="font-mono text-[clamp(0.7rem,0.95vw,0.95rem)] uppercase tracking-[0.22em] text-white/85">
              Precision UX
            </span>
            <span className="text-white/40 text-[0.7rem]">✦</span>
            <span className="font-mono text-[clamp(0.7rem,0.95vw,0.95rem)] uppercase tracking-[0.22em] text-white/85">
              AI-Native Products
            </span>
            <span className="h-px w-9 bg-gradient-to-l from-transparent to-white/60" />
          </div>
          <h1 className="mb-14 font-serif text-[clamp(1.8rem,3.4vw,3rem)] font-normal leading-[1.12] text-white">
            AI-first consumer applications built on
            <br />
            <em className="not-italic font-serif italic text-white/95 underline decoration-white/30 decoration-1 underline-offset-[10px]">one obsession — “creating real solutions”</em>
          </h1>
          <div className="mt-4 grid max-w-3xl grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
            {(() => {
              const left = [
                "Behavioural data at the foundation",
                "Feature architecture driven by real user intent",
                "Architected for global scale",
              ];
              const right = [
                "Precision-engineered UX",
                "AI embedded at the problem layer",
                "Innovation embedded at every layer",
              ];
              return (
                <>
                  <ul className="space-y-5">
                    {left.map((t, i) => (
                      <li
                        key={i}
                        className="font-sans text-[0.95rem] font-light tracking-[0.01em] text-white/75"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div aria-hidden className="hidden md:block h-full w-px bg-white/15" />
                  <ul className="space-y-5">
                    {right.map((t, i) => (
                      <li
                        key={i}
                        className="font-sans text-[0.95rem] font-light tracking-[0.01em] text-white/75"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-line bg-cream py-[1.1rem]">
        <div className="ticker-track flex w-max">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="px-10 font-mono text-[0.82rem] font-normal uppercase tracking-[0.18em] text-navy/80 whitespace-nowrap">
                {t}
              </span>
              <span className="px-2 font-mono text-[0.8rem] text-navy/45">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-28">
            <div className="rev">
              <SectionLabel>About</SectionLabel>
              <H2>
                Engineered on data.<br />Deployed at <em className="not-italic font-serif italic text-gold">scale.</em>
              </H2>
              <p className="max-w-[560px] text-base font-light leading-[1.85] text-slate-ink">
                ProApex Innovations builds and deploys AI-first consumer applications. Every product is grounded in quantified behavioural research, engineered with precision UX methodology, and powered by AI integrated at the problem layer — not the interface layer. Built in India, architected for international markets.
              </p>
              <div className="mt-12 border-l-[3px] border-gold bg-cream px-10 py-8">
                <p className="font-mono text-[0.85rem] font-normal italic leading-[1.9] text-navy/80 tracking-[0.03em]">
                  ProApex Innovations Private Limited &nbsp;·&nbsp; Incorporated in India &nbsp;·&nbsp; Operating Markets: India · United Kingdom · Europe
                </p>
              </div>
            </div>
            <div className="rev mt-2 border-t border-line">
              {PILLARS.map((p) => (
                <div key={p.n} className="flex gap-8 border-b border-line py-7">
                  <span className="shrink-0 pt-1 font-mono text-[0.78rem] tracking-[0.06em] text-gold">
                    {p.n}
                  </span>
                  <div>
                    <div className="mb-1.5 text-[1rem] font-semibold uppercase tracking-[0.02em] text-navy">
                      {p.t}
                    </div>
                    <div className="text-[0.95rem] font-light leading-[1.75] text-slate-ink">
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
                A defined methodology.
                <br />
                A measurable <em className="not-italic font-serif italic text-gold">output.</em>
              </H2>
            </div>
            <p className="max-w-[560px] pt-2 text-base font-light leading-[1.85] text-slate-ink">
              ProApex operates a repeatable product engineering methodology — from behavioural research and UX design through to AI integration and market deployment. Each discipline is applied in sequence, with measurable criteria at every stage.
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
                  <div className="mb-1.5 text-[1.05rem] font-semibold uppercase tracking-[0.03em] text-navy transition-colors group-hover:text-gold">
                    {s.t}
                  </div>
                  <div className="max-w-[580px] text-[0.87rem] font-light leading-[1.8] text-slate-ink">
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

      <div className="mx-[5vw] h-px bg-line" />

      {/* PRODUCTS */}
      <section id="products" className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="rev mb-20">
            <SectionLabel>Our Products</SectionLabel>
            <H2>
              Built in-house.
              <br />
              Deployed to <em className="not-italic font-serif italic text-gold">market.</em>
            </H2>
            <p className="mt-4 max-w-[560px] text-base font-light leading-[1.85] text-slate-ink">
              ProApex products are built, owned, and operated end-to-end. Each application is the direct output of the ProApex methodology — researched, engineered, and launched by the core team.
            </p>
          </div>
          <div className="rev grid border border-line md:grid-cols-2">
            {/* Elyxer */}
            <div className="group border-b border-line bg-white p-10 transition-colors hover:bg-cream md:border-b-0 md:border-r md:p-14">
              <span className="mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                Product 01 · Active Development
              </span>
              <div className="mb-2 font-serif text-[2.2rem] font-normal leading-none text-muted-ink">
                Undisclosed
              </div>
              <div className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted-ink">
                AI-Native Consumer Application
              </div>
              <p className="mb-8 max-w-[360px] text-[0.87rem] font-light leading-[1.85] text-slate-ink">
                The first ProApex consumer application — an AI-native product engineered around precision UX and deep behavioural intelligence. Designed for the way users actually interact, not the way interfaces traditionally assume they do.
              </p>
              <div className="flex flex-col gap-3 border-t border-line pt-6">
                {[
                  ["Category", "Consumer Application"],
                  ["AI Layer", "Problem-Layer Integration"],
                  ["Target Markets", "India · UK · Europe"],
                  ["Architecture", "AI-Native · Mobile-First"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-ink">
                      {k}
                    </span>
                    <span className="font-mono text-[0.7rem] text-navy">{v}</span>
                  </div>
                ))}
              </div>
              <span className="mt-6 inline-block rounded-[2px] border border-gold/40 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-gold">
                In Development
              </span>
            </div>
            {/* Future */}
            <div className="bg-white p-10 opacity-60 md:p-14">
              <span className="mb-6 block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-gold">
                Product 02 · Pipeline
              </span>
              <div className="mb-2 font-serif text-[2.2rem] font-normal leading-none text-muted-ink">
                Undisclosed
              </div>
              <div className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-muted-ink">
                Next ProApex Product
              </div>
              <p className="mb-8 max-w-[360px] text-[0.87rem] font-light leading-[1.85] text-slate-ink">
                The next ProApex product is currently in the research and behavioural analysis phase. Market, category, and product details will be disclosed at the appropriate stage of development.
              </p>
              <div className="flex flex-col gap-3 border-t border-line pt-6">
                {[
                  ["Stage", "Behavioural Research Phase"],
                  ["Disclosure", "TBA"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-ink">
                      {k}
                    </span>
                    <span className="font-mono text-[0.7rem] text-navy">{v}</span>
                  </div>
                ))}
              </div>
              <span className="mt-6 inline-block rounded-[2px] border border-line px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-ink">
                Coming
              </span>
            </div>
          </div>
          <div className="rev mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 md:flex-row md:items-center">
            <div>
              <div className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                For Investors & Partners
              </div>
              <p className="max-w-[520px] text-[0.92rem] font-light leading-[1.7] text-slate-ink">
                Selective conversations open with strategic partners and investors aligned with the ProApex thesis.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block whitespace-nowrap rounded-[3px] border border-navy bg-navy px-7 py-3 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-white transition-all hover:bg-white hover:text-navy"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="bg-navy">
        <div className="mx-auto max-w-[1240px] px-[5vw] py-28">
          <div className="rev">
            <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-6 bg-white/70" />
              Careers
            </div>
            <h2 className="mb-6 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-white">
              Engineers, designers,<br />researchers — <em className="not-italic font-serif italic text-white/90 underline decoration-white/30 decoration-1 underline-offset-[10px]">apply.</em>
            </h2>
            <p className="mb-16 max-w-[520px] text-base font-light leading-[1.85] text-white/65">
              ProApex is building a focused team of product engineers, UX specialists, AI researchers, and consumer behaviour analysts. Candidates who want to build products that ship, scale, and perform in global markets.
            </p>
          </div>
          <div className="rev rounded border border-white/20 px-8 py-16 text-center md:px-20 md:py-24">
            <span className="mb-6 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/55">
              Positions Opening
            </span>
            <div className="mb-3 font-serif text-[1.75rem] font-normal text-white/90">
              Roles across all disciplines
            </div>
            <p className="mx-auto mb-8 max-w-[400px] text-[0.87rem] font-light leading-[1.8] text-white/55">
              Product engineering, UX design, AI/ML, consumer research, and growth. Positions will be listed as the team scales. Express early interest below.
            </p>
            <a
              href="mailto:careers@proapexinnovations.com"
              className="inline-block rounded-[3px] border border-white/40 px-7 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-white transition-all hover:bg-white hover:text-navy"
            >
              Express Interest
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-cream py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-28">
            <div className="rev">
              <SectionLabel>Contact</SectionLabel>
              <H2>
                Partners, investors,<br /><em className="not-italic font-serif italic text-gold">press.</em>
              </H2>
              <div className="mt-12 border-t border-line">
                {[
                  ["General", <a key="g" href="mailto:hello@proapexinnovations.com" className="border-b border-line text-navy transition-colors hover:border-gold">hello@proapexinnovations.com</a>],
                  ["Careers", <a key="c" href="mailto:careers@proapexinnovations.com" className="border-b border-line text-navy transition-colors hover:border-gold">careers@proapexinnovations.com</a>],
                  ["Registered Entity", "ProApex Innovations Private Limited"],
                  ["Headquarters", "India"],
                  ["Operating Markets", "India · United Kingdom · Europe"],
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
                "ProApex is in active development. Selective conversations with strategic partners and investors are open."
              </p>
              <p className="text-[0.87rem] font-light leading-[1.85] text-slate-ink">
                If you represent a potential distribution partner, investment vehicle, or market-entry collaborator across India, UK, or Europe — reach out with a brief outline of the opportunity. All enquiries are reviewed directly by the founding team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-white px-[5vw] py-10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[0.75rem] tracking-[0.06em] text-navy/70">
            PROAPEX INNOVATIONS
          </div>
          <div className="font-mono text-[0.65rem] tracking-[0.04em] text-muted-ink">
            © 2025 ProApex Innovations Private Limited. All rights reserved.
          </div>
          <nav className="flex gap-8">
            {[
              ["About", "#about"],
              ["What We Do", "#services"],
              ["Products", "#products"],
              ["Careers", "#careers"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-[0.8rem] text-navy/55 transition-colors hover:text-navy">
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
