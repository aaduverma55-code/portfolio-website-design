"use client"

import { useState } from "react"
import { Check, Loader2, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils"

type Status = "idle" | "submitting" | "success"

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "submitting") return
    setStatus("submitting")
    // Simulated submission — wire up to an email service or server action later.
    setTimeout(() => {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    }, 1100)
  }

  return (
    <section id="contact" className="relative scroll-mt-20 grid-bg">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              03 — Contact
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something with your data
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Have a project, a dataset, or an idea for an AI feature? Send a
              message and I&apos;ll get back to you within a couple of days.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:aditya@example.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-primary">
                  <Mail className="size-4" />
                </span>
                aditya@example.com
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border/60 bg-card/60 text-primary">
                  <MapPin className="size-4" />
                </span>
                Remote · Available worldwide
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project or dataset..."
                  className={cn(inputClass, "resize-y")}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_var(--primary)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
            >
              {status === "submitting" && (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <Check className="size-4" />
                  Message sent
                </>
              )}
              {status === "idle" && (
                <>
                  <Send className="size-4" />
                  Send message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-accent" role="status">
                Thanks! Your message has been received.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-md border border-border/70 bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
