import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/**
 * Button — shadcn/ui primitive (https://ui.shadcn.com/docs/components/button),
 * re-tuned for the Jehab Properties palette.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
  {
    variants: {
      variant: {
        default:
          'bg-ink text-white hover:bg-ink-soft active:scale-[0.97] shadow-[0_1px_2px_rgba(11,13,16,0.2),0_10px_24px_-12px_rgba(11,13,16,0.5)]',
        brand:
          'bg-brand text-white hover:bg-brand-deep active:scale-[0.97] shadow-brand',
        outline:
          'border border-line-strong bg-paper text-ink hover:border-ink hover:bg-paper-dim active:scale-[0.97]',
        ghost: 'text-ink-soft hover:bg-paper-sunk hover:text-ink active:scale-[0.97]',
        soft: 'bg-brand-soft text-brand-deep hover:bg-brand/15 active:scale-[0.97]',
        link: 'text-brand underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-[13px]',
        lg: 'h-13 px-8 text-[15px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
