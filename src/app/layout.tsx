import type { Metadata } from "next";
import { Inter, Press_Start_2P, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-display",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixel",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cyber-Brutalist Portfolio",
  description: "Personal portfolio with cyber-brutalist aesthetic",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pressStart2P.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-mono text-black bg-brand-terminal">
        {children}
      </body>
    </html>
  );
}
