import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { editionPlans } from '../data/editions';

export default function Editions() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pj-display text-7xl md:text-8xl lg:text-[10rem] mb-8"
          >
            Choose your <em>story.</em>
          </motion.h1>
          <p className="text-ink-muted max-w-xl mx-auto text-lg leading-relaxed">
            Cinematic worlds delivered by mail. Pick the genre that speaks to you and start your bi-monthly collection.
          </p>
        </section>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {editionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              viewport={{ once: true, margin: '-80px' }}
              className="h-full"
            >
              <Link
                to={`/editions/story/${plan.id}`}
                className="group block h-full rounded-[28px] bg-paper-cream p-6 pj-lift border border-ink/[0.05]"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                  <p className="pj-eyebrow text-ink/40">{plan.category}</p>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45 shadow-sm">
                    <ArrowUpRight size={15} />
                  </span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl italic text-ink">{plan.name}</h3>

                  <div className="mt-6 flex flex-1 items-center justify-center">
                    {plan.image && (
                      <div className="relative overflow-hidden rounded-2xl border border-ink/[0.05]">
                        <img
                          src={plan.image}
                          alt={plan.name}
                          className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                          loading="lazy"
                          decoding="async"
                        />
                        {plan.popular && (
                          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper shadow-lg">
                            Featured
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
