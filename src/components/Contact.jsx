import { Mail, Linkedin, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Let’s connect
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            I’m open to product roles and advisory work. The best way to reach
            me is via email. I typically respond within a day.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow hover:bg-slate-100"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-900"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-900"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Your Name — Built with care
        </p>
      </div>
    </section>
  );
}
