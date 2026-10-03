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
              <div className="grid gap-4 sm:grid-cols-2">
                <Input required placeholder="Full name" name="name" autoComplete="name" />
                <Input required type="tel" placeholder="Phone / WhatsApp" name="phone" autoComplete="tel" />
              </div>
              <select
                name="property"
                className="h-12 w-full rounded-2xl border border-line bg-paper px-4 text-[15px] text-ink focus-visible:border-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/10"
                defaultValue=""
                required
              >
                <option value="" disabled>Choose a property</option>
                {LISTINGS.map((l) => (
                  <option key={l.id} value={l.id}>{l.title} — {l.location}</option>
                ))}
                <option value="other">Something else / not sure yet</option>
              </select>
              <Input type="date" name="date" required aria-label="Preferred date" />
              <Button type="submit" variant="brand" size="lg">Request viewing</Button>
              <p className="text-center text-xs text-muted">
                No spam, no pressure. We only call to arrange your viewing.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
