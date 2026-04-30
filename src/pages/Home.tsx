import { useRef, useState, useEffect, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import {
  Newspaper,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Gift,
  Sparkles,
  Star,
  BookOpen,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { editionPlans } from '../data/editions';
import RotatingBadge from '../components/RotatingBadge';

/* ─── Marquee data ─────────────────────────────────────── */
const marqueeItems = [
  'Western Frontier',
  'Murder Mystery',
  'War Chronicles',
  'Romance Sentinel',
  'Physical Delivery',
  'Bimonthly Chapters',
  'Keepsake Quality',
  'Free US Postage',
  'Gift Ready',
  'Cancel Anytime',
];

/* ─── Bento feature tiles ───────────────────────────────── */
// Layout (3-col):
//  [ Cancel Anytime (tall) ] [ Free Postage ] [ Gift Ready  ]
//  [         cont.         ] [ Keepsake     ] [ Twice/Month (tall) ]
//  [ Serialized (wide)     ] [    wide cont ] [     cont.   ]
const bentoFeatures: { icon: ReactNode; title: string; desc: string; area: string }[] = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Cancel Anytime',
    desc: 'No contracts. No commitments. Pause or cancel whenever you like.',
    area: 'col-start-1 col-span-1 row-start-1 row-span-2',
  },
  {
    icon: <Mail size={20} />,
    title: 'Free US Postage',
    desc: 'Every dispatch delivered on us — no hidden fees, ever.',
    area: 'col-start-2 col-span-1 row-start-1 row-span-1',
  },
  {
    icon: <Gift size={20} />,
    title: 'Gift Ready',
    desc: 'Beautifully packaged for family and friends right out of the envelope.',
    area: 'col-start-3 col-span-1 row-start-1 row-span-1',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Keepsake Quality',
    desc: 'Printed to read, share, frame, and save for generations.',
    area: 'col-start-2 col-span-1 row-start-2 row-span-1',
  },
  {
    icon: <Clock size={20} />,
    title: 'Twice a Month',
    desc: 'The story keeps moving — but never overwhelms your schedule.',
    area: 'col-start-3 col-span-1 row-start-2 row-span-2',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Serialized Stories',
    desc: 'Full-year arcs that reward every single delivery. Each chapter builds on the last.',
    area: 'col-start-1 col-span-2 row-start-3 row-span-1',
  },
];

/* ─── Pull-quote rotator data ───────────────────────────── */
const pullQuotes = [
  {
    quote: 'I bought it for my mom and now every delivery is the highlight of her month. She calls me the day it arrives.',
    name: 'Kelly M.',
    title: 'Gift Customer',
  },
  {
    quote: 'The storytelling feels like a time capsule. Beautiful, slow, and worth making space for.',
    name: 'Deborah S.',
    title: 'Annual Subscriber',
  },
  {
    quote: 'Finally something I look forward to in the mail. It gives me a reason to slow down and read.',
    name: 'Christy M.',
    title: 'paper joy Reader',
  },
];

/* ─── Marquee component ─────────────────────────────────── */
function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden py-4 border-y border-ink/8 bg-paper-cream/60">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-bold text-ink/40">
            <span className="w-1 h-1 rounded-full bg-accent/60 inline-block" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Pull-quote rotator component ──────────────────────── */
function QuoteRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % pullQuotes.length), 4500);
    return () => clearInterval(id);
  }, []);

  const q = pullQuotes[index];

  return (
    <section className="relative px-6 overflow-hidden bg-ink text-paper">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.055] [background-image:radial-gradient(rgb(42_36_31)_0.5px,transparent_0.6px)] [background-size:14px_14px]"
      />
      <div className="max-w-4xl mx-auto text-center relative z-10 py-28">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-paper/35 mb-12">Reader Reviews</p>

        {/* Fixed-height quote area so the section never resizes between slides */}
        <div className="relative min-h-[260px] md:min-h-[220px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex justify-center gap-1 mb-8 text-accent">
                {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-2xl md:text-4xl font-serif italic leading-snug text-paper/90 mb-8 max-w-3xl">
                &ldquo;{q.quote}&rdquo;
              </p>
              <div className="text-[11px] uppercase tracking-[0.3em] font-bold text-paper/35">
                {q.name} · {q.title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {pullQuotes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-paper w-4' : 'bg-paper/25 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale  = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);
  const heroY      = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const bgY        = useTransform(smoothProgress, [0, 1], [0, -200]);

  return (
    <div ref={containerRef}>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-paper via-paper/75 to-transparent pointer-events-none z-[1]" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center mt-4 md:mt-8">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="pj-display text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] mb-8 text-ink">
              Timeless <em>narratives</em>, <br />
              delivered as an <em>experience</em>.
            </h1>
            <p className="max-w-[34rem] text-lg md:text-xl text-ink/70 leading-relaxed font-sans font-medium mb-12">
              Experience the grand tradition of print. We deliver serialized mysteries, history, and romance as tactile dispatches you can keep forever.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-5">
              <Link
                to="/editions"
                className="pj-cta bg-ink text-paper px-8 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-ink/20 inline-flex items-center gap-2 whitespace-nowrap"
              >
                Start Your paper joy
                <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/gifting"
                className="pj-cta border border-ink/20 bg-transparent px-8 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap text-ink inline-flex items-center gap-2 hover:border-ink"
              >
                Gift a Story
                <Gift size={14} />
              </Link>
            </div>
            {/* Micro-trust line */}
            <p className="text-[9px] text-ink/40 uppercase tracking-[0.25em] font-bold mt-2">
              Cancel anytime • Free US postage • No commitment
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 w-full flex justify-center lg:justify-end lg:-mr-24 xl:-mr-40 pointer-events-none">
            <div className="relative">
              <img 
                src="/images/hero-papers.png" 
                alt="Paper joy collection of printed editions in a box" 
                className="w-full max-w-2xl lg:max-w-[120%] xl:max-w-[130%] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.15)] scale-110 lg:scale-115 origin-right"
              />
              
              {/* Floating sticker badge */}
              <div
                className="pj-float absolute -right-2 top-4 hidden text-ink md:block lg:-right-8 lg:top-8 pointer-events-auto"
                style={{ ['--pj-rot' as string]: '-6deg' }}
              >
                <RotatingBadge
                  text=" STORIES • NEWS • COMMUNITY • PAPER JOY • GOOD NEWS • "
                  size={160}
                  fontSize={11}
                  letterSpacing={3}
                >
                  <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-paper-deep text-ink shadow-sm">
                    <Mail size={26} />
                  </div>
                </RotatingBadge>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-20"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-ink">Scroll to Unfold</span>
          <ChevronDown size={14} className="text-ink" />
        </motion.div>

        <motion.div
          style={{ y: bgY }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] aspect-[21/9] pointer-events-none select-none opacity-35 blur-3xl rounded-full bg-gradient-to-r from-[#c4a574]/20 via-transparent to-[#8b6f47]/15"
          aria-hidden
        />
      </section>

      {/* ── Marquee ──────────────────────────────────────── */}
      <Marquee />

      {/* ── Bento feature grid ───────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="pj-eyebrow text-accent mb-3">Why paper joy</p>
            <h2 className="pj-display text-5xl md:text-6xl">
              It&apos;s &ldquo;wait for the <em>mail</em>&rdquo; better.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4 auto-rows-[160px]">
            {bentoFeatures.map((f) => (
              <div
                key={f.title}
                className={`${f.area} pj-lift rounded-3xl border border-ink/10 bg-paper-cream/80 p-7 flex flex-col justify-between shadow-sm hover:border-ink/20 transition-all`}
              >
                <div className="w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] mb-1.5">{f.title}</p>
                  <p className="text-[12px] text-ink-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cinematic hero CTA ───────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden relative min-h-[560px] md:min-h-[620px] shadow-[0_24px_60px_-20px_rgba(20,18,16,0.35)] ring-1 ring-ink/20">
          {/* Full-bleed photograph */}
          <img
            src="/images/start-experience.png"
            alt="paper joy package resting on a wool blanket with mountains at dusk"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />

          {/* Readability overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(20,18,16,0.78) 0%, rgba(20,18,16,0.62) 30%, rgba(20,18,16,0.32) 55%, rgba(20,18,16,0.1) 78%, rgba(20,18,16,0) 100%)',
            }}
          />
          {/* Top + bottom feather */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-ink/35 to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-ink/45 to-transparent"
          />

          {/* Content — left column */}
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col items-start justify-center min-h-[560px] md:min-h-[620px] max-w-xl text-paper-cream">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-8 text-accent">
              <BookOpen size={16} strokeWidth={1.75} aria-hidden />
              <span className="pj-eyebrow">
                Something worth looking forward to
              </span>
            </div>

            {/* Headline */}
            <h2 className="pj-display text-5xl md:text-7xl mb-10">
              Start the <br className="hidden md:block" />
              <em>experience</em>
            </h2>

            {/* CTA button */}
            <Link
              to="/editions"
              className="pj-cta inline-flex items-center gap-3 bg-paper text-ink px-10 py-5 rounded-full text-sm uppercase tracking-[0.22em] font-bold hover:gap-4 shadow-xl shadow-ink/30"
            >
              Explore Editions
              <ArrowRight size={15} aria-hidden />
            </Link>

            {/* Trust line */}
            <p className="mt-7 text-[11px] text-paper-cream/70 uppercase tracking-[0.25em] font-semibold">
              Cancel anytime · Free US postage · No commitment
            </p>
          </div>
        </div>
      </section>

      {/* ── Editions grid ────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto rounded-[40px] border border-ink/12 bg-paper/88 backdrop-blur-sm p-8 md:p-12 shadow-[0_8px_36px_-12px_rgba(20,18,16,0.12)] ring-1 ring-ink/[0.04]">
          <div className="text-center mb-12">
            <p className="pj-eyebrow text-accent mb-4">Our Stories</p>
            <h2 className="pj-display text-5xl md:text-7xl">Choose Your <em>narrative</em></h2>
            <p className="mt-5 text-ink-muted max-w-2xl mx-auto">
              Four serialized worlds. Each one a full year of dispatches, keepsakes, and shared storytelling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editionPlans.map((plan) => (
              <Link key={plan.id} to={`/editions/story/${plan.id}`} className="block group">
                <div className="pj-lift relative rounded-3xl border border-ink/12 bg-paper-cream/90 p-6 flex flex-col h-full shadow-sm hover:border-accent/50 transition-all duration-300">
                  <div className="aspect-[4/3] bg-ink/5 rounded-2xl mb-5 overflow-hidden flex items-center justify-center">
                    {plan.image ? (
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <Newspaper size={42} className="text-ink/30 transition-transform duration-500 group-hover:scale-110" />
                    )}
                  </div>
                  <p className="pj-eyebrow text-accent mb-2">{plan.category}</p>
                  <h3 className="text-2xl font-serif italic mb-3">{plan.name}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed flex-grow">{plan.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-ink group-hover:text-accent group-hover:gap-3 transition-all">
                    View Story
                    <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/editions"
              className="pj-cta inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:gap-3 transition-all"
            >
              Explore All Editions
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pull-quote rotator ───────────────────────────── */}
      <QuoteRotator />

      {/* ── Creators split ───────────────────────────────── */}
      <section className="px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-[40px] border border-ink/12 bg-paper/95 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:p-14 items-center shadow-[0_8px_36px_-12px_rgba(20,18,16,0.12)] ring-1 ring-ink/[0.04]">
          <div>
            <p className="pj-eyebrow text-accent mb-4">Meet the Creators</p>
            <h2 className="pj-display text-4xl md:text-5xl">
              A small <em>family</em> team making something they <em>love</em>.
            </h2>
            <p className="text-ink-muted leading-relaxed mb-7 max-w-xl">
              paper joy started at our kitchen table. Every edition is shaped by hand with one hope: that when you open your envelope, the day feels a little warmer.
            </p>
            <Link
              to="/creators"
              className="pj-cta inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:gap-3 transition-all"
            >
              Meet the Creators
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="aspect-[4/3] bg-ink/5 rounded-3xl overflow-hidden">
            <img
              src="/images/creators-home.png"
              alt="Dan and Jared Pontius, the paper joy creators"
              className="w-full h-full object-cover object-[center_69%]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
