import { BarChart3, Brain, Database, LineChart } from "lucide-react"

const stats = [
  { value: "5+", label: "Years working with data" },
  { value: "30+", label: "Projects delivered" },
  { value: "12", label: "ML models in production" },
]

const skills = [
  {
    Icon: BarChart3,
    title: "Data Analytics",
    desc: "Exploratory analysis, statistics, and dashboards that surface the story in the numbers.",
    tags: ["Python", "SQL", "Pandas", "Power BI", "Tableau"],
  },
  {
    Icon: Brain,
    title: "Machine Learning",
    desc: "Building, tuning, and shipping predictive and generative models end to end.",
    tags: ["scikit-learn", "PyTorch", "TensorFlow", "XGBoost"],
  },
  {
    Icon: Database,
    title: "Data Engineering",
    desc: "Reliable pipelines and warehouses that keep analytics and models well fed.",
    tags: ["Airflow", "dbt", "Spark", "Postgres"],
  },
  {
    Icon: LineChart,
    title: "AI Products",
    desc: "LLM apps, RAG systems, and AI features integrated into real user experiences.",
    tags: ["LangChain", "OpenAI", "Vector DBs", "Next.js"],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Bridging data science and real products
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a data analyst and AI developer who loves the full journey
              — from a raw, unruly dataset to a polished model or dashboard that
              teams actually use. My background spans analytics, machine
              learning, and modern web development.
            </p>
            <p>
              I care about clarity: clean visualizations, honest metrics, and
              models whose behaviour I can explain. Whether it&apos;s forecasting
              revenue, segmenting customers, or building an LLM-powered assistant,
              my goal is measurable impact.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-border/60 bg-card/50 p-4"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold text-primary text-glow sm:text-3xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map(({ Icon, title, desc, tags }) => (
            <div
              key={title}
              className="group rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_20px_-4px_var(--primary)]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      {children}
    </span>
  )
}
