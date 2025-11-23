import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rushikesh Mhatre | Frontend Developer Portfolio",
    template: "%s | Rushikesh Mhatre",
  },
  description:
    "Portfolio of Rushikesh Mhatre - Frontend Developer skilled in Next.js, Angular, UI/UX and modern web technologies.",

  keywords: [
    "Rushikesh Mhatre",
    "Frontend Developer",
    "Next.js Developer",
    "Angular Developer",
    "Web Developer Portfolio",
    "UI Developer India",
  ],

  authors: [{ name: "Rushikesh Mhatre" }],
  creator: "Rushikesh Mhatre",

  metadataBase: new URL("https://portfolio-one-green-75.vercel.app"),

  
  openGraph: {
    title: "Rushikesh Mhatre | Frontend Developer Portfolio",
    description:
      "Explore my professional portfolio showcasing projects in Next.js, Angular, UI/UX and modern web development.",
   url: "https://portfolio-one-green-75.vercel.app",
    siteName: "Rushikesh Portfolio",
    images: [
      {
        url: "/card.png", 
        width: 1200,
        height: 630,
        alt: "Rushikesh Mhatre Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  themeColor: "#0f172a",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
