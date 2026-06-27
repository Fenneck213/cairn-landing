import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cairn-900/80 via-slate-900 to-emerald-950/60" />
          <div className="absolute inset-0 border border-cairn-500/20 rounded-3xl" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cairn-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="section-eyebrow"
            >
              Prêt à vous lancer ?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="text-3xl md:text-5xl font-bold mb-5 text-white leading-tight"
            >
              Créez votre business plan{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">en moins d'une heure</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="text-slate-400 text-lg mb-10 max-w-xl mx-auto"
            >
              Rejoignez 500+ entrepreneurs qui ont déjà lancé leur projet grâce à Cairn.
              Essai gratuit 14 jours, sans carte bancaire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <a href="#pricing" className="btn-primary text-base px-10 py-4">
                Commencer gratuitement →
              </a>
              <a
                href="mailto:hello@cairn.app"
                className="btn-outline text-base px-10 py-4"
              >
                Parler à l'équipe
              </a>
            </motion.div>

            {/* Tally form embed */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-lg mx-auto"
            >
              <p className="text-slate-500 text-sm mb-4">
                Ou laissez-nous votre email pour être contacté :
              </p>
              {/*
                Remplacez l'URL ci-dessous par votre vrai lien Tally :
                https://tally.so/r/VOTRE_ID_FORMULAIRE
              */}
              <iframe
                data-tally-src="https://tally.so/embed/PLACEHOLDER_TALLY_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                src="https://tally.so/embed/PLACEHOLDER_TALLY_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="120"
                title="Formulaire de contact Cairn"
                className="rounded-xl"
                style={{ border: 'none', background: 'transparent' }}
              />
              <p className="text-slate-600 text-xs mt-2">
                * Remplacez PLACEHOLDER_TALLY_FORM_ID par votre ID de formulaire Tally.so
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
