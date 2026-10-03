import { Suspense } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HeroScene } from '@/three/HeroScene';

function HeroChips() {
  return (
    <>
      {/* Price card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-2 top-8 z-10 md:left-6"
      >
        <div className="animate-float-slow rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift-lg backdrop-blur">
          <p className="text-[11px] font-medium uppercase tracking-widest text-muted">The Courtyard House</p>
          <p className="font-display text-xl font-semibold tracking-tight text-ink">GH₵2.85M</p>
          <div className="mt-2 flex items-center gap-3 text-[12px] text-ink-soft">
            <span className="flex items-center gap-1"><BedDouble className="size-3.5 text-brand" /> 4</span>
            <span className="flex items-center gap-1"><Bath className="size-3.5 text-brand" /> 3</span>
            <span className="flex items-center gap-1"><Ruler className="size-3.5 text-brand" /> 420m²</span>
          </div>
        </div>
      </motion.div>

      {/* Verified chip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 right-2 z-10 md:right-6"
      >
        <div className="flex items-center gap-2 rounded-full border border-line bg-white/90 py-2 pl-2 pr-4 shadow-lift backdrop-blur">
          <span className="grid size-7 place-items-center rounded-full bg-brand-soft text-brand">
            <BadgeCheck className="size-4" />
          </span>
          <span className="text-[13px] font-medium text-ink">Title verified · Inspected</span>
        </div>
      </motion.div>
    </>
  );
}

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint">
      {/* soft white vignette so the grid melts at the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,transparent,white_78%)]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <Badge variant="brand" className="mb-6">
              <MapPin className="size-3.5" /> Accra · Ghana — est. 2016
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[42px] leading-[1.04] font-semibold tracking-tight text-ink sm:text-[56px] lg:text-[64px]"
          >
            Find the space
            <br />
            that <span className="text-brand">finds you</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            Jehab Properties matches people to homes and commercial space they love —
            verified, fairly priced, and handled end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button variant="brand" size="lg" onClick={onBook}>
              Book a viewing <ArrowRight />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#listings">Browse listings</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand" />
                <span className="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              32 viewings booked this week
            </span>
            <span>Diaspora-friendly</span>
            <span>Escrow-backed payments</span>
          </motion.div>
        </div>

        {/* 3D maquette */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[620px]">
          <Suspense
            fallback={
              <div className="grid size-full place-items-center">
                <div className="size-10 animate-spin rounded-full border-2 border-line border-t-brand" />
              </div>
            }
          >
            <HeroScene />
          </Suspense>
          <HeroChips />
        </div>
      </div>
    </section>
  );
}
