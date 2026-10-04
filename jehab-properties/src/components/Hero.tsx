import { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Bath, BedDouble, MapPin, Phone, Ruler } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WebGLBoundary, ModelFallback, hasWebGL } from '@/components/WebGLBoundary';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL } from '@/lib/data';

// three.js is heavy — stream it in after first paint so text renders instantly.
const HeroScene = lazy(() => import('@/three/HeroScene').then((m) => ({ default: m.HeroScene })));

function HeroChips() {
  return (
    <>
      {/* Price card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-2 top-3 z-10 sm:left-4 sm:top-8 md:left-6"
      >
        <div className="animate-float-slow rounded-2xl border border-line bg-white/95 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-lift-lg backdrop-blur">
          <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-muted">The Courtyard House</p>
          <p className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink">GH₵2.85M</p>
          <div className="mt-1.5 sm:mt-2 flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-[12px] text-ink-soft">
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
        className="absolute bottom-3 right-2 z-10 sm:bottom-10 sm:right-6"
      >
        <div className="flex items-center gap-2 rounded-full border border-line bg-white/95 py-1.5 pl-1.5 pr-3.5 sm:py-2 sm:pl-2 sm:pr-4 shadow-lift backdrop-blur">
          <span className="grid size-6 sm:size-7 place-items-center rounded-full bg-brand-soft text-brand">
            <BadgeCheck className="size-3.5 sm:size-4" />
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium text-ink">Title verified · Inspected</span>
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

      <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-8 px-5 pb-16 pt-24 sm:gap-10 sm:pb-20 sm:pt-28 md:px-8 lg:min-h-screen lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <Badge variant="brand" className="mb-4 sm:mb-6">
              <MapPin className="size-3.5" /> Accra · Ghana — est. 2016
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[34px] leading-[1.08] font-semibold tracking-tight text-ink sm:text-[52px] sm:leading-[1.04] lg:text-[64px]"
          >
            Find Your Dream House
            <br />
            <span className="text-brand">For Living</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg leading-relaxed text-muted"
          >
            Jehab Properties matches people to verified titled lands, move-in houses, and architectural expertise in Ghana — fairly priced and handled end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <Button variant="brand" size="lg" onClick={onBook} className="w-full sm:w-auto justify-center active:scale-[0.98] transition-transform shadow-brand">
              Book a viewing <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto justify-center active:scale-[0.98] transition-transform">
              <a href="#listings">Browse listings</a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="w-full sm:w-auto justify-center border border-line sm:border-transparent text-ink-soft hover:text-brand active:scale-[0.98] transition-transform"
            >
              <a href={COMPANY_PHONE_TEL} className="flex items-center gap-2">
                <Phone className="size-4 text-brand" />
                <span>{COMPANY_PHONE_DISPLAY}</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2.5 text-xs sm:text-sm text-muted"
          >
            <span className="flex items-center gap-2 font-medium text-ink-soft">
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
        <div className="relative h-[340px] sm:h-[480px] lg:h-[620px] touch-pan-y">
          {hasWebGL() ? (
            <WebGLBoundary>
              <Suspense
                fallback={
                  <div className="grid size-full place-items-center">
                    <div className="size-10 animate-spin rounded-full border-2 border-line border-t-brand" />
                  </div>
                }
              >
                <HeroScene />
              </Suspense>
            </WebGLBoundary>
          ) : (
            <ModelFallback />
          )}
          <HeroChips />
        </div>
      </div>
    </section>
  );
}
