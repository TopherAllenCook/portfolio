"use client";

import { useEffect, useMemo, useState } from "react";
import { getBrand, Workflow, WorkflowField } from "@/lib/brands";
import * as Renderers from "@/components/LiveDemoRenderers";

export default function LiveDemo({ brandSlug }: { brandSlug: string }) {
  const brand = getBrand(brandSlug);
  const [workflowId, setWorkflowId] = useState<string>(brand.workflows[0].id);
  const workflow = useMemo(
    () => brand.workflows.find((w) => w.id === workflowId)!,
    [brand, workflowId]
  );

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [elapsed, setElapsed] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<unknown>(null);

  // Reset inputs + result when brand or workflow changes
  useEffect(() => {
    const defaults: Record<string, string> = {};
    for (const f of workflow.inputFields) {
      defaults[f.name] = f.defaultValue ?? "";
    }
    // Apply first preset by default
    if (workflow.presets.length > 0) {
      Object.assign(defaults, workflow.presets[0].values);
    }
    setInputs(defaults);
    setResult(null);
    setElapsed(null);
    setError(null);
  }, [workflow]);

  // When brand changes, also reset workflow to first one
  useEffect(() => {
    setWorkflowId(brand.workflows[0].id);
  }, [brand.slug, brand.workflows]);

  async function generate() {
    setLoading(true);
    setError(null);
    setElapsed(null);
    setResult(null);
    const startedAt = Date.now();

    try {
      const resp = await fetch(workflow.webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      if (!resp.ok) throw new Error(`Webhook returned ${resp.status}`);
      const data = await resp.json();
      setResult(data);
      setElapsed(Date.now() - startedAt);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Generation failed. The webhook may be cold-starting; try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const path = (() => {
    try {
      return new URL(workflow.webhook).pathname;
    } catch {
      return workflow.webhook;
    }
  })();

  return (
    <div className="not-prose">
      {/* Workflow picker */}
      <div className="border border-[color:var(--line)] rounded-lg bg-white/40 p-4 mb-5">
        <p className="eyebrow mb-3">
          Workflow ({brand.workflows.length} live on this brand)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {brand.workflows.map((w) => {
            const active = w.id === workflowId;
            return (
              <button
                key={w.id}
                onClick={() => setWorkflowId(w.id)}
                className={
                  "text-left px-4 py-3 rounded-lg border transition-all " +
                  (active
                    ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--bg)]"
                    : "border-[color:var(--line)] bg-white hover:bg-[color:var(--bg-elev)]")
                }
              >
                <div className="text-sm font-medium leading-tight">
                  {w.label}
                </div>
                <div
                  className={
                    "text-[10px] mt-1 tracking-wide uppercase " +
                    (active ? "opacity-70" : "text-[color:var(--muted)]")
                  }
                >
                  {w.badge}
                </div>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-[color:var(--ink-2)] leading-relaxed">
          {workflow.description}
        </p>
      </div>

      {/* Input panel */}
      <div className="border border-[color:var(--line)] rounded-lg bg-white/60 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-4 flex-wrap">
          <p className="eyebrow">Input</p>
          <span className="text-[10px] tabular-nums text-[color:var(--muted)] uppercase tracking-widest">
            POSTs to {path} · Claude Sonnet 4.6 · brain loaded
          </span>
        </div>

        {workflow.presets.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {workflow.presets.map((p) => (
              <button
                key={p.label}
                onClick={() => setInputs((prev) => ({ ...prev, ...p.values }))}
                disabled={loading}
                className={
                  "text-xs px-3 py-1.5 rounded-full border transition-colors bg-white border-[color:var(--line)] hover:bg-[color:var(--bg-elev)]" +
                  (loading ? " opacity-50 cursor-not-allowed" : "")
                }
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-3">
          {workflow.inputFields.map((f) => (
            <Field
              key={f.name}
              field={f}
              value={inputs[f.name] ?? ""}
              onChange={(v) =>
                setInputs((prev) => ({ ...prev, [f.name]: v }))
              }
              accent={brand.accent}
              disabled={loading}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={generate}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--ink)] text-[color:var(--bg)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="inline-block h-3 w-3 rounded-full border-2 border-[color:var(--bg)] border-t-transparent animate-spin" />
                Running {workflow.label}…
              </>
            ) : (
              <>
                Run the agent
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 10L10 2M10 2H4M10 2v6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>

          {elapsed !== null && (
            <span className="text-xs text-[color:var(--muted)] tabular-nums">
              Completed in {(elapsed / 1000).toFixed(1)}s · model: claude-sonnet-4-6 · workflow: {workflow.id}
            </span>
          )}
          {loading && (
            <span className="text-xs text-[color:var(--muted)]">
              ~{workflow.expectedSeconds}s end-to-end.
            </span>
          )}
        </div>

        {error && (
          <div className="mt-4 text-sm rounded-md border border-red-200 bg-red-50 text-red-800 px-4 py-3">
            {error}
          </div>
        )}
      </div>

      {/* Result */}
      <div className="mt-6">
        <Renderers.RenderResult
          kind={workflow.renderer}
          loading={loading}
          result={result}
          accent={brand.accent}
        />
      </div>
    </div>
  );
}

function Field({
  field,
  value,
  onChange,
  accent,
  disabled,
}: {
  field: WorkflowField;
  value: string;
  onChange: (v: string) => void;
  accent: string;
  disabled: boolean;
}) {
  const baseInput =
    "w-full text-sm border border-[color:var(--line)] rounded-md bg-white px-4 py-3 leading-relaxed text-[color:var(--ink-2)] focus:outline-none focus:ring-2 focus:border-current disabled:opacity-60";

  return (
    <div>
      <label className="block text-xs font-medium text-[color:var(--ink-2)] mb-1.5">
        {field.label}
      </label>
      {field.type === "textarea" && (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={3}
          placeholder={field.placeholder}
          className={baseInput + " resize-y"}
          style={{ borderColor: undefined, accentColor: accent }}
        />
      )}
      {field.type === "text" && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={field.placeholder}
          className={baseInput}
        />
      )}
      {field.type === "number" && (
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={field.placeholder}
          className={baseInput + " max-w-[140px]"}
        />
      )}
      {field.type === "select" && field.options && (
        <div className="flex flex-wrap gap-2">
          {field.options.map((o) => {
            const active = o.value === value;
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => onChange(o.value)}
                disabled={disabled}
                className={
                  "text-xs px-3 py-1.5 rounded-full border transition-colors " +
                  (active
                    ? "text-white border-current"
                    : "bg-white border-[color:var(--line)] hover:bg-[color:var(--bg-elev)]") +
                  (disabled ? " opacity-50 cursor-not-allowed" : "")
                }
                style={
                  active
                    ? { backgroundColor: accent, borderColor: accent }
                    : undefined
                }
              >
                {o.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
