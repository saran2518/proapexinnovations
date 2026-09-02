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
    t: "Market selection",
    d: "We target high-TAM verticals where existing products consistently fail to meet user expectation. Category gaps come first. Product follows.",
  },
  {
    n: "02",
    t: "Brand engineering",
    d: "Each brand is engineered as a category-defining identity. Built for longevity, designed for global recognition, never just a product launch.",
  },
  {
    n: "03",
    t: "AI-enhanced delivery",
    d: "AI is engineered into the product where it closes a defined gap between user intent and product experience. Capability with purpose.",
  },
  {
    n: "04",
    t: "Vertical compounding",
    d: "A repeatable playbook applied vertical by vertical. Every brand compounds the capability of the next.",
  },
];

const SERVICES = [
  {
    n: "01",
    t: "Market and user behaviour research",
    d: "ML-driven analysis of user behaviour across a target vertical. We quantify intent, friction, and unmet expectation to validate whether a category is large enough to own.",
    o: "Validated category thesis with quantified opportunity.",
  },
  {
    n: "02",
    t: "Brand and UX engineering",
    d: "Brand identity, narrative system, and product architecture are engineered together. The brand carries the category. The UX delivers on the promise.",
    o: "A distinct brand system and product architecture ready for build.",
  },
  {
    n: "03",
    t: "AI feature engineering",
    d: "AI capabilities are scoped against defined user outcomes. Personalisation, inference, and decision intelligence are engineered into the product where they measurably improve experience.",
    o: "Production AI features tied to defined user outcomes.",
  },
  {
    n: "04",
    t: "Global deployment and iteration",
    d: "Each brand is deployed across global markets with infrastructure, compliance, and growth systems built for scale. Behavioural data feeds continuous iteration after launch.",
    o: "Live product in market with continuous behavioural feedback.",
  },
];

const BRANDS = [
  {
    n: "01",
    status: "Active-Development",
    title: "A Globally Redefined Social Networking application built on experience, emotion, and elegance.",
    body: "The first ProApex brand operates in a globally proven subscription market. Engineered around emotional nuance and elegant interaction, the product is designed to own a category defined by experience rather than feature count.",
    specs: [
      ["Category", "Consumer social networking"],
      ["Business model", "Global subscription"],
      ["Edge", "Experience, emotion, elegance"],
      ["Markets", "Global rollout"],
    ],
  },
  {
    n: "02",
    status: "Pipeline",
    title: "AI-native real estate decision intelligence.",
    body: "The second ProApex brand validates the repeatable vertical-expansion playbook. An AI-native real estate brand engineered around decision intelligence, targeting a high-TAM market where existing products underserve buyer and investor intent.",
    specs: [
      ["Category", "Real estate intelligence"],
      ["Business model", "Consumer and prosumer subscription"],
      ["Edge", "AI-native decision engine"],
      ["Markets", "Priority international markets"],
    ],
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
import heroNetwork from "@/assets/hero-network.png";
import { InquiryDialog } from "@/components/InquiryDialog";

function Logo() {
  return (
    <div className="flex items-center" aria-label="ProApex Innovations">
      <img
        src={proapexMark}
        alt="ProApex Innovations"
        className="h-[170px] w-auto select-none -my-8"
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
      <nav className="fixed inset-x-0 top-0 z-[200] flex h-[130px] items-center justify-between overflow-hidden bg-white pl-4 pr-[5vw]">
        <a href="#hero" className="flex shrink-0 items-center">
          <Logo />
        </a>
        <div className="hidden items-center gap-10 md:flex">
          {[
            ["About", "#about"],
            ["Vision-Mission", "#vision-mission"],
            ["What We Do", "#services"],
            ["Our Brands", "#products"],
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
        <InquiryDialog>
          <button
            type="button"
            className="hidden whitespace-nowrap rounded-[3px] border border-navy px-[22px] py-[9px] text-[0.9rem] font-medium tracking-[0.04em] text-navy transition-all hover:bg-navy hover:text-white md:inline-block"
          >
            Get in Touch
          </button>
        </InquiryDialog>
        <div className="flex cursor-pointer flex-col gap-[5px] md:hidden">
          <span className="block h-[1.5px] w-[22px] bg-navy" />
          <span className="block h-[1.5px] w-[22px] bg-navy" />
          <span className="block h-[1.5px] w-[22px] bg-navy" />
        </div>
      </nav>
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-[130px] z-[300] h-px bg-line" />

      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cream px-[5vw] pb-16 pt-[calc(130px+3rem)]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(184,134,11,0.10) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy/30 to-transparent" />
        {/* Hero network visual — right side, blended into sky */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] md:block"
          style={{
            backgroundImage: `url(${heroNetwork})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
            opacity: 0.7,
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 35%, #000 70%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 35%, #000 70%)",
          }}
        />
        <div className="relative z-10 max-w-[900px]">
          <div className="mb-12 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="h-px w-9 bg-gradient-to-r from-transparent to-navy/50" />
            <span className="font-mono text-[clamp(0.7rem,0.95vw,0.95rem)] uppercase tracking-[0.22em] text-navy/85">
              Behavioural Data
            </span>
            <span className="text-navy/40 text-[0.7rem]">✦</span>
            <span className="font-mono text-[clamp(0.7rem,0.95vw,0.95rem)] uppercase tracking-[0.22em] text-navy/85">
              Precision UX
            </span>
            <span className="text-navy/40 text-[0.7rem]">✦</span>
            <span className="font-mono text-[clamp(0.7rem,0.95vw,0.95rem)] uppercase tracking-[0.22em] text-navy/85">
              AI-Native Products
            </span>
            <span className="h-px w-9 bg-gradient-to-l from-transparent to-navy/50" />
          </div>
          <h1 className="mb-14 font-serif font-normal leading-[1.15] text-navy text-4xl">
            Consumer AI Company Obsessed <br /> with creating <span style={{ color: "#B8860B" }}>"Real Solutions"</span>
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
                "Innovation integrated at every level",
              ];
              return (
                <>
                  <ul className="space-y-5">
                    {left.map((t, i) => (
                      <li
                        key={i}
                        className="font-sans text-[0.95rem] font-light tracking-[0.01em] text-slate-ink"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div aria-hidden className="hidden md:block h-full w-px bg-navy/15" />
                  <ul className="space-y-5">
                    {right.map((t, i) => (
                      <li
                        key={i}
                        className="font-sans text-[0.95rem] font-light tracking-[0.01em] text-slate-ink"
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
          {/* Part One: headline + lead */}
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-28">
            <div className="rev">
              <SectionLabel>About</SectionLabel>
              <H2 className="text-4xl">
                <span className="text-gold">Global Scale.</span><br />
                <span className="text-gold">AI-Engineered Applications.</span><br />
                <span className="text-gold">High-TAM</span> <em className="not-italic font-serif italic">Markets.</em>
              </H2>
              <p className="max-w-[560px] text-base font-light leading-[1.85] text-slate-ink">
                We identify where the gap between user intent and product experience is large enough to define a category. Then we build the brand that owns it.
              </p>
            </div>
            <div className="rev">
              <p className="max-w-[560px] text-base font-light leading-[1.85] text-slate-ink">
                ProApex is a consumer AI company that builds and owns category-defining consumer brands. Each one is grounded in a high-TAM market where existing products have failed to meet user expectation. We identify those gaps through ML-driven user behaviour research, engineer AI-enhanced applications around them, and deploy globally with a distinct brand identity built for longevity, not just launch. Our first brand operates in the social networking vertical, a globally proven subscription market. A real estate brand follows, validating our repeatable vertical-expansion playbook.
              </p>
            </div>
          </div>

          {/* Part Two: four-pillar grid */}
          <div className="rev mt-24 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-white p-8">
                <span className="block font-mono text-[0.78rem] tracking-[0.06em] text-gold">
                  {p.n}
                </span>
                <div className="mt-4 mb-3 text-[1rem] font-semibold uppercase tracking-[0.02em] text-navy">
                  {p.t}
                </div>
                <div className="text-[0.95rem] font-light leading-[1.75] text-slate-ink">
                  {p.d}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="mx-[5vw] h-px bg-line" />

      {/* VISION & MISSION */}
      <section id="vision-mission" className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="rev mx-auto max-w-[960px] rounded-xl border border-line bg-white">
            <div className="p-10 md:p-14">
              <span className="block font-mono text-[0.78rem] uppercase tracking-[0.22em] text-gold">
                Vision
              </span>
              <h3 className="mt-4 font-serif text-[2rem] font-medium leading-[1.2] text-navy md:text-[2.4rem]">
                Finding <span className="text-gold">Real Solutions</span>.
              </h3>
              <p className="mt-5 max-w-[680px] text-base font-light leading-[1.85] text-slate-ink">
                We exist to identify where consumer markets are broken and build the products that fix them.
              </p>
            </div>
            <div aria-hidden style={{ height: "0.5px" }} className="w-full bg-line" />
            <div className="p-10 md:p-14">
              <span className="block font-mono text-[0.78rem] uppercase tracking-[0.22em] text-gold">
                Mission
              </span>
              <h3 className="mt-4 font-serif text-[1.6rem] font-medium leading-[1.3] text-navy md:text-[1.9rem]">
                To build <span className="text-gold">AI-powered Consumer Brands</span> that resolve real UX and CX failures at scale.
              </h3>
              <p className="mt-5 max-w-[760px] text-base font-light leading-[1.85] text-slate-ink">
                We apply ML-driven analysis of user behaviour and product bottlenecks to engineer applications that solve problems existing platforms have failed to address. Every product we ship is grounded in research, built with precision, and designed to earn lasting user trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-cream py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="rev mb-20 grid items-end gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <H2>
                Identify. Analyse.
                <br />
                Build. <em className="not-italic font-serif italic text-gold">Deploy.</em>
              </H2>
            </div>
            <p className="max-w-[560px] pt-2 text-base font-light leading-[1.85] text-slate-ink">
              We build consumer brands that endure. Each one engineered with AI at the core, launched into high-TAM markets, and designed with an identity built for global scale.
            </p>
          </div>
          <div className="rev grid gap-px border border-line bg-line sm:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.n} className="flex flex-col bg-white p-10">
                <span className="font-mono text-[0.78rem] tracking-[0.06em] text-gold">
                  {s.n}
                </span>
                <div className="mt-4 mb-3 text-[1.1rem] font-semibold uppercase tracking-[0.03em] text-navy">
                  {s.t}
                </div>
                <p className="mb-6 text-[0.95rem] font-light leading-[1.8] text-slate-ink">
                  {s.d}
                </p>
                <div className="mt-auto flex flex-col gap-1.5 border-t border-line pt-5 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="shrink-0 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted-ink">
                    Output
                  </span>
                  <span className="text-[0.9rem] font-light leading-[1.7] text-navy">
                    {s.o}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-[5vw] h-px bg-line" />

      {/* PRODUCTS — BRANDS */}
      <section id="products" className="bg-white py-28">
        <div className="mx-auto max-w-[1240px] px-[5vw]">
          <div className="rev mb-20">
            <SectionLabel>Our Brands</SectionLabel>
            <H2>
              <span className="text-gold">Global Scale</span>
              <br />
              <span className="text-gold">AI-Engineered</span> <em className="not-italic font-serif italic">Brands</em>
            </H2>
            <p className="mt-4 max-w-[560px] text-base font-light leading-[1.85] text-slate-ink">
              We identify where the gap between user intent and product experience is large enough to define a category. Then we build the brand that owns it.
            </p>
          </div>
          <div className="rev mt-8 grid gap-8 md:grid-cols-2">
            {BRANDS.map((b) => (
              <div key={b.n} className="flex flex-col border border-line bg-white p-10 md:p-12">
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-mono text-[0.78rem] tracking-[0.06em] text-gold">
                    Brand {b.n}
                  </span>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-ink">
                    {b.status}
                  </span>
                </div>
                <h3 className="mb-5 font-serif text-[1.6rem] font-normal leading-[1.25] text-navy">
                  {b.title}
                </h3>
                <p className="mb-8 text-[0.95rem] font-light leading-[1.85] text-slate-ink">
                  {b.body}
                </p>
                <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6">
                  {b.specs.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6">
                      <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted-ink">
                        {k}
                      </span>
                      <span className="text-right font-mono text-[0.82rem] text-navy">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="bg-cream">
        <div className="mx-auto max-w-[1240px] px-[5vw] py-28">
          <div className="rev">
            <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-navy/80">
              <span className="h-px w-6 bg-navy/60" />
              Careers
            </div>
            <h2 className="mb-6 font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-normal leading-[1.15] text-navy">
              Engineers, designers,<br />researchers — <em className="not-italic font-serif italic text-navy underline decoration-navy/30 decoration-1 underline-offset-[10px]">apply.</em>
            </h2>
            <p className="mb-16 max-w-[520px] text-base font-light leading-[1.85] text-slate-ink">
              ProApex is building a focused team of product engineers, UX specialists, AI researchers, and consumer behaviour analysts. Candidates who want to build products that ship, scale, and perform in global markets.
            </p>
          </div>
          <div className="rev rounded border border-line bg-white px-8 py-16 text-center md:px-20 md:py-24">
            <span className="mb-6 block font-mono text-[0.78rem] uppercase tracking-[0.2em] text-muted-ink">
              Positions Opening
            </span>
            <div className="mb-3 font-serif text-[1.75rem] font-normal text-navy">
              Roles across all disciplines
            </div>
            <p className="mx-auto mb-8 max-w-[400px] text-[0.95rem] font-light leading-[1.8] text-slate-ink">
              Product engineering, UX design, AI/ML, consumer research, and growth. Positions will be listed as the team scales. Express early interest below.
            </p>
            <a
              href="mailto:proapexinnovations@gmail.com"
              className="inline-block rounded-[3px] border border-navy px-7 py-2.5 text-[0.88rem] font-medium uppercase tracking-[0.08em] text-navy transition-all hover:bg-navy hover:text-white"
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
                  ["General", <a key="g" href="mailto:proapexinnovations@gmail.com" className="border-b border-line text-navy transition-colors hover:border-gold">proapexinnovations@gmail.com</a>],
                  ["Careers", <a key="c" href="mailto:proapexinnovations@gmail.com" className="border-b border-line text-navy transition-colors hover:border-gold">proapexinnovations@gmail.com</a>],
                  ["Registered Entity", "ProApex Innovations Private Limited"],
                  ["Headquarters", "India"],
                  ["Operating Markets", "India · United Kingdom · Europe"],
                ].map(([lbl, val], i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start justify-between gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span className="shrink-0 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-muted-ink">
                      {lbl}
                    </span>
                    <span className="text-left text-[1rem] text-navy sm:text-right">
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
              <p className="text-[0.95rem] font-light leading-[1.85] text-slate-ink">
                If you represent a potential distribution partner, investment vehicle, or market-entry collaborator across India, UK, or Europe — reach out with a brief outline of the opportunity. All enquiries are reviewed directly by the founding team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line bg-white px-[5vw] py-10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[0.85rem] tracking-[0.06em] text-navy/80">
            PROAPEX INNOVATIONS
          </div>
          <div className="font-mono text-[0.78rem] tracking-[0.04em] text-muted-ink">
            proapexinnovations@gmail.com
          </div>
          <nav className="flex gap-8">
            {[
              ["About", "#about"],
              ["What We Do", "#services"],
              ["Brands", "#products"],
              ["Careers", "#careers"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <a key={h} href={h} className="text-[0.9rem] text-navy/70 transition-colors hover:text-navy">
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
    <div className="mb-5 flex items-center gap-2.5 font-mono text-[0.78rem] uppercase tracking-[0.18em] text-gold">
      <span className="h-px w-6 bg-gold" />
      {children}
    </div>
  );
}

function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mb-6 font-serif font-normal leading-[1.15] text-navy text-4xl ${className ?? ""}`}>
      {children}
    </h2>
  );
}
