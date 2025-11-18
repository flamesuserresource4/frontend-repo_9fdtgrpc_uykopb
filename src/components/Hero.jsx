import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ShieldCheck, ArrowRight, PlayCircle } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-slate-950 text-white">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay so content is readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pt-6 md:px-10">
        {/* Top navigation */}
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-sm font-semibold tracking-tight">CypherGuard</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 hover:bg-emerald-500/20 transition">Sign in</button>
          </div>
        </div>

        {/* Headline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center md:py-28"
        >
          <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Real‑time protection • SOC‑ready
          </motion.div>

          <motion.h1 variants={item} className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Enterprise‑grade cyber security for a zero‑trust world
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-2xl text-balance text-slate-300 md:text-lg">
            Detect threats, enforce policies, and prove compliance — all from one sleek dashboard powered by AI‑assisted insights.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition">
              Start free trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-md hover:bg-white/10 transition">
              <PlayCircle className="h-5 w-5 text-emerald-300" />
              See how it works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['99.99%', 'Uptime'],
              ['<2 min', 'MTTR'],
              ['+250', 'Integrations'],
              ['ISO27001', 'Compliant']
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-lg font-semibold text-white md:text-xl">{value}</div>
                <div className="text-xs text-slate-300/80">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
