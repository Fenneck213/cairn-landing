import { motion } from 'framer-motion'

interface Testimonial {
  name: string
  role: string
  flag: string
  avatar: string
  quote: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophie Marchand',
    role: 'Fondatrice, GreenTech Conseil — Lyon',
    flag: '🇫🇷',
    avatar: 'SM',
    quote:
      "Cairn a transformé ma façon de travailler. J'avais passé 3 semaines sur mon dernier business plan pour la BPI. Avec Cairn, j'ai eu quelque chose de bien meilleur en 2 heures. Les sections PMBOK et matrice de risques ont bluffé mon conseiller BPI.",
    stars: 5,
  },
  {
    name: 'Karim Benali',
    role: 'Entrepreneur, KBD Import-Export — Alger',
    flag: '🇩🇿',
    avatar: 'KB',
    quote:
      "J'avais besoin d'un business plan conforme ANADE pour obtenir mon financement ANSEJ. Cairn a tout compris dès le départ. Le document généré respectait exactement les exigences algériennes. Mon dossier a été accepté du premier coup.",
    stars: 5,
  },
  {
    name: 'David Faure',
    role: 'Expert-Comptable, Cabinet Faure & Associés — Paris',
    flag: '🇫🇷',
    avatar: 'DF',
    quote:
      "En tant qu'expert-comptable, je recommande Cairn à tous mes clients porteurs de projets. La qualité des projections financières et la rigueur méthodologique PMBOK sont remarquables. J'utilise le plan Expert et je génère en moyenne 8 BP par mois pour mes clients.",
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-eyebrow">Témoignages</span>
          <h2 className="section-title">
            Ils ont{' '}
            <span className="gradient-text">lancé leur projet</span>{' '}
            avec Cairn
          </h2>
          <p className="section-subtitle">
            Des entrepreneurs et professionnels de France et d'Algérie nous font confiance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 flex flex-col gap-5 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cairn-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {t.flag} {t.name}
                  </p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
