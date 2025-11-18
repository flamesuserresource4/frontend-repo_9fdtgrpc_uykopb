import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    cta: 'Get started',
    features: ['Up to 5 assets', 'Community support', 'Basic detections']
  },
  {
    name: 'Pro',
    price: '$49/mo',
    cta: 'Start trial',
    featured: true,
    features: ['Unlimited assets', 'Advanced detections', 'Automated playbooks', 'Priority support']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cta: 'Contact sales',
    features: ['SSO & SAML', 'Dedicated SOC advisor', 'Custom SLAs']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Predictable pricing, powerful security</h2>
          <p className="mt-3 text-slate-300">Choose a plan that scales with your risk surface.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.featured ? 'border-emerald-500/40 bg-emerald-500/10 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.35)]' : 'border-white/10 bg-white/5'} p-6 backdrop-blur`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span className="text-2xl font-bold">{t.price}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full px-4 py-2 font-medium transition ${t.featured ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
