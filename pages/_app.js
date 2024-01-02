import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <TooltipProvider>
        <main className={outfit.className}>
          <Component {...pageProps} />
        </main>
        <Toaster/>
      </TooltipProvider>
    </ThemeProvider>
  );
}
