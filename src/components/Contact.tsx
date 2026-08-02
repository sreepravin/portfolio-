import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import { profile } from '../data/resumeData'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

const infoCards = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiGithub, label: 'GitHub', value: profile.githubLabel, href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    window.setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something great"
          description="Open to Software Developer, Full Stack, Data Analyst, AI Engineer and Data Engineer roles and internships."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoCards.map((c, i) => (
              <GlassCard key={c.label} delay={i * 0.07} className="p-5">
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="w-11 h-11 rounded-xl bg-royal-500/10 border border-royal-400/20 flex items-center justify-center text-royal-400 shrink-0">
                    <c.icon size={18} />
                  </span>
                  <span>
                    <p className="text-xs text-[var(--text-muted)]">{c.label}</p>
                    <p className="text-sm font-medium text-[var(--text-primary)] group-hover:text-royal-400 transition-colors break-all">
                      {c.value}
                    </p>
                  </span>
                </a>
              </GlassCard>
            ))}
          </div>

          <GlassCard strong className="p-7 sm:p-9">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Your Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-royal-400/60 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Your Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-royal-400/60 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[var(--text-muted)] mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-royal-400/60 transition-colors resize-none"
                  placeholder="Tell me about the role or project…"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-royal-600 hover:bg-royal-500 text-white font-display font-medium text-sm py-3.5 rounded-xl shadow-glow-sm hover:shadow-glow transition-all duration-300"
              >
                {sent ? (
                  <>
                    <FiCheck size={16} /> Opening your mail app…
                  </>
                ) : (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
