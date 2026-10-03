import { Logo } from '@/components/Navbar';

const COLS = [
  { title: 'Explore', links: ['Listings', 'Services', 'Commercial', 'About'] },
  { title: 'Company', links: ['Careers', 'Press', 'Partners', 'Contact'] },
  { title: 'Resources', links: ['Buyer guide', 'Seller guide', 'Market reports', 'FAQ'] },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted">
            A modern real estate brokerage in Accra, Ghana. Buy, sell, rent and invest
            with a team that answers the phone.
          </p>
        </div>

        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-ink">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#top" className="text-[14px] text-muted transition-colors hover:text-brand">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line px-5 pt-6 text-[13px] text-muted md:px-8">
        <p>© {new Date().getFullYear()} Jehab Properties. All rights reserved.</p>
        <p>
          3D models by{' '}
          <a href="https://kenney.nl" target="_blank" rel="noreferrer" className="font-medium text-ink-soft hover:text-brand">
            Kenney
          </a>{' '}
          (CC0) · Built with three.js & shadcn/ui
        </p>
      </div>
    </footer>
  );
}
