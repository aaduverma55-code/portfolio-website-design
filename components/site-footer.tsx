import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-foreground">aditya</span>
          <span className="text-primary">.verma</span> — Data &amp; AI
        </p>
        <div className="flex items-center gap-1">
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
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aditya Verma. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
