import { useState } from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const faqItems = [
  {
    question: 'How do I contact support?',
    answer:
      'You can reach us anytime at thepaperjoyco@gmail.com. Whether you have a question about your subscription, a missing delivery, or just want to share feedback, we are here to help.',
  },
  {
    question: 'How often do dispatches arrive?',
    answer:
      'Stories ship twice a month. This gives you time to read and share without your mailbox feeling cluttered, making each arrival something to look forward to.',
  },
  {
    question: 'What actually comes inside each delivery?',
    answer:
      'Each delivery includes serialized chapters printed on classic newspaper, plus atmospheric extras like puzzles, notes, maps, or keepsakes that reward close reading.',
  },
  {
    question: 'How does gifting work?',
    answer:
      'Choose a story and a start date. We can keep it a surprise or add a note from you on the packaging. The first delivery is designed to land like an event.',
  },
  {
    question: 'What if a delivery is missing or damaged?',
    answer:
      'If your mail is late or damaged, email us at thepaperjoyco@gmail.com with your name, address, and edition. We will investigate and gladly replace it when reasonable. If you move, please update us so we don\'t ship to your old porch.',
  },
  {
    question: 'paper joy vs Faith editions—who are they for?',
    answer:
      'paper joy editions (romance, mystery, war, western) are aimed at adults wanting cinematic storytelling. Faith editions are for families wanting Christ-centered stories to read together.',
  },
  {
    question: 'Can I cancel or switch stories?',
    answer:
      'Yes. You can pause or cancel anytime without a contract. If you want to switch stories or join mid-season, email us at thepaperjoyco@gmail.com and we will help you find the best starting point.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'We want you to be confident trying our product. If something arrives significantly damaged or not as described, please email thepaperjoyco@gmail.com and we will make it right.',
  },
  {
    question: 'How do you handle my email and privacy?',
    answer:
      'We use your email only for occasional updates on new editions and offers. We never sell your email, and you can unsubscribe at any time.',
  },
];

const accordionTransition = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 pb-24 px-6">
      <section className="max-w-5xl mx-auto text-center mb-14">
        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">FAQ</p>
        <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.95] mb-5">
          Everything about the dispatch.
        </h1>
        <p className="text-ink-muted max-w-2xl mx-auto leading-relaxed">
          A short list of answers, a little deeper—so you can decide with confidence.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className={`rounded-3xl px-5 transition-colors md:px-7 ${
                isOpen ? 'bg-paper' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-2xl italic md:text-3xl">{item.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? 'bg-ink text-paper' : 'bg-paper-deep/40 text-ink'
                  }`}
                >
                  <Plus size={16} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={accordionTransition}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-base leading-relaxed text-ink-muted space-y-4">
                      {item.answer.split(/\n\n+/).map((block, blockIndex) => (
                        <p key={blockIndex}>{block}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </section>

      <section className="max-w-5xl mx-auto mt-24">
        <div className="overflow-hidden rounded-[40px] bg-ink p-10 text-paper md:p-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="pj-eyebrow text-accent">Ready when you are</p>
              <h2 className="pj-display mt-4 text-4xl md:text-6xl">
                Pick a <em>story</em>, start the mail.
              </h2>
            </div>
            <Link
              to="/editions"
              className="pj-cta inline-flex items-center gap-2 rounded-full bg-paper text-ink px-8 py-4 text-sm font-medium hover:bg-paper/90"
            >
              Subscribe — $13/mo
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
