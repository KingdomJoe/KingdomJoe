import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind-aware class joiner. Standard shadcn/ui helper. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 1200000 -> "₵1.2M" / "$1.2M" */
export function formatMoney(value: number, currency = 'GH₵') {
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return `${currency}${(value / 1_000_000).toFixed(abs >= 10_000_000 ? 1 : 2)}M`;
  if (abs >= 1_000) return `${currency}${Math.round(value / 1_000)}K`;
  return `${currency}${value}`;
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}
