import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "Activation redesign",
    impact: [
      "+18% week-1 activation",
      "-12% time-to-value",
      "Improved onboarding CSAT",
    ],
    link: "#",
  },
  {
    title: "Usage-based pricing",
    impact: ["+9% ARPU", "+5 pts gross margin", "Lower churn risk"],
    link: "#",
  },
  {
    title: "Insights hub",
    impact: ["+22% feature adoption", "4 new enterprise logos", "Fewer support tickets"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Selected work
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-800 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-900"
          >
            Get the full case studies <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <ul className="mt-4 space-y-2">
                {p.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.link}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300"
              >
                View details <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
