import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type TooltipItem,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const TRADITIONAL_HOURS_PER_BP = 40
const CAIRN_HOURS_PER_BP = 4
const HOURLY_RATE = 80 // €/h

function getAnnualSubscription(bpCount: number): number {
  if (bpCount <= 2)  return 29  * 12  // Starter
  if (bpCount <= 5)  return 79  * 12  // Pro
  return 199 * 12                      // Expert
}

function getPlanName(bpCount: number): string {
  if (bpCount <= 2)  return 'Starter (29 €/mois)'
  if (bpCount <= 5)  return 'Pro (79 €/mois)'
  return 'Expert (199 €/mois)'
}

export default function Simulator() {
  const [bpCount, setBpCount] = useState(5)

  const {
    traditionalCost,
    cairnCost,
    savings,
    timeSaved,
    planName,
    roiPercent,
  } = useMemo(() => {
    const sub  = getAnnualSubscription(bpCount)
    const trad = bpCount * TRADITIONAL_HOURS_PER_BP * HOURLY_RATE
    const cairn = bpCount * CAIRN_HOURS_PER_BP * HOURLY_RATE + sub
    const saved = Math.max(0, trad - cairn)
    const hours = bpCount * (TRADITIONAL_HOURS_PER_BP - CAIRN_HOURS_PER_BP)
    const roi   = saved > 0 ? Math.round((saved / sub) * 100) : 0

    return {
      traditionalCost: trad,
      cairnCost: cairn,
      savings: saved,
      timeSaved: hours,
      planName: getPlanName(bpCount),
      roiPercent: roi,
    }
  }, [bpCount])

  const chartData = {
    labels: ['Méthode traditionnelle', 'Avec Cairn'],
    datasets: [
      {
        label: 'Coût annuel (€)',
        data: [traditionalCost, cairnCost],
        backgroundColor: ['rgba(239,68,68,0.65)', 'rgba(20,184,166,0.65)'],
        borderColor: ['rgba(239,68,68,1)', 'rgba(20,184,166,1)'],
        borderWidth: 2,
        borderRadius: 10,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<'bar'>) =>
            ` ${(ctx.parsed as { y: number }).y.toLocaleString('fr-FR')} €`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8' },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255,255,255,0.04)' },
        ticks: {
          color: '#94a3b8',
          callback: (value: number | string) =>
            `${Number(value).toLocaleString('fr-FR')} €`,
        },
      },
    },
  }

  return (
    <section id="simulator" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cairn-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cairn-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-eyebrow">Simulateur ROI</span>
          <h2 className="section-title">
            Calculez vos{' '}
            <span className="gradient-text">économies réelles</span>
          </h2>
          <p className="section-subtitle">
            Déplacez le curseur pour voir combien Cairn vous fait économiser
            par rapport à une approche traditionnelle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: controls + metrics */}
            <div className="flex flex-col gap-8">

              {/* Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-white font-semibold">
                    Nombre de business plans par an
                  </label>
                  <span className="text-2xl font-bold gradient-text">{bpCount}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={bpCount}
                  onChange={(e) => setBpCount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #14b8a6 ${((bpCount - 1) / 19) * 100}%, #1e293b ${((bpCount - 1) / 19) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-slate-500 text-xs mt-2">
                  <span>1</span>
                  <span>Plan recommandé : <span className="text-cairn-400">{planName}</span></span>
                  <span>20</span>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: 'Coût traditionnel',
                    value: `${traditionalCost.toLocaleString('fr-FR')} €`,
                    sub: `${bpCount} × 40 h × 80 €/h`,
                    color: 'text-red-400',
                  },
                  {
                    label: 'Coût avec Cairn',
                    value: `${cairnCost.toLocaleString('fr-FR')} €`,
                    sub: `Abonnement + temps réduit`,
                    color: 'text-cairn-400',
                  },
                  {
                    label: 'Économies annuelles',
                    value: `${savings.toLocaleString('fr-FR')} €`,
                    sub: `Retour sur invest. ×${Math.round(roiPercent / 100)}`,
                    color: 'text-emerald-400',
                  },
                  {
                    label: 'Temps libéré',
                    value: `${timeSaved} h`,
                    sub: `Soit ${Math.round(timeSaved / 8)} jours/an`,
                    color: 'text-blue-400',
                  },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="bg-slate-900/60 border border-white/[0.06] rounded-xl p-4"
                  >
                    <p className="text-slate-400 text-xs mb-1">{kpi.label}</p>
                    <p className={`text-xl font-bold ${kpi.color}`}>{kpi.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{kpi.sub}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a href="#pricing" className="btn-primary py-3.5 text-sm">
                Commencer mon essai gratuit →
              </a>
            </div>

            {/* Right: chart */}
            <div>
              <p className="text-slate-400 text-sm mb-4 font-medium">
                Comparaison du coût annuel total (€)
              </p>
              <div className="h-72 md:h-80">
                <Bar data={chartData} options={chartOptions} />
              </div>
              <p className="text-slate-500 text-xs mt-4 text-center">
                * Calcul basé sur 40 h/BP en mode traditionnel vs 4 h/BP avec Cairn, à 80 €/h.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
