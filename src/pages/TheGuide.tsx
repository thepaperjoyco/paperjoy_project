import { motion } from 'motion/react';
import { Mail, Map, Bookmark, ArrowRight, Sparkles, Mailbox, MailOpen, Truck, BookHeart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TheGuide() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header: Simple & Direct */}
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] font-bold text-accent mb-6 block"
          >
            A Guided Tour
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif italic leading-none mb-8"
          >
            The paper joy Experience
          </motion.h1>
          <p className="text-xl md:text-2xl text-ink-muted italic leading-relaxed font-serif max-w-2xl border-l border-ink/10 pl-8">
            Everything you need to know about starting your journey into bimonthly serialized storytelling.
          </p>
        </div>

        {/* The 3-Step Journey */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-48">
          {[
            {
              step: "01",
              title: "Choose Your Narrative",
              desc: "Select from our curated collections—Western, Christian, or Murder Mystery. Every story is a new world waiting to be opened.",
              icon: <Map className="text-accent" size={24} />
            },
            {
              step: "02",
              title: "The Bimonthly Dispatch",
              desc: "Twice a month, a physical envelope arrives. Inside, you'll find the next chapter of your story, enriched with historical replicas.",
              icon: <Mail className="text-accent" size={24} />
            },
            {
              step: "03",
              title: "Archive Your Legacy",
              desc: "Collect each dispatch in your paper joy Case. Over time, you build a complete, tactile anthology to keep forever.",
              icon: <Bookmark className="text-accent" size={24} />
            }
          ].map((item, i) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-serif italic text-ink/20">{item.step}</span>
                <div className="h-px flex-grow bg-ink/5" />
              </div>
              <div className="bg-paper p-8 rounded-[40px] border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif italic mb-4">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Arrives */}
        <div className="mb-48 text-center max-w-5xl mx-auto">
          <h2 className="text-[13px] uppercase tracking-[0.3em] font-bold text-ink/80 mb-16">
            How It Arrives
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-4 relative">
            
            {/* Connecting Dashed Line (Visible on md+) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dashed border-ink/20 -z-10" />

            {[
              {
                step: "1. SIGN UP",
                title: "Choose your edition",
                desc: "and start your journey.",
                icon: <Mailbox className="text-ink/80" size={38} strokeWidth={1.25} />
              },
              {
                step: "2. WE PRINT",
                title: "Beautifully printed",
                desc: "and carefully packed.",
                icon: <MailOpen className="text-ink/80" size={38} strokeWidth={1.25} />
              },
              {
                step: "3. WE SHIP",
                title: "Delivered to your door,",
                desc: "ready to enjoy.",
                icon: <Truck className="text-ink/80" size={38} strokeWidth={1.25} />
              },
              {
                step: "4. YOU ENJOY",
                title: "Unwrap, read, and",
                desc: "keep forever.",
                icon: <BookHeart className="text-ink/80" size={38} strokeWidth={1.25} />
              }
            ].map((item, i) => (
              <motion.div 
                key={item.step} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center w-full md:w-1/4 bg-paper/0"
              >
                <div className="w-24 h-24 rounded-full bg-[#ece2d0] flex items-center justify-center mb-6 ring-8 ring-paper relative">
                  {item.icon}
                </div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-ink/80">{item.step}</h3>
                <p className="text-[13px] text-ink-muted leading-relaxed text-center px-4">
                  {item.title}<br />{item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story collections — editorial “pick your world” (not a dry taxonomy) */}
        <div className="mb-48">
          <div className="relative overflow-hidden rounded-[48px] bg-paper-cream/90 shadow-[0_24px_80px_-24px_rgba(20,18,16,0.12)] ring-1 ring-ink/10 backdrop-blur-sm">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{
                background:
                  'radial-gradient(ellipse 85% 55% at 0% -20%, rgba(139, 69, 19, 0.09), transparent 52%), radial-gradient(ellipse 70% 50% at 100% 110%, rgba(20, 18, 16, 0.05), transparent 50%)',
              }}
            />
            <div className="relative px-10 pt-10 pb-10 md:px-14 md:pt-14 md:pb-14 lg:px-16 lg:pt-16 lg:pb-16">
              {/* Headline + floating product image — tech-site two-column hero */}
              <div className="mb-14 grid grid-cols-1 items-center gap-12 lg:mb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
                {/* Left: copy + CTA */}
                <div className="max-w-xl space-y-6">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.35em] text-accent">
                    <Sparkles className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
                    Choose your collection
                  </div>
                  <h2 className="font-serif text-4xl italic leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
                    Something worth opening twice a month
                  </h2>
                  <p className="max-w-lg text-lg leading-relaxed text-ink-muted">
                    Each world is serialized on paper—written to open together when the mail lands, the way a story-by-mail experience should feel.
                  </p>
                  <Link
                    to="/editions"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-paper transition-opacity hover:opacity-90"
                  >
                    Browse editions
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>

                {/* Right: floating product image (tilts, glows, breaks grid slightly) */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  className="relative lg:-mr-8 xl:-mr-12"
                >
                  {/* Soft ambient glow behind the card */}
                  <div
                    aria-hidden
                    className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-accent/25 via-transparent to-ink/10 blur-3xl opacity-70"
                  />
                  {/* Subtle offset frame — "floating second plate" */}
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] border border-ink/10 bg-paper/40"
                  />
                  <motion.div
                    whileHover={{ rotate: 0, scale: 1.01 }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    style={{ rotate: -1.5 }}
                    className="relative overflow-hidden rounded-[32px] bg-paper-cream ring-1 ring-ink/10 shadow-[0_40px_90px_-32px_rgba(20,18,16,0.45),0_12px_32px_-12px_rgba(20,18,16,0.2)]"
                  >
                    <img
                      src="/images/guide-opening-hero.png"
                      alt="paper joy package, newspaper, and book set on a warm editorial surface"
                      className="block w-full h-auto object-cover object-[70%_center]"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Inner highlight for glassy, product-card feel */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/30"
                    />
                  </motion.div>
                  {/* Decorative corner brackets — tech / editorial hybrid */}
                  <div
                    aria-hidden
                    className="absolute -top-3 -left-3 size-14 rounded-tl-2xl border-t-2 border-l-2 border-accent/50"
                  />
                  <div
                    aria-hidden
                    className="absolute -bottom-3 -right-3 size-14 rounded-br-2xl border-b-2 border-r-2 border-accent/50"
                  />
                </motion.div>
              </div>

              <div className="mb-10 grid grid-cols-1 gap-5 md:mb-12 md:grid-cols-3 md:gap-6 lg:mb-14">
                {[
                  {
                    title: 'Western Frontier',
                    tagline: 'Dust, justice, and the long trail',
                    blurb: 'Lawmen, homesteads, and stakes that rise with every chapter.',
                    to: '/editions',
                    barClass: 'mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-accent/50 to-accent/10',
                  },
                  {
                    title: 'Faith editions',
                    tagline: 'Hope that sits well at the table',
                    blurb: 'Gentle, rich serials for kitchens, grandparents, and quiet evenings.',
                    to: '/faith/editions',
                    barClass: 'mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-ink/25 to-accent/25',
                  },
                  {
                    title: 'Mystery & noir',
                    tagline: 'Clues in every envelope',
                    blurb: 'Evidence, fog, and betrayal—serialized like a case file in the mail.',
                    to: '/editions',
                    barClass: 'mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-ink/40 to-transparent',
                  },
                ].map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={c.to}
                      className="group flex h-full flex-col rounded-[32px] border border-ink/8 bg-paper/75 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/12 hover:shadow-[0_22px_55px_-22px_rgba(20,18,16,0.18)]"
                    >
                      <div className={c.barClass} />
                      <h3 className="mb-2 font-serif text-2xl italic text-ink transition-colors group-hover:text-accent">
                        {c.title}
                      </h3>
                      <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted/80">
                        {c.tagline}
                      </p>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-muted">{c.blurb}</p>
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-accent">
                        Step inside
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Designed by family — The Creators */}
        <div className="bg-gradient-to-br from-[#2d2823] via-[#292420] to-[#2a241f] text-paper-cream rounded-[40px] p-10 md:p-14 overflow-hidden shadow-[0_12px_40px_-8px_rgba(20,18,16,0.2)] ring-1 ring-[#3d3730]/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-paper/50 mb-3">
                Designed by Family for Family
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-accent mb-5">The Creators</p>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-5">
                We don't just print stories. We bring people together, one memory at a time.
              </h2>
              <p className="text-paper/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Each dispatch becomes a moment you can read together, pass around, and keep. No screens, just meaningful story time.
              </p>
              <Link
                to="/editions"
                className="inline-flex items-center gap-2 bg-paper text-ink px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:opacity-90 transition-opacity"
              >
                Start Your Story
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[3/4] max-h-[520px] mx-auto lg:max-h-none lg:aspect-[4/5] w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden ring-1 ring-paper/20 shadow-2xl">
                <img
                  src="/images/creators-family-photo.png"
                  alt="paper joy creators — father and son together outdoors"
                  className="w-full h-full object-cover object-[center_25%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
