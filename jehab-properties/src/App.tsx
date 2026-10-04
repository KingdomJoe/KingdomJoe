import { useEffect, useState } from 'react';
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

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  // Native hardware-accelerated smooth scrolling for anchor links
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const hash = target.getAttribute('href')!;
      if (hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
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
      </div>
    </MotionConfig>
  );
}
