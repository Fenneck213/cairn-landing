const footerLinks = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Tarifs',          href: '#pricing' },
    { label: 'Simulateur ROI',  href: '#simulator' },
    { label: 'FAQ',             href: '#faq' },
  ],
  Société: [
    { label: 'À propos',   href: '#' },
    { label: 'Blog',       href: '#' },
    { label: 'Partenaires', href: '#' },
    { label: 'Contact',    href: 'mailto:hello@cairn.app' },
  ],
  Légal: [
    { label: 'Mentions légales',    href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGU',                 href: '#' },
    { label: 'Cookies',             href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cairn-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cairn-500/30">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3L3 21h18L12 3z" />
                  <path d="M9 15l3-5 3 5" />
                </svg>
              </div>
              <span className="font-bold text-xl gradient-text">Cairn</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Business plan IA conforme France &amp; Algérie avec pilotage PMBOK intégré.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2026 Cairn Technologies SAS. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-slate-600 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cairn-500 inline-block" />
              Hébergé en Europe
            </span>
            <span>·</span>
            <span>RGPD conforme</span>
            <span>·</span>
            <span>🇫🇷 🇩🇿</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
