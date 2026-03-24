export const ButtonRedirect = ({to, isblank, children}:{to:string, isblank:boolean, children:React.ReactNode}) => {
    return(
          <a
            href={to}
            target={isblank ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
          >
            {children}
          </a>
    )
}