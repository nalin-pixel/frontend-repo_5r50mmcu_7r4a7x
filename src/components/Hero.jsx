import { User, Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/50 px-3 py-1 text-xs text-slate-300">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Product Manager · 4 years experience
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Building products users love — from insight to impact
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              I’m a product manager focused on aligning user needs with business
              goals. I specialize in discovery, data-informed decision making,
              and shipping outcomes that move the metrics that matter.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <Rocket className="h-4 w-4" /> View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900 px-4 py-2 font-medium text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
              >
                <User className="h-4 w-4" /> Get in touch
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 sm:max-w-md">
              <div>
                <dt className="text-sm text-slate-400">Launched features</dt>
                <dd className="text-2xl font-semibold text-white">30+ </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">Cross‑functional squads</dt>
                <dd className="text-2xl font-semibold text-white">4</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400">NPS impact</dt>
                <dd className="text-2xl font-semibold text-white">+12</dd>
              </div>
            </dl>
          </div>
          <div className="flex-1">
            <div className="mx-auto aspect-square w-full max-w-sm rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-900/60">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-900 shadow">
                    <User className="h-10 w-10" />
                  </div>
                  <p className="mt-4 text-sm text-slate-400">Open to Product roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
