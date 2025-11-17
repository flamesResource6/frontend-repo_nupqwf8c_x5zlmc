import Reveal from './Reveal'

export default function Logos() {
  const logos = ['AWS', 'Microsoft', 'NVIDIA', 'HubSpot', 'Non‑profits', 'Startups']
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center text-sm text-gray-600">Trusted by teams across</div>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {logos.map((l, i) => (
            <Reveal key={l} delay={i * 0.06}>
              <div className="px-3 py-2 rounded-md border border-gray-200 text-gray-700 bg-gray-50">{l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
