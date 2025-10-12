import TopNav from "@/components/TopNav";
import "./global.css";
import { Archivo_Black, Space_Grotesk, Space_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";

const sans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const mono = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-mono",
})

const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-head",
})
export const metadata: Metadata = {
  title: "Retro Styled React UI Library | Retro UI",
  description:
    "RetroUI - Retro styled component library built with React and TailwindCSS for modern web apps.",
  openGraph: {
    images: "https://retroui.dev/banner.png",
    title: "Retro Styled React UI Library | Retro UI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${ibm.variable} ${sans.variable} ${mono.variable} ${ibm.className} bg-background text-foreground`}
      >
        <ThemeProvider>
          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
