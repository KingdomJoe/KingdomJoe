import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'motion/react';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Stats } from '@/components/Stats';
import { Listings } from '@/components/Listings';
import { Services } from '@/components/Services';
import { Showcase } from '@/components/Showcase';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { BookingDialog } from '@/components/BookingDialog';
import { MobileDock } from '@/components/MobileDock';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  // Lenis smooth scrolling + anchored navigation
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({ duration: 1.1, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const hash = target.getAttribute('href')!;
      if (hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -72 });
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-paper text-ink">
        <Navbar onBook={() => setBookingOpen(true)} />
        <main>
          <Hero onBook={() => setBookingOpen(true)} />
          <Marquee />
          <Stats />
          <Listings />
          <Services />
          <Showcase onBook={() => setBookingOpen(true)} />
          <About />
          <Testimonials />
          <Faq />
          <Contact onBook={() => setBookingOpen(true)} />
        </main>
        <Footer />
        <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
        <MobileDock onBook={() => setBookingOpen(true)} />
      </div>
    </MotionConfig>
  );
}
