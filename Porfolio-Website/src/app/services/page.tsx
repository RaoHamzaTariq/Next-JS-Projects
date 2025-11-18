"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code,
  Database,
  Gauge,
  Globe,
  Layers,
  Lightbulb,
  Microscope,
  Rocket,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
  Users,
} from "lucide-react";

const coreServices = [
  {
    title: "Data Intelligence",
    description:
      "Transform raw data into clear stories through modern BI dashboards, data modeling, and automated reporting.",
    icon: Database,
    highlights: ["Interactive KPI dashboards", "Predictive analytics", "Data governance playbooks"],
    link: "/services/DataAnalyst",
  },
  {
    title: "Agentic AI Systems",
    description:
      "Ship autonomous copilots, RAG knowledge layers, and workflow automation tuned for your teams.",
    icon: Bot,
    highlights: ["Custom AI copilots", "Retrieval-augmented search", "LLM safety guardrails"],
    link: "/services/AgenticAI",
  },
  {
    title: "Experience Engineering",
    description:
      "Design and build delightful full-stack products with obsessive attention to performance and polish.",
    icon: Code,
    highlights: ["Product strategy sprints", "Design systems", "Cloud-native delivery"],
    link: "/services/WebDeveloper",
  },
];

const differentiators = [
  {
    icon: Gauge,
    title: "Performance Obsessed",
    copy: "Lighthouse-perfect, sub-second dashboards, and responsive APIs—benchmarks baked in.",
  },
  {
    icon: Microscope,
    title: "Insight First",
    copy: "Structured discovery, instrumentation, and experimentation keep decisions accountable.",
  },
  {
    icon: Globe,
    title: "Scale Confidently",
    copy: "Composable architectures that evolve with your product roadmap and team velocity.",
  },
  {
    icon: Lightbulb,
    title: "Innovate Faster",
    copy: "We prototype in days, validate in weeks, and leave you with reusable accelerators.",
  },
  {
    icon: Rocket,
    title: "Delivery Cadence",
    copy: "Transparent roadmaps, weekly demos, and outcome-based checkpoints keep momentum high.",
  },
  {
    icon: TabletSmartphone,
    title: "Device Ready",
    copy: "Responsive, accessible, and offline-friendly experiences for every touchpoint.",
  },
];

const packages = [
  {
    name: "Launch",
    summary: "Perfect for startups validating the next big bet.",
    price: "Starting at $4.5K",
    perks: ["2-week discovery sprint", "MVP roadmap", "Clickable prototype"],
    badge: "Most Popular",
  },
  {
    name: "Growth",
    summary: "Accelerate traction with automation and AI copilots.",
    price: "Starting at $9K",
    perks: ["Custom agent pipeline", "Integration playbook", "Success analytics"],
    highlight: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    summary: "Advanced strategy, governance, and premium support.",
    price: "Custom engagement",
    perks: ["C-suite workshops", "Security reviews", "24/7 dedicated squad"],
  },
];

const processSteps = [
  {
    title: "Discover & Define",
    description: "Vision workshops, data audits, and KPI alignment with your stakeholders.",
    icon: Sparkles,
    eta: "Week 1",
  },
  {
    title: "Design & Prototype",
    description: "System blueprints, interaction flows, and rapid prototyping for validation.",
    icon: Brain,
    eta: "Week 2-3",
  },
  {
    title: "Build & Automate",
    description: "Implementation sprints with automated QA, telemetry, and AI-assisted delivery.",
    icon: ShieldCheck,
    eta: "Week 4+",
  },
  {
    title: "Launch & Iterate",
    description: "Handover, enablement sessions, and experimentation loops to keep improving.",
    icon: Users,
    eta: "Ongoing",
  },
];

const techStack = [
  "Next.js",
  "LangChain",
  "Supabase",
  "Pinecone",
  "Azure OpenAI",
  "PostgreSQL",
  "Figma",
  "Streamlit",
  "Redis",
  "Vercel",
  "Shadcn UI",
  "Tailwind CSS",
];

const stats = [
  { value: "30+", label: "Products launched" },
  { value: "12x", label: "Faster insights" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3M+", label: "Monthly users served" },
];

export default function Services() {
  return (
    <main className="min-h-screen pt-14">
      {/* Hero */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-grid-pattern dark:bg-grid-white/[0.06]" />
        <div className="absolute inset-y-0 left-0 w-1/2 blur-3xl bg-primary/10" />

        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Full-service Data • AI • Product
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Services engineered for ambitious teams.
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Pair with a cross-functional squad that ships intelligent products—data platforms,
                  AI copilots, and premium web experiences—with the polish of an in-house team.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/Contact">
                  <Button size="lg" className="rounded-full px-8">
                    Book a strategy call
                  </Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Explore services
                  </Button>
                </Link>
              </div>

              <div className="grid w-full gap-6 rounded-3xl border border-primary/10 bg-background/40 p-6 shadow-2xl shadow-primary/5 backdrop-blur">
                <div className="flex flex-wrap justify-between gap-6 text-sm uppercase text-muted-foreground">
                  {["Product Strategy", "Applied AI", "Analytics", "Engineering"].map((pill) => (
                    <span key={pill} className="font-semibold tracking-wide text-foreground/80">
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="grid gap-6 md:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-semibold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-primary/20" />
              <div className="relative space-y-6 rounded-3xl border border-primary/10 bg-background/60 p-8 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-primary/10 p-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Featured service</p>
                    <p className="text-lg font-semibold">AI-driven research assistant</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Capture tribal knowledge, synthesize insights, and spin up copilots tuned to your
                  workflows. Security, governance, and observability included.
                </p>

                <div className="grid gap-4">
                  {[
                    "Knowledge graph enrichment",
                    "Automated evaluation suite",
                    "Human-in-the-loop approvals",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-dashed border-primary/30 p-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg. time-to-launch</p>
                    <p className="text-xl font-semibold">4 weeks</p>
                  </div>
                  <Link href="/portfolios?category=AI Agents">
                    <Button variant="ghost" className="gap-2">
                      View case study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative border-y border-primary/10 bg-primary/[0.015] py-14">
        <div className="absolute inset-0 bg-grid-white/[0.015] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="container relative mx-auto px-4">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs uppercase tracking-wide text-primary">
                Proven Playbooks
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Modular service tracks built to plug into any stage of your roadmap.
              </h2>
              <p className="text-muted-foreground">
                Whether you need a full autonomous squad or a sharp strike team, we adapt to your
                operating model, tools, and domain.
              </p>
            </div>
            <Link href="/Contact">
              <Button variant="outline" className="rounded-full px-8">
                Download capabilities deck
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <Card
                key={service.title}
                className="group flex flex-col gap-6 overflow-hidden border-primary/10 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Track {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <div className="space-y-3">
                  {service.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary/80" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.link} className="mt-auto">
                  <Button className="w-full rounded-2xl bg-primary group-hover:bg-primary/90">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-xs uppercase tracking-wide text-primary">
              Why teams choose us
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Strategy, craft, and velocity in a single partner.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We blend data science rigor with product intuition—so executive stakeholders, PMs, and
              engineers stay aligned from kickoff to launch.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <Card
                key={item.title}
                className="group border-primary/10 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-primary/[0.015]" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Process</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">A proven delivery rhythm.</h2>
            <p className="mt-4 text-muted-foreground">
              Transparent, measurable, and collaborative—so you always know what&apos;s next.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card
                key={step.title}
                className="border-primary/10 bg-background/70 p-6 shadow-sm shadow-primary/5"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">{step.eta}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
                <div className="mt-6 h-1 rounded-full bg-primary/10">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70" />
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light">
          <div className="bg-grid-white/[0.05] bg-grid-pattern" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col gap-10 rounded-3xl border border-white/30 bg-white/5 p-10 text-white shadow-2xl backdrop-blur">
            <div className="space-y-4 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-wide">
                Let&apos;s collaborate
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Ready to design the next flagship experience?
              </h2>
              <p className="text-lg text-white/80">
                Tell us about your goals and we&apos;ll craft a roadmap with clear milestones, owners,
                and success metrics within 72 hours.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href="/Contact">
                <Button size="lg" className="rounded-full px-10 text-base">
                  Start a project
                </Button>
              </Link>
              <Link href="/portfolios">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 bg-transparent px-10 text-base text-white hover:bg-white/10"
                >
                  See latest work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
