import { motion } from 'framer-motion'

const stats = [
  { value: '10×', label: 'Plus rapide' },
  { value: '2',   label: 'Juridictions' },
  { value: '98%', label: 'Conformité' },
  { value: '500+', label: 'Utilisateurs' },
]

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-24 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cairn-500/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(20,184,166,0.12) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-cairn-500/10 border border-cairn-500/25 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cairn-400 animate-pulse" />
          <span className="text-cairn-400 text-sm font-medium">
            Business plan IA bi-juridictionnel · France &amp; Algérie
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.08)} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Votre business plan{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text text-shadow-glow">
            conforme France &amp; Algérie
          </span>
          <br />
          <span className="text-white">généré par IA</span>
        </motion.h1>

        {/* Sub */}
        <motion.p {...fadeUp(0.16)} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          En quelques minutes, Cairn génère un business plan complet conforme
          aux exigences de la BPI France, de l'URSSAF, de l'ANADE et du CNRC —
          avec pilotage PMBOK, matrices de risques et projections financières.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a href="#pricing" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
            Essai gratuit 14 jours →
          </a>
          <a href="#features" className="btn-outline text-base px-8 py-4 w-full sm:w-auto">
            Voir les fonctionnalités
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.30)} className="flex flex-wrap justify-center gap-10 md:gap-16 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Mock dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-5 glow-teal">
            {/* Window chrome */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <div className="ml-4 flex-1 bg-white/5 rounded-full h-6 flex items-center px-3">
                <span className="text-slate-500 text-xs font-mono">cairn.app/dashboard</span>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {/* Main doc */}
              <div className="sm:col-span-2 bg-slate-900/80 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-slate-500 font-mono">Business Plan — TechStartup SAS</span>
                  <span className="text-xs bg-cairn-500/20 text-cairn-400 px-2 py-0.5 rounded-full">En cours</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Résumé exécutif', done: true },
                    { label: 'Analyse de marché', done: true },
                    { label: 'Plan financier 3 ans', done: true },
                    { label: 'Pilotage PMBOK', done: true },
                    { label: 'Export PDF & Excel', done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          item.done
                            ? 'bg-cairn-500/20 text-cairn-400'
                            : 'bg-white/5 border border-cairn-500/40 animate-pulse'
                        }`}
                      >
                        {item.done && (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${item.done ? 'text-slate-300' : 'text-cairn-400'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-3">
                <div className="bg-cairn-500/10 border border-cairn-500/20 rounded-xl p-4">
                  <span className="text-cairn-400 text-xs font-bold uppercase tracking-wide">🇫🇷 France</span>
                  <p className="text-white font-semibold mt-1">SARL / SAS</p>
                  <p className="text-slate-400 text-xs mt-0.5">Conforme BPI France</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">🇩🇿 Algérie</span>
                  <p className="text-white font-semibold mt-1">EURL / SARL</p>
                  <p className="text-slate-400 text-xs mt-0.5">Conforme ANADE</p>
                </div>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                  <p className="text-slate-400 text-xs">Score PMBOK</p>
                  <p className="text-white font-bold text-xl mt-1">94 / 100</p>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-gradient-to-r from-cairn-500 to-emerald-500 h-1.5 rounded-full"
                      style={{ width: '94%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
