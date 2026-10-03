import * as React from 'react';

import { cn } from '@/lib/utils';

/** Input — shadcn/ui primitive, re-tuned. */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-[15px] text-ink shadow-none transition-all duration-300',
        'placeholder:text-muted/70',
        'hover:border-line-strong',
        'focus-visible:border-brand focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/10',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export { Input };
