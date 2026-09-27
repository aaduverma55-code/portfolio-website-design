import { ArrowDown, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden grid-bg"
    >
      {/* ambient neon glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 size-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
          <span className="inline-block size-1.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
          Available for new opportunities
        </p>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Aditya Verma
        </h1>

        <p className="mt-4 text-balance text-xl font-medium text-primary text-glow sm:text-2xl">
          Data Analyst &amp; AI Developer
        </p>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          I turn messy data into clear decisions and build intelligent
          applications powered by machine learning. From analytics dashboards to
          production AI models, I ship work that&apos;s both rigorous and useful.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-4px_var(--primary)] transition-transform hover:scale-[1.02]"
          >
            View my work
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Contact me
          </a>

          <div className="ml-1 flex items-center gap-1">
            {[
              { href: "https://github.com", label: "GitHub", Icon: GithubIcon },
              { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon },
              { href: "mailto:aditya@example.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
