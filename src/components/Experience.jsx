export default function Experience() {
  const roles = [
    {
      company: 'AI for Work.ing',
      title: 'Consultant & Lecturer',
      period: '2023 – Present',
      bullets: [
        'Led 50+ organizations through GenAI adoption; trained 2,000+ professionals',
        '150+ workshops rated 4.9/5',
        'Built AI tool stacks and governance frameworks; cut content time up to 40%'
      ],
    },
    {
      company: 'Ben‑Gurion University of the Negev',
      title: 'University Lecturer',
      period: '2025 – Present',
      bullets: [
        'Course: Practical Use of Generative AI for Business Strategy and Analysis (MBA International Program)'
      ],
    },
    {
      company: 'Classiq Technologies',
      title: 'Head of Growth & Marketing Operations',
      period: '2023 – 2025',
      bullets: [
        'Scaled user community 700 → 10,000 in 6 months',
        'Implemented ABM; +35% high‑intent leads',
        'Relaunched website and SEO; +50% organic traffic',
        'Built OpenAI‑based moderation and a docs chatbot'
      ],
    },
    {
      company: 'Overwolf',
      title: 'Head of Growth',
      period: '2021 – 2023',
      bullets: [
        'Built B2B demand generation program',
        'Rebuilt social team achieving 100x virality',
        'Relaunched 10M‑visitor site without losing #1 SERP rank'
      ],
    },
    {
      company: 'realmarkering',
      title: 'Founder',
      period: '2019 – 2021',
      bullets: [
        'Built and led B2B marketing department; created new revenue stream',
        'Delivered results for DataRails, Plarium, GrowthSpace, ActiveTrail, ICL Group'
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Experience</h2>
        <div className="mt-10 grid gap-6">
          {roles.map((r) => (
            <div key={r.company} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-lg font-semibold text-gray-900">{r.company}</div>
                <div className="text-sm text-gray-600">{r.period}</div>
              </div>
              <div className="text-sm text-gray-700">{r.title}</div>
              <ul className="mt-3 space-y-1 text-gray-700">
                {r.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
