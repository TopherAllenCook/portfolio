import { works } from "@/lib/works";

const stats = [
  { value: "40+", label: "Products launched" },
  { value: "150%+", label: "Lead growth YoY" },
  { value: "15 yrs", label: "Marketing experience" },
  { value: String(works.length), label: "Selected works" },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-28 border-t border-[color:var(--line)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <span className="bracket mb-10 inline-flex">By the numbers</span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-t border-[color:var(--line-strong)] pt-5"
            >
              <div className="display-xl text-[clamp(3rem,7vw,6rem)] text-[color:var(--ink)]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[color:var(--muted)] uppercase tracking-[0.1em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
