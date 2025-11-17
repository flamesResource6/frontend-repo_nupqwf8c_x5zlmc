import Reveal from './Reveal'

export default function Workshops() {
  const items = [
    {
      title: 'Executive AI Strategy Workshop',
      desc: 'A fast-paced session for leadership teams to align on use-cases, governance, and ROI.',
      bullets: ['2–3 hours', 'C‑suite & Directors', 'Outputs: roadmap, risks, KPIs'],
    },
    {
      title: 'Hands‑on Team Enablement',
      desc: 'Role‑specific training that turns AI curiosity into daily workflows for GTM, Ops, and Product.',
      bullets: ['Half‑day or full‑day', 'Marketing, Sales, Ops, Product', 'Templates & prompts included'],
    },
    {
      title: 'AI Stack & Automation Sprint',
      desc: 'Identify, integrate, and document the right tools for your stack. Build automations with real data.',
      bullets: ['1–2 weeks', 'Security & governance by design', 'Report with architecture & playbooks'],
    },
  ]

  return (
    <section id="workshops" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Workshops & Programs</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-gray-700 max-w-3xl">Designed to deliver quick wins and long‑term capability. Every engagement includes practical templates, governance guidance, and measurement frameworks.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08}>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-gray-900">{card.title}</div>
                <p className="mt-2 text-gray-700">{card.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-700">
                  {card.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
