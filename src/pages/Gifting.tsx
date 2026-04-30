import { motion } from 'motion/react';
import { Gift, ArrowUpRight, HeartHandshake, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Gifting() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="relative mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="pj-display text-center text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] mb-8"
          >
            A gift, <em>mailed</em> <br className="hidden md:block" /> twice a month.
          </motion.h1>
          <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-ink-muted">
            Most gifts arrive once. paper joy arrives twenty-four times — a story they unwrap, read, and look forward to all year.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/editions"
              className="pj-cta inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold shadow-xl shadow-ink/20"
            >
              Choose a Gift Edition
              <ArrowUpRight size={15} />
            </Link>
            <Link
              to="/faith/editions"
              className="pj-cta inline-flex items-center gap-2 border border-ink/20 bg-transparent px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold text-ink hover:border-ink"
            >
              Faith Editions
            </Link>
          </div>

          <div className="relative mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] shadow-2xl border border-ink/5"
            >
              <img
                src="/images/gifting-package.png"
                alt="paper joy gift package"
                className="aspect-[16/9] w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: <Gift className="text-accent" />,
              title: "Pick a Story",
              desc: "Choose the edition that fits their personality — from romance to frontier grit.",
            },
            {
              icon: <HeartHandshake className="text-accent" />,
              title: "Family Moments",
              desc: "Faith editions are perfect for building shared reading traditions at home.",
            },
            {
              icon: <Sparkles className="text-accent" />,
              title: "Gift of Slow",
              desc: "A reason to step away from screens and enjoy something real and tactile.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="pj-card pj-lift p-8 flex flex-col items-center text-center border border-ink/5"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <p className="pj-display text-4xl text-accent mb-3">{`0${i + 1}`}</p>
              <h3 className="font-serif text-2xl italic mb-3">{item.title}</h3>
              <p className="text-ink-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <section className="bg-ink text-paper rounded-[40px] p-10 md:p-16 overflow-hidden relative">
          <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -mr-64 -mt-64" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="pj-eyebrow text-accent mb-4">The Subscription that stays</p>
              <h2 className="pj-display text-5xl md:text-6xl mb-6">A gift that <em>keeps</em> being a gift.</h2>
              <p className="text-paper/70 text-lg leading-relaxed mb-8">
                Most subscriptions feel transactional. paper joy feels personal — because it shows up in the real world, with stories made to be shared aloud and saved on a shelf.
              </p>
              <Link
                to="/editions"
                className="pj-cta inline-flex items-center gap-2 bg-paper text-ink px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold shadow-xl"
              >
                Choose the Gift Edition
                <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="pj-lift overflow-hidden rounded-[28px] shadow-2xl">
              <img
                src="/images/start-experience.png"
                alt="paper joy gift on a wool blanket"
                className="h-full w-full object-cover aspect-[5/4]"
              />
            </div>
          </div>
        </section>

        <div className="mt-32 text-center">
          <h2 className="pj-display text-4xl md:text-6xl mb-6">Ready to make mail day <em>meaningful</em>?</h2>
          <div className="flex justify-center">
            <Link
              to="/editions"
              className="pj-cta inline-flex items-center gap-2 bg-ink text-paper px-10 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-bold shadow-2xl"
            >
              Start a Gift
              <Gift size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
