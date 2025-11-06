export default function About() {
  return (
    <section id="about" className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">About me</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          I’m a product manager with four years of experience turning ambiguous
          problems into shipped outcomes. I partner closely with design,
          engineering, and go-to-market to validate user needs, prioritize with
          clarity, and deliver iteratively. I’m comfortable owning end-to-end
          product lifecycle — from discovery and hypothesis framing to launch,
          measurement, and iteration.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200">
            • Strengths: discovery, roadmap strategy, stakeholder alignment
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200">
            • Tooling: product analytics, experiment design, product ops
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200">
            • Outcomes: increased activation, retention, and NPS
          </li>
          <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-200">
            • Industries: SaaS, marketplace, and B2B productivity
          </li>
        </ul>
      </div>
    </section>
  );
}
