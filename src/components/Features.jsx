import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Activity, Radar, LockKeyhole, LineChart, Cloud } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Zero‑Trust Access',
    desc: 'Continuous verification with adaptive policies and device posture checks.',
    accent: 'from-emerald-400 to-cyan-400'
  },
  {
    icon: Radar,
    title: 'Threat Detection',
    desc: 'ML‑powered anomaly detection, IOC matching, and lateral movement analysis.',
    accent: 'from-cyan-400 to-blue-400'
  },
  {
    icon: Activity,
    title: 'Live SOC Feed',
    desc: 'Stream incidents in real‑time and triage faster with automated playbooks.',
    accent: 'from-violet-400 to-fuchsia-400'
  },
  {
    icon: LockKeyhole,
    title: 'Data Encryption',
    desc: 'End‑to‑end encryption with hardware-backed keys across regions.',
    accent: 'from-rose-400 to-orange-400'
  },
  {
    icon: LineChart,
    title: 'Compliance Insights',
    desc: 'Continuously track SOC2, ISO 27001, and HIPAA readiness.',
    accent: 'from-amber-400 to-emerald-400'
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    desc: 'Agentless deployment across AWS, Azure, and GCP with auto-scaling.',
    accent: 'from-sky-400 to-emerald-400'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to stay secure</h2>
          <p className="mt-3 text-slate-300">A unified platform that brings visibility, prevention, and response together.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-shadow hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.35)]"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-slate-900`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
