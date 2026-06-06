import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aastha Sharma — Editor, Writer & Communications Strategist",
  description:
    "Aastha Sharma is an Editorial Assistant at NCERT, a communications strategist, and researcher working at the intersection of literature, education, and sustainable development.",
  keywords: [
    "Aastha Sharma",
    "NCERT",
    "Editorial Assistant",
    "Writer",
    "Communications",
    "SDG",
    "New Delhi",
    "English Literature",
  ],
  openGraph: {
    title: "Aastha Sharma — Editor, Writer & Communications Strategist",
    description:
      "Editorial excellence, strategic communications, and literary research from New Delhi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
