import TopNav from "@/components/TopNav";
import "./global.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
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
  title: "BrainWare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
