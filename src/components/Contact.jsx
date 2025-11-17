import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const backend = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks — I will get back to you shortly.')
      e.target.reset()
    } catch (err) {
      setStatus('Could not send right now. Please email: ben@ai-for-work.ing')
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Book a discovery call</h2>
        <p className="mt-3 text-gray-700">Share a few details and I’ll follow up within one business day.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input required type="email" name="email" placeholder="Work email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <textarea required name="message" rows="5" placeholder="What would you like to achieve with AI?" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-black w-fit">Send</button>
          {status && <div className="text-sm text-gray-700">{status}</div>}
        </form>
      </div>
    </section>
  )
}
