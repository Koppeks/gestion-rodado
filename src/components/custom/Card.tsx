import { cn } from "libs/utils"


const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('bg-(--white) border border-(--line) rounded-xl overflow-hidden', className)}
    {...props}
  >
    {children}
  </div>
)

const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('px-5 py-3.5 flex items-center justify-between border-b border-(--line)', className)}
    {...props}
  >
    {children}
  </div>
)

const CardContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('px-5 py-3.5', className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('px-5 py-3 border-t border-(--line) bg-(--white-two)', className)}
    {...props}
  >
    {children}
  </div>
)

export { Card, CardHeader, CardContent, CardFooter }