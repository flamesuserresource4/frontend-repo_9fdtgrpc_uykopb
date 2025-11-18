import React from 'react'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_80%_120%,rgba(16,185,129,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-semibold">Ready to secure your stack?</h3>
          <p className="mt-2 text-slate-300">Start your 14‑day free trial or talk to our team about enterprise options.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <input type="email" placeholder="Work email"
              className="w-full max-w-sm rounded-full border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-400/40" />
            <button className="w-full max-w-[180px] rounded-full bg-emerald-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-emerald-400">Get started</button>
          </div>
          <p className="mt-3 text-xs text-slate-400">No credit card required</p>
        </div>
      </div>
    </section>
  )
}
