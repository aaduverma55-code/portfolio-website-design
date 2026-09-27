import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"

type Project = {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  demoHref: string
  codeHref: string
}

const projects: Project[] = [
  {
    title: "Revenue Forecasting Engine",
    category: "Data Analytics",
    description:
      "Time-series forecasting pipeline predicting monthly revenue with 94% accuracy, surfaced through an interactive dashboard for the finance team.",
    image: "/projects/sales-forecasting.png",
    tags: ["Python", "Prophet", "SQL", "Power BI"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    title: "Customer Segmentation Suite",
    category: "Machine Learning",
    description:
      "Unsupervised clustering of 200k customers into actionable segments, driving a 23% lift in targeted campaign conversion.",
    image: "/projects/customer-segmentation.png",
    tags: ["scikit-learn", "K-Means", "Pandas", "Plotly"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    title: "Support NLP Assistant",
    category: "AI Development",
    description:
      "A RAG-powered assistant that answers customer questions from internal docs, cutting first-response time by 60%.",
    image: "/projects/nlp-chatbot.png",
    tags: ["LangChain", "OpenAI", "Vector DB", "Next.js"],
    demoHref: "#",
    codeHref: "#",
  },
  {
    title: "Vision Quality Inspector",
    category: "AI Development",
    description:
      "Real-time defect detection model for a manufacturing line, flagging faulty units with 98% precision on the factory floor.",
    image: "/projects/computer-vision.png",
    tags: ["PyTorch", "YOLO", "OpenCV", "FastAPI"],
    demoHref: "#",
    codeHref: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-20 border-y border-border/50 bg-card/20">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            02 — Projects
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected data &amp; AI work
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A mix of analytics, machine learning, and applied AI — each project
            focused on turning data into something people can act on.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card/60 transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-background/70 px-2.5 py-1 font-mono text-[11px] text-primary backdrop-blur">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 text-sm">
                  <a
                    href={p.demoHref}
                    className="inline-flex items-center gap-1.5 font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    Live demo
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={p.codeHref}
                    className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="size-4" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
