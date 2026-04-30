import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { editionPlans } from '../data/editions';

export default function EditionStory() {
  const { storyId } = useParams();
  const selected = editionPlans.find((plan) => plan.id === storyId);

  if (!selected) {
    return <Navigate to="/editions" replace />;
  }

  const others = editionPlans.filter((plan) => plan.id !== selected.id);

  return (
    <div className="px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/editions"
          className="pj-link inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} />
          All editions
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LEFT — image + meta */}
          <motion.div
            key={selected.id + "-img"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="rounded-[36px]">
              <img
                src={
                  selected.id === 'romance' ? "/images/romance-collage.png" :
                  selected.id === 'murder-mystery' ? "/images/mystery-collage.png" :
                  selected.id === 'western' ? "/images/western-collage.png" :
                  "/images/war-collage.png"
                }
                alt={selected.name}
                className="aspect-[5/4] w-full object-contain object-left rounded-[36px]"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>

          {/* RIGHT — copy + price + CTA */}
          <motion.section
            key={selected.id + "-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <p className="pj-eyebrow text-accent">{selected.category}</p>
            <h1 className="pj-display mt-4 text-5xl md:text-6xl lg:text-7xl">
              {selected.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              {selected.desc}
            </p>

            <div className="mt-10 flex items-baseline gap-2">
              <span className="font-serif text-7xl">{selected.price}</span>
              <span className="text-lg text-ink/60">{selected.priceSub}</span>
            </div>
            <p className="mt-1 text-sm text-ink-muted">{selected.len} · 24 chapters in total</p>

            <ul className="mt-10 grid gap-3">
              {selected.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-base text-ink/80">
                  <Check size={17} className="mt-1 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/editions"
                className="pj-cta inline-flex items-center justify-center gap-2 rounded-full bg-ink px-12 py-4 text-sm font-medium text-paper hover:bg-ink/90 shadow-lg"
              >
                Choose this edition
                <ArrowUpRight size={15} />
              </Link>
            </div>

            <p className="mt-6 text-xs text-ink/40">Free US postage · Cancel anytime · Mailed twice a month</p>
          </motion.section>
        </div>

        {/* OTHER EDITIONS */}
        <div className="mt-32">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="pj-display text-4xl md:text-5xl">
              Other <em>editions</em>
            </h2>
            <Link to="/editions" className="pj-link text-sm font-medium text-ink/60 hover:text-ink">
              See all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((plan) => (
              <Link key={plan.id} to={`/editions/story/${plan.id}`} className="group block rounded-[28px] bg-paper-cream p-7 pj-lift border border-ink/[0.05]">
                <div className="flex items-start justify-between">
                  <p className="pj-eyebrow text-ink/40">{plan.category}</p>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45 shadow-sm">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-3xl italic text-ink mb-6">{plan.name}</h3>

                <div className="overflow-hidden rounded-2xl border border-ink/[0.05]">
                  {plan.image && (
                    <div className="aspect-[5/4] overflow-hidden">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="h-full w-full object-cover object-left transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
