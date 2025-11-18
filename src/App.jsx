import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <footer className="bg-slate-950 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} CypherGuard Security, Inc. All rights reserved.
      </footer>
    </div>
  )
}

export default App
