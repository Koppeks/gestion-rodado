import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from 'libs/utils'

const buttonVariants = cva(
    "no-underline cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--lagoon)] focus-visible:ring-[var(--lagoon)]/50 focus-visible:ring-[3px] aria-invalid:ring-[var(--lagoon-deep)]/20 aria-invalid:border-[var(--lagoon-deep)]",
    {
        variants: {
            variant: {
                default:
                    'bg-(--secondary) text-(--white) hover:bg-(--secondary-deep)',
                destructive:
                    'bg-(--primary) text-(--white) hover:bg-(--primary-soft) focus-visible:ring-(--primary)/20',
                outline:
                    'border border-(--chip-line) bg-(--white) shadow-xs hover:bg-(--bg-base) hover:text-(--primary)',
                secondary:
                    'bg-(--white) text-(--primary) hover:bg-(--white-two)',
                ghost: 
                    'hover:bg-(--white-two) hover:text-(--primary)',
                link: 
                    'text-(--navigation-tone) underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                sm: 'h-8 rounded-md gap-1.5 px-3 w-fit',
                lg: 'h-10 rounded-md px-6 w-fit',
                big: 'h-10 rounded-md px-20 w-fit',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

function Button({
    className,
    variant,
    size,
    href,
    target,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        href?: string,
        target?: string,
    }) {
    const Comp = href ? 'a' : 'button'

    return (
        <Comp
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...(props as any)}
        />
    )
}

export { Button, buttonVariants }