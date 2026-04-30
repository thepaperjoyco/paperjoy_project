import { motion } from 'motion/react';
import { Heart, Users, Mail, Signature } from 'lucide-react';

export default function Creators() {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.4em] font-bold text-accent"
          >
            Our Own Father and Son Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif italic leading-none"
          >
            The Father & Son <br className="hidden md:block" /> Behind the Stories
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-px w-24 bg-ink/20 mx-auto mt-12"
          />
        </div>

        {/* Main Content: Narrative & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif italic">Designed by family, <br />for family.</h2>
              <p className="text-lg text-ink-muted leading-relaxed font-sans">
                paper joy isn't just a business for us; it’s our shared legacy. It started across a dining room table, discussing the weight of old letters and the stories that shaped our own story.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed font-sans">
                As a father and son team, we believe that the most profound connections aren't found in a digital feed, but in the physical artifacts we pass down. We wanted to create something that would give other families a reason to sit down, slow down, and connect through the magic of a bimonthly printed dispatch.
              </p>
            </div>
            
            <div className="pt-10 border-t border-ink/10 space-y-6">
              <p className="text-2xl font-serif italic text-ink leading-relaxed">
                "We don't just print stories; we help create the artifacts of a life well-lived."
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest">The Creators</div>
                  <div className="text-xs text-ink-muted italic">Dan and Jared Pontius</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-[64px] overflow-hidden shadow-2xl relative z-10"
            >
               <img 
                 src="/images/creators-family-photo.png" 
                 alt="paper joy creators — father and son together outdoors" 
                 className="w-full h-full object-cover object-[center_25%]"
                 decoding="async"
                 fetchPriority="high"
               />
            </motion.div>
            {/* Decorative frame elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-ink/5 rounded-[64px] -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700" />
          </div>
        </div>

        {/* Values Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-y border-ink/5">
           {[
             { 
               title: "Intergenerational Connect", 
               icon: <Users size={24} className="text-accent" />, 
               desc: "We build everything with the goal of fostering conversation between grandparents, parents, and children." 
             },
             { 
               title: "Print Integrity", 
               icon: <Mail size={24} className="text-accent" />, 
               desc: "We are obsessed with the tactile. Every cardstock and ink choice is vetted by us personally." 
             },
             { 
               title: "Heart-Centered Business", 
               icon: <Heart size={24} className="text-accent" />, 
               desc: "We treat every subscriber as if they were a member of our own family's extended archive." 
             },
           ].map((val, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="p-8 space-y-4 text-center"
             >
               <div className="flex justify-center">{val.icon}</div>
               <h3 className="text-2xl font-serif italic">{val.title}</h3>
               <p className="text-sm text-ink-muted leading-relaxed">{val.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Closing Quote */}
        <div className="mt-32 text-center pb-20">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-block p-12 bg-ink/5 rounded-[48px]"
           >
              <h3 className="text-3xl font-serif italic mb-6">"From our family to yours."</h3>
              <div className="flex justify-center gap-12 opacity-60">
                 <div className="w-24 h-px bg-ink my-auto" />
                 <Signature size={32} />
                 <div className="w-24 h-px bg-ink my-auto" />
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
