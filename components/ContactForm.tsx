"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form not yet configured. Email topher.a.cook@gmail.com directly."
      );
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("from_name", "Chris Cook Portfolio");
    formData.append(
      "subject",
      `Portfolio inquiry from ${formData.get("name") ?? "anonymous"}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-[color:var(--bg)]/30 bg-[color:var(--bg)]/[0.04] p-8">
        <p className="eyebrow text-[color:var(--bg)]/60 mb-3">Message sent</p>
        <p className="font-display text-3xl md:text-4xl tracking-tight">
          Thanks. I&rsquo;ll be in touch within a day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm link-underline text-[color:var(--bg)]/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="botcheck" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required type="text" autoComplete="name" />
        <Field
          label="Email"
          name="email"
          required
          type="email"
          autoComplete="email"
        />
      </div>
      <Field
        label="Company or context"
        name="company"
        required={false}
        type="text"
        autoComplete="organization"
      />
      <FieldArea label="What are you working on?" name="message" required />
      <div className="flex flex-col md:flex-row md:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-3 rounded-full bg-[color:var(--bg)] text-[color:var(--ink)] px-6 py-4 text-base font-medium hover:bg-[color:var(--bg-elev)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" ? (
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2 10L10 2M10 2H4M10 2v6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
        </button>
        {status === "error" ? (
          <p className="text-sm text-[color:var(--accent)]">{errorMessage}</p>
        ) : (
          <p className="text-xs text-[color:var(--bg)]/50 max-w-sm">
            Messages route straight to topher.a.cook@gmail.com. No tracking, no list signup.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type,
  autoComplete,
}: {
  label: string;
  name: string;
  required: boolean;
  type: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-[color:var(--bg)]/50 mb-2">
        {label}
        {required ? "" : <span className="normal-case tracking-normal ml-1">(optional)</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full bg-transparent border-b border-[color:var(--bg)]/30 focus:border-[color:var(--bg)] outline-none py-3 text-lg text-[color:var(--bg)] placeholder:text-[color:var(--bg)]/30 transition-colors"
      />
    </label>
  );
}

function FieldArea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-[color:var(--bg)]/50 mb-2">
        {label}
      </span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="w-full bg-transparent border-b border-[color:var(--bg)]/30 focus:border-[color:var(--bg)] outline-none py-3 text-lg text-[color:var(--bg)] placeholder:text-[color:var(--bg)]/30 transition-colors resize-none"
      />
    </label>
  );
}
