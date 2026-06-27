import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Cairn est-il vraiment conforme aux réglementations françaises et algériennes ?',
    answer:
      "Oui. Cairn génère des business plans conformes aux exigences de la BPI France, de l'URSSAF et des chambres de commerce françaises, ainsi qu'aux standards de l'ANADE, du CNRC et de l'ANSEJ en Algérie. Notre équipe juridique valide régulièrement les modèles utilisés par l'IA pour garantir une conformité à jour.",
  },
  {
    question: "Comment fonctionne la génération par IA ?",
    answer:
      "Vous renseignez un questionnaire guidé (secteur, chiffre d'affaires prévisionnel, équipe, marché cible…). Notre IA analyse ces données et génère automatiquement toutes les sections d'un business plan professionnel : résumé exécutif, analyse de marché, plan financier sur 3 ans, plan opérationnel PMBOK, matrice de risques et planning. Le tout en moins de 15 minutes.",
  },
  {
    question: 'Qu\'est-ce que le pilotage PMBOK et en quoi est-il utile ?',
    answer:
      "Le PMBOK (Project Management Body of Knowledge) est la référence mondiale en gestion de projet. Intégré à Cairn, il structure votre business plan avec des processus éprouvés : définition des livrables, planification des ressources, gestion des risques et indicateurs de performance (EVM, PERT). Cela renforce considérablement la crédibilité de votre dossier auprès des investisseurs et des banques.",
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      "La sécurité est notre priorité. Toutes les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Nos serveurs sont hébergés en Europe (Paris). Vous restez propriétaire de vos données à 100% — nous ne les utilisons ni pour entraîner notre IA, ni à des fins commerciales. Cairn est conforme au RGPD.",
  },
  {
    question: 'Puis-je modifier le business plan généré ?',
    answer:
      "Absolument. Après la génération, vous accédez à un éditeur en ligne complet pour personnaliser chaque section. Vous pouvez aussi exporter en Excel pour modifier les projections financières librement, ou en PDF pour une présentation immédiate. Les plans Pro et Expert permettent également la collaboration multi-utilisateurs en temps réel.",
  },
  {
    question: "Que se passe-t-il à la fin des 14 jours d'essai ?",
    answer:
      "À la fin de votre essai gratuit, vous choisissez le plan qui vous convient et renseignez vos informations de paiement. Sans action de votre part, votre compte passe en mode lecture seule (vos documents sont conservés). Aucun prélèvement automatique n'est effectué pendant l'essai — pas de carte bancaire requise pour démarrer.",
  },
]

function FaqItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.07] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white font-medium pr-4 group-hover:text-cairn-400 transition-colors duration-200">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-cairn-500/20 border-cairn-500/40 rotate-45' : 'hover:border-cairn-500/40'
          }`}
        >
          <svg className="w-3 h-3 text-cairn-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-400 text-sm leading-relaxed pb-5 pr-10">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cairn-500/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">
            Questions{' '}
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir avant de vous lancer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card px-7"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
