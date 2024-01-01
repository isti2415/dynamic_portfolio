import { Outfit } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <main className={outfit.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
