import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Mail, Newspaper, PenTool, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const transitionKey = location.pathname.startsWith('/editions/story/')
    ? '/editions/story'
    : location.pathname.startsWith('/faith/editions/story/')
      ? '/faith/editions/story'
      : location.pathname;
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isDiscountClaimed, setIsDiscountClaimed] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFocused, setNewsletterFocused] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [newsletterError, setNewsletterError] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function captureEmail(normalizedEmail: string): Promise<{ ok: boolean; message: string }> {
    try {
      const response = await fetch('/api/email-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      const result = await response.json();
      const ok = response.ok && result.ok === true;
      return {
        ok,
        message:
          typeof result.message === 'string'
            ? result.message
            : ok
              ? 'Thank you for subscribing.'
              : 'Unable to submit your email. Please try again.',
      };
    } catch {
      return { ok: false, message: 'Email service is offline. Please try again shortly.' };
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeModal = () => {
    setIsEmailModalOpen(false);
    setEmail('');
    setIsDiscountClaimed(false);
    setStatusMessage('');
    setHasError(false);
    setIsSubmitting(false);
  };

  const openModal = () => {
    setIsEmailModalOpen(true);
    setIsDiscountClaimed(false);
    setStatusMessage('');
    setHasError(false);
  };

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!emailRegex.test(normalizedEmail)) {
      setHasError(true);
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('');
    setHasError(false);

    const { ok, message } = await captureEmail(normalizedEmail);
    if (!ok) {
      setHasError(true);
      setStatusMessage(message);
    } else {
      setHasError(false);
      setIsDiscountClaimed(true);
      setStatusMessage(message);
      setEmail('');
    }
    setIsSubmitting(false);
  };

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedEmail = newsletterEmail.trim().toLowerCase();

    if (!emailRegex.test(normalizedEmail)) {
      setNewsletterError(true);
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterSubmitting(true);
    setNewsletterMessage('');
    setNewsletterError(false);
    const { ok, message } = await captureEmail(normalizedEmail);
    setNewsletterError(!ok);
    setNewsletterMessage(message);
    if (ok) {
      setNewsletterEmail('');
    }
    setNewsletterSubmitting(false);
  };

  return (
    <div className="relative bg-transparent text-ink font-sans selection:bg-ink selection:text-paper overflow-x-clip min-h-screen">
      <div className="newsprint-site-bg" aria-hidden />
      {/* Navigation */}
      <div className="absolute top-5 left-0 right-0 z-50 flex items-center justify-between px-8 pointer-events-none">

        {/* Logo — outside the container, left */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="pointer-events-auto text-4xl font-serif tracking-tight text-ink hover:opacity-70 transition-opacity shrink-0"
        >
          paper joy
        </Link>

        {/* Floating pill — centred between logo and CTA */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-paper/75 backdrop-blur-xl border border-ink/[0.09] rounded-2xl px-3 py-2.5 shadow-[0_4px_24px_-6px_rgba(20,18,16,0.18),0_1px_2px_rgba(20,18,16,0.06)] ring-1 ring-white/30 absolute left-1/2 -translate-x-1/2">
          {[
            { to: '/guide',    label: 'The Guide' },
            { to: '/editions', label: 'Editions', matchPrefix: '/editions/story/' },
            { to: '/gifting',  label: 'Gifting' },
            { to: '/faith',    label: 'Faith' },
            { to: '/process',  label: 'Our Process' },
          ].map(({ to, label, matchPrefix }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => {
                const active = isActive || (matchPrefix ? location.pathname.startsWith(matchPrefix) : false);
                return `px-4 py-2 rounded-xl text-[13px] uppercase tracking-[0.1em] font-semibold transition-all duration-150 ${
                  active
                    ? 'text-ink bg-ink/[0.08]'
                    : 'text-ink/50 hover:text-ink hover:bg-ink/[0.05]'
                }`;
              }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Creators CTA — outside the container, right */}
        <NavLink
          to="/creators"
          className={({ isActive }) =>
            `pointer-events-auto shrink-0 px-5 py-2 rounded-xl text-[13px] uppercase tracking-[0.1em] font-bold transition-all duration-150 border ${
              isActive
                ? 'bg-ink text-paper border-ink'
                : 'bg-transparent text-ink border-ink/40 hover:border-ink'
            }`
          }
        >
          The Creators
        </NavLink>
      </div>


      <motion.main
        key={transitionKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {children}
      </motion.main>

      <button
        type="button"
        onClick={openModal}
        className="fixed bottom-8 right-6 md:right-10 z-40 bg-paper text-ink px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-bold shadow-xl border border-ink/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:bg-ink hover:text-paper"
      >
        Claim Offer
      </button>

      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/55 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full max-w-3xl bg-paper-cream text-ink rounded-sm border border-ink/10 p-10 md:p-16 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-end mb-2">
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={closeModal}
                  className="p-2 rounded-full border border-ink/20 hover:bg-ink hover:text-paper transition-colors shrink-0"
                >
                  <X size={16} />
                </button>
              </div>

              <h3 className="text-5xl md:text-6xl font-serif italic leading-[0.95] text-center mb-10">
                You've Got a
                <br />
                Mystery Discount!
              </h3>

              <AnimatePresence mode="wait">
                {isDiscountClaimed ? (
                  <motion.div
                    key="claimed"
                    initial={{ opacity: 0, y: 16, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="max-w-sm mx-auto text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="mx-auto mb-4 w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center"
                    >
                      <CheckCircle2 size={30} />
                    </motion.div>
                    <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-ink/55 mb-2">
                      Offer Activated
                    </p>
                    <p className="font-serif italic text-3xl leading-tight mb-3">
                      Discount Claimed!
                    </p>
                    <p className="text-sm text-ink/70">
                      Check your inbox. Your paper joy offer is on its way.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="max-w-sm mx-auto"
                  >
                    <form onSubmit={handleEmailSubmit} className="space-y-3 text-center">
                      <label className="block">
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          onFocus={() => setIsEmailFocused(true)}
                          onBlur={() => setIsEmailFocused(false)}
                          placeholder={!isEmailFocused && email.length === 0 ? 'Your email address' : ''}
                          className="w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 text-sm text-center outline-none focus:border-ink"
                          required
                        />
                      </label>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-paper border border-ink/30 text-ink py-3 rounded-sm text-xs uppercase tracking-[0.25em] font-bold transition-colors duration-300 ease-out hover:bg-ink hover:text-paper hover:border-ink disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Claim Discount'}
                      </button>
                    </form>

                    {statusMessage && (
                      <p className={`mt-4 text-sm text-center ${hasError ? 'text-red-700' : 'text-ink/70'}`}>
                        {statusMessage}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 bg-paper/90 backdrop-blur-sm py-20 px-8 border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-start">
            <div className="lg:col-span-4 text-4xl font-serif leading-none italic">
              paper joy
            </div>
            <div className="lg:col-span-4 w-full max-w-md">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 block mb-4">
                Newsletter Signup
              </span>
              <p className="text-sm text-ink-muted mb-4 leading-relaxed">
                Sign up for exclusive offers, original stories, events and more.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <label className="sr-only" htmlFor="footer-newsletter-email">
                  Email address
                </label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                  onFocus={() => setNewsletterFocused(true)}
                  onBlur={() => setNewsletterFocused(false)}
                  placeholder={
                    !newsletterFocused && newsletterEmail.length === 0 ? 'Your email address' : ''
                  }
                  className="w-full rounded-sm border border-ink/20 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                  autoComplete="email"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="w-full bg-ink text-paper py-3 rounded-sm text-xs uppercase tracking-[0.25em] font-bold transition-colors duration-300 ease-out hover:bg-ink/90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {newsletterSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
              {newsletterMessage && (
                <p className={`mt-3 text-sm ${newsletterError ? 'text-red-700' : 'text-ink/70'}`}>
                  {newsletterMessage}
                </p>
              )}
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-12 lg:justify-end">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-left">Explore</span>
                <Link to="/process" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">Philosophy</Link>
                <Link to="/creators" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">The Creators</Link>
                <Link to="/guide" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">The Guide</Link>
                <Link to="/faith" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">Faith</Link>
                <Link to="/editions" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">Pricing</Link>
                <Link to="/gifting" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">Gifting</Link>
                <Link to="/faq" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">FAQ</Link>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-left">Legal</span>
                <a href="#" className="text-sm font-semibold hover:opacity-60 transition-opacity">Privacy</a>
                <a href="#" className="text-sm font-semibold hover:opacity-60 transition-opacity">Terms</a>
                <a href="#" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">Archival Policy</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-left">Support</span>
                <a href="mailto:thepaperjoyco@gmail.com" className="text-sm font-semibold hover:opacity-60 transition-opacity text-left">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-12 border-t border-ink/5 gap-6">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 text-center md:text-left">
              © 2026 paper joy Publishing. Printed on recycled paper stock.
            </p>
            <div className="flex items-center justify-center gap-6 text-ink/30">
              <button
                type="button"
                onClick={openModal}
                aria-label="Open claim offer"
                className="p-2 -m-2 rounded-full hover:text-ink/70 hover:bg-ink/[0.06] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/25"
              >
                <Mail size={16} />
              </button>
              <Newspaper size={16} className="pointer-events-none" aria-hidden />
              <PenTool size={16} className="pointer-events-none" aria-hidden />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
