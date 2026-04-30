import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { useState, useRef } from 'react';

const processSteps = [
  {
    step: 'Step 01',
    title: 'Choose Your Edition',
    description:
      'Select a story and era that speaks to you. Each edition is a fully serialized newspaper experience, crafted to be read, shared, and remembered.',
    image: '/images/newsstand.png',
  },
  {
    step: 'Step 02',
    title: 'Receive the First Dispatch',
    description:
      'Your first issue ships immediately — printed in classic newspaper style and filled with stories, puzzles, and keepsakes that pull you into another time. Once it\'s on its way, every subsequent chapter follows by mail on a regular bimonthly schedule.',
    image: '/images/receive-first-dispatch-mailbox.png',
  },
  {
    step: 'Step 03',
    title: 'Let the Story Unfold',
    description:
      'New issues arrive twice a month, continuing the story and building a collection, creating a ritual worth looking forward to away from screens.',
    image: '/images/first-dispatch-reader.png',
  },
];

const envelopeContents = [
  'Multi-page letters',
  'News clippings',
  'Telegrams',
  'Posters and maps',
  'Recipes and craft cards',
  'Historical documents',
  'Magazine extras',
  'Collector surprises',
];

const experienceBenefits = [
  '24 packed letters over 12 months',
  'Free US postage',
  'Free resends for missing mail',
  'Responsive customer support',
  'Gift-ready presentation options',
  'Collectors archive quality inserts',
];

const customerReviews = [
  {
    quote:
      'This became the gift my mother looked forward to every month. The storytelling and physical details made it feel deeply personal.',
    name: 'Kelly M.',
    title: 'Gift Customer',
  },
  {
    quote:
      'The mix of newspaper textures, artifacts, and writing quality made every envelope feel like opening a small time capsule.',
    name: 'Deborah S.',
    title: 'Annual Subscriber',
  },
  {
    quote:
      'It gave me a monthly moment to slow down, read, and reconnect. Beautifully produced and consistently high quality.',
    name: 'Christy M.',
    title: 'paper joy Reader',
  },
];

function EnvelopeJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v >= 0.66 ? 2 : v >= 0.33 ? 1 : 0;
    setActiveStep((current) => (current === next ? current : next));
  });

  return (
    <div ref={journeyRef} className="relative -mx-6 mb-12 h-[260vh]">
      <div className="sticky top-0 h-screen flex items-center px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-stretch bg-paper-cream/30 rounded-[40px] border border-ink/10 p-8 md:p-10 shadow-sm max-w-7xl mx-auto w-full">
          <div className="flex flex-col justify-center order-2 lg:order-1 relative">
            <div className="relative min-h-[260px] md:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-accent mb-2">
                    {processSteps[activeStep].step}
                  </p>
                  <h4 className="text-4xl md:text-5xl font-serif italic mb-2 text-ink">
                    {processSteps[activeStep].title}
                  </h4>
                  <p className="text-lg leading-relaxed text-ink-muted max-w-md">
                    {processSteps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-6 md:mt-8">
              {processSteps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === i ? 'w-8 bg-ink' : 'w-2 bg-ink/15'}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full h-full min-h-[320px] lg:min-h-[520px] relative order-1 lg:order-2 flex items-center justify-center pointer-events-none">
            <img
              src="/images/process-hero-transparent.png"
              alt="paper joy newspaper edition"
              className="w-full max-w-lg lg:max-w-[120%] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] scale-110 lg:scale-125 origin-center"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurProcess() {
  return (
    <div className="pt-32 pb-20">
      <section id="how" className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="pb-6 mb-8 text-center">
            <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold mb-4 text-accent">How It Works</h2>
            <div className="flex justify-center items-end pt-2">
              <h3 className="text-6xl md:text-8xl font-serif italic tracking-tighter text-ink">
                The Envelope's Journey
              </h3>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-ink-muted font-bold">
              Keepsake stories delivered by mail
            </p>
          </div>

          <EnvelopeJourney />

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-ink text-paper rounded-2xl p-10 h-full"
              >
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 opacity-60">What's Inside</h4>
                <h5 className="text-4xl font-serif italic mb-8">Every Envelope Includes</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {envelopeContents.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 text-accent" />
                      <span className="text-paper/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-ink/15 rounded-2xl p-8 bg-paper h-full"
              >
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-ink/50">Why Readers Stay</h4>
                <ul className="space-y-4">
                  {experienceBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-ink/85">
                      <Check size={16} className="mt-0.5 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-ink/15 rounded-2xl p-8 bg-paper"
            >
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-ink/50">Creator's Note</h4>
              <p className="text-lg font-serif italic leading-relaxed text-ink/90 mb-6">
                Want to know what we think? Our favorite is The Frontier Post. It is the one we still talk about at the family table.
              </p>
              <Link
                to="/editions"
                className="inline-flex items-center justify-center bg-ink text-paper px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:opacity-90 transition-opacity"
              >
                Start Your Subscription
              </Link>
            </motion.div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-10">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-ink/50 mb-3">Reader Reviews</h4>
              <h5 className="text-5xl font-serif italic">5-Star Moments in the Mail</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customerReviews.map((review) => (
                <motion.blockquote
                  key={review.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-ink/10 p-7 bg-paper"
                >
                  <div className="flex items-center gap-1 mb-5 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed font-serif italic text-ink/85 mb-6">"{review.quote}"</p>
                  <div className="text-[11px] uppercase tracking-[0.25em] font-bold text-ink/50">
                    {review.name} • {review.title}
                  </div>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
