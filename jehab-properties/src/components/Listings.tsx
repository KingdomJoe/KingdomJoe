import { ArrowUpRight, Bath, BedDouble, Building2, Home, KeyRound, Ruler } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Reveal } from '@/components/Reveal';
import { LISTINGS, type Listing } from '@/lib/data';
import { formatMoney } from '@/lib/utils';

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant="brand" className="bg-white/90 backdrop-blur">{listing.tag}</Badge>
            <Badge variant="default" className="bg-ink/80 backdrop-blur">
              {listing.status === 'sale' ? 'For sale' : listing.status === 'rent' ? 'To let' : 'Commercial'}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{listing.title}</h3>
              <p className="mt-0.5 flex items-center gap-1 text-[13px] text-muted">
                <Building2 className="size-3.5" /> {listing.location}
              </p>
            </div>
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="size-4" />
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
            <p className="font-display text-lg font-semibold tracking-tight text-brand">
              {formatMoney(listing.price)}
              {listing.priceSuffix && <span className="text-[13px] font-medium text-muted">{listing.priceSuffix}</span>}
            </p>
            <div className="flex items-center gap-3 text-[13px] text-ink-soft">
              {listing.beds != null && <span className="flex items-center gap-1"><BedDouble className="size-4 text-muted" />{listing.beds}</span>}
              {listing.baths != null && <span className="flex items-center gap-1"><Bath className="size-4 text-muted" />{listing.baths}</span>}
              <span className="flex items-center gap-1"><Ruler className="size-4 text-muted" />{listing.area}m²</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Listings() {
  const tabs = [
    { value: 'sale', label: 'For sale', icon: Home },
    { value: 'rent', label: 'To let', icon: KeyRound },
    { value: 'commercial', label: 'Commercial', icon: Building2 },
  ] as const;

  return (
    <section id="listings" className="scroll-mt-24 bg-paper-dim py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Featured listings</p>
            <h2 className="max-w-md text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              A short list, chosen properly.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            We publish a fraction of what we see — only homes and space that pass our
            inspection and title checks make the site.
          </p>
        </Reveal>

        <Tabs defaultValue="sale">
          <Reveal>
            <TabsList>
              {tabs.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  <t.icon className="size-4" /> {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {tabs.map((t) => (
            <TabsContent key={t.value} value={t.value}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <AnimatePresence>
                  {LISTINGS.filter((l) => l.status === t.value).map((l) => (
                    <ListingCard key={l.id} listing={l} />
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
