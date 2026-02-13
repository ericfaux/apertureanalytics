import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Aperture Analytics - White-Label Reporting for Agencies",
  description: "Generate stunning, white-labeled client reports in minutes. Save 20+ hours per month with automated reporting for agencies.",
  keywords: ["agency reporting", "white-label", "client reports", "marketing reports", "automated reporting"],
  openGraph: {
    title: "Aperture Analytics - White-Label Reporting for Agencies",
    description: "Generate stunning, white-labeled client reports in minutes. Save 20+ hours per month with automated reporting for agencies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
