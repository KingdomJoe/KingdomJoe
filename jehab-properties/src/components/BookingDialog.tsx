import { useState, type FormEvent } from 'react';
import { CalendarCheck, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LISTINGS } from '@/lib/data';

export function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    onOpenChange(false);
    // reset after exit animation
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? onOpenChange(o) : close())}>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-brand-soft text-brand">
              <CheckCircle2 className="size-8" />
            </span>
            <DialogTitle className="text-2xl">Request received</DialogTitle>
            <DialogDescription className="max-w-xs">
              Thank you — an advisor will call you within one working day to confirm your viewing.
            </DialogDescription>
            <Button variant="brand" onClick={close}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <span className="mb-1 grid size-11 w-fit place-items-center rounded-xl bg-brand-soft text-brand">
                <CalendarCheck className="size-5" />
              </span>
              <DialogTitle>Book a viewing</DialogTitle>
              <DialogDescription>
                Tell us a little about you and we will arrange a time that suits.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Input required placeholder="Full name" name="name" autoComplete="name" className="text-[16px] sm:text-[15px]" />
                <Input required type="tel" placeholder="Phone / WhatsApp" name="phone" autoComplete="tel" className="text-[16px] sm:text-[15px]" />
              </div>
              <select
                name="property"
                className="h-12 w-full rounded-2xl border border-line bg-paper px-4 text-[16px] sm:text-[15px] text-ink focus-visible:border-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/10"
                defaultValue=""
                required
              >
                <option value="" disabled>Select service or property</option>
                <optgroup label="Our Services">
                  <option value="sale-of-lands">Sale of Lands</option>
                  <option value="sale-of-houses">Sale of Houses</option>
                  <option value="construction">Construction Services</option>
                  <option value="architectural-designs">Architectural Designs</option>
                  <option value="swap-car-land">Swap car for Land</option>
                </optgroup>
                <optgroup label="Featured Properties">
                  {LISTINGS.map((l) => (
                    <option key={l.id} value={l.id}>{l.title} — {l.location}</option>
                  ))}
                </optgroup>
                <option value="other">General consultation / other</option>
              </select>
              <Input type="date" name="date" required aria-label="Preferred date" className="text-[16px] sm:text-[15px]" />
              <Button type="submit" variant="brand" size="lg" className="w-full active:scale-[0.98] transition-transform shadow-brand">
                Request viewing or consultation
              </Button>
              <p className="text-center text-xs text-muted">
                Need immediate help? Call us directly at{' '}
                <a href="tel:0243372503" className="font-semibold text-brand hover:underline">
                  Tel: 0243372503
                </a>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
