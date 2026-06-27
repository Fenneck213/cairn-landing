import { motion } from 'framer-motion'

interface Plan {
  name: string
  price: number
  tagline: string
  features: string[]
  cta: string
  highlighted: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 29,
    tagline: 'Idéal pour les auto-entrepreneurs',
    features: [
      '1 business plan / mois',
      'Génération IA complète',
      'Conformité France OU Algérie',
      'Export PDF',
      'Matrice de risques basique',
      'Support email',
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 79,
    tagline: 'Pour les PME et équipes',
    features: [
      '5 business plans / mois',
      'Double juridiction FR + DZ',
      'Pilotage PMBOK complet',
      'WBS / PERT / EVM',
      'Export PDF & Excel',
      '3 collaborateurs inclus',
      'Support prioritaire',
    ],
    cta: 'Essayer 14 jours gratuit',
    highlighted: true,
    badge: 'Populaire',
  },
  {
    name: 'Expert',
    price: 199,
    tagline: 'Pour les cabinets et consultants',
    features: [
      'Business plans illimités',
      'Double juridiction FR + DZ',
      'Pilotage PMBOK avancé',
      'WBS / PERT / EVM / RACI',
      'Export PDF, Excel & Word',
      'Collaborateurs illimités',
      'Manager de portefeuille',
      'Support dédié 7j/7',
      'API & intégrations',
    ],
    cta: 'Contacter l\'équipe',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-eyebrow">Tarifs</span>
          <h2 className="section-title">
            Simple,{' '}
            <span className="gradient-text">transparent</span>, sans surprise
          </h2>
          <p className="section-subtitle">
            Essai gratuit 14 jours. Aucune carte bancaire requise. Résiliez quand vous voulez.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-cairn-500/10 to-emerald-500/5 border-2 border-cairn-500/50 shadow-2xl shadow-cairn-500/10 scale-[1.02]'
                  : 'glass-card hover:bg-white/[0.07]'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cairn-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}€</span>
                  <span className="text-slate-400 text-sm mb-1.5">/mois</span>
                </div>
                <p className="text-slate-500 text-xs mt-1">Facturation mensuelle · Sans engagement</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg
                      className="w-4 h-4 text-cairn-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center font-semibold rounded-xl py-3 transition-all duration-300 ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Paiement sécurisé · Factures automatiques · Données hébergées en Europe
        </motion.p>
      </div>
    </section>
  )
}
