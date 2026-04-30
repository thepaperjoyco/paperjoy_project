import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, HeartHandshake, Sparkles, Star } from 'lucide-react';

export default function Faith() {
  return (
    <div className="pt-40 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="relative mb-24 overflow-hidden rounded-[40px] border border-ink/10 bg-paper">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl"
          />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex mb-6">
                <span className="pj-pill">
                  <span className="pj-pill-dot" />
                  Faith Stories
                </span>
              </div>
              <h1 className="pj-display text-5xl md:text-7xl mb-6">
                Stories of <em>faith</em> <br /> Kids love at home.
              </h1>
              <p className="text-ink-muted leading-relaxed text-lg max-w-xl mb-8">
                Parent-approved and kid-exciting. These adventures help children learn faith through characters, action, and meaningful family moments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/faith/editions"
                  className="pj-cta inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold shadow-xl"
                >
                  Start a Kid-Friendly Story
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  to="/faith/editions"
                  className="pj-cta inline-flex items-center gap-2 border border-ink/30 text-ink px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:border-accent hover:text-accent transition-colors"
                >
                  Browse Adventures
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="relative mx-auto w-full max-w-md"
            >
              <motion.div
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-ink/10 bg-paper"
              >
                <img
                  src="/images/faith-hero-poster.png"
                  alt="Good News Gospel newspaper print"
                  className="w-full h-auto"
                  decoding="async"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pj-card pj-lift p-8 md:p-10 flex flex-col border border-ink/5"
          >
            <div className="mb-6 aspect-[4/3] rounded-2xl overflow-hidden bg-ink/5">
              <img
                src="/images/faith-child-bible.png"
                alt="Child reading scripture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h2 className="text-4xl font-serif italic mb-5">From Parent to Child</h2>
            <p className="text-ink-muted leading-relaxed min-h-[72px]">
              Fun faith adventures that keep kids engaged and give parents easy moments to teach and connect.
            </p>
            <div className="mt-auto pt-6 flex justify-center">
              <Link
                to="/faith/editions"
                className="pj-cta inline-flex w-fit items-center justify-center gap-2 px-7 py-3 rounded-full border border-ink/30 text-xs uppercase tracking-[0.22em] font-bold text-ink hover:border-accent hover:text-accent"
              >
                Shop Kids Stories
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="pj-card pj-lift p-8 md:p-10 flex flex-col border border-ink/5"
          >
            <div className="mb-6 aspect-[4/3] rounded-2xl overflow-hidden bg-ink/5">
              <img
                src="/images/faith-grandparent-new.png"
                alt="Grandparent and grandchild reading paper joy together"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <h2 className="text-4xl font-serif italic mb-5">From Grandparent to Grandchild</h2>
            <p className="text-ink-muted leading-relaxed min-h-[72px]">
              A joyful way to pass down faith and values with stories children actually look forward to.
            </p>
            <div className="mt-auto pt-6 flex justify-center">
              <Link
                to="/faith/editions"
                className="pj-cta inline-flex w-fit items-center justify-center gap-2 px-7 py-3 rounded-full border border-ink/30 text-xs uppercase tracking-[0.22em] font-bold text-ink hover:border-accent hover:text-accent"
              >
                Choose a Kids Edition
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>

        <section className="bg-ink text-paper rounded-[40px] overflow-hidden relative min-h-[420px] pj-lift">
          <img
            src="/images/faith-shepherd.png"
            alt="Christ as the Good Shepherd watching over his flock"
            className="absolute inset-0 w-full h-full object-cover object-[30%_top] opacity-40"
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #141210 0%, #141210 20%, transparent 100%)',
            }}
          />
          <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center max-w-xl">
            <div className="inline-flex items-center gap-3 mb-5 text-accent">
              <HeartHandshake size={18} />
              <span className="pj-eyebrow">Why This Matters to Us</span>
            </div>
            <h3 className="pj-display text-4xl md:text-5xl mb-6">
              Faith should be <em>fun</em> to learn, share, and live out.
            </h3>
            <p className="text-paper/70 text-lg leading-relaxed mb-8">
              Think adventure, wonder, and Christ-centered lessons children can understand. Our mission is to help families build faith habits kids enjoy and remember.
            </p>
            <Link
              to="/faith/editions"
              className="pj-cta inline-flex items-center gap-2 bg-paper text-ink px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold shadow-xl w-fit"
            >
              Explore Faith Editions
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
