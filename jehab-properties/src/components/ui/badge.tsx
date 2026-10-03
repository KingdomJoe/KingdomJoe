import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/** Badge — shadcn/ui primitive, re-tuned. */
const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight transition-colors [&_svg]:size-3.5',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-ink text-white',
        brand: 'border-brand/20 bg-brand-soft text-brand-deep',
        outline: 'border-line-strong bg-paper text-ink-soft',
        soft: 'border-transparent bg-paper-sunk text-ink-soft',
        success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
