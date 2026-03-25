import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { NotFound } from '#/components/NotFound'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title:
          'Gestion Rodado, vender nunca fue tan facil',
      },
      {
        name: 'description',
        content:
          'Administra tus ventas de vehiculos, obten un seguimiento semanal, mensual y anual de tus ventas y crea documentos con un clic.',
      },
      {
        name: 'keywords',
        content:
          'Vehículos, Consecionaria, Rapidez, Agilidad, Compra y venta de autos, Compra y venta de vehículos, Compra y venta de automóviles, rodados'
      },
      {
        property: 'og:title',
        content: 'Gestion Rodado',
      },
      {
        property: 'og:description',
        content:
          'Administra tus ventas de vehiculos, obten un seguimiento semanal, mensual y anual de tus ventas y crea documentos con un clic.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
