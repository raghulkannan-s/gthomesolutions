import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "GT Home Solution | Painting & Waterproofing Services in Chennai",
  description:
    "Professional interior & exterior painting, waterproofing, texture & stencil painting, wood polishing, renovation, and epoxy grouting services in Chennai. Get free estimation!",
  keywords: [
    "painting services Chennai",
    "interior painting Chennai",
    "exterior painting Chennai",
    "waterproofing Chennai",
    "terrace waterproofing",
    "texture painting",
    "stencil painting",
    "wood polishing",
    "renovation Chennai",
    "epoxy grouting",
    "GT Home Solution",
    "home painting",
    "house painting Chennai",
  ],
  authors: [{ name: "GT Home Solution" }],
  creator: "GT Home Solution",
  publisher: "GT Home Solution",
  metadataBase: new URL("https://gthomesolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GT Home Solution | Professional Painting & Waterproofing in Chennai",
    description:
      "Expert painting, waterproofing, and renovation services in Chennai. Quality work since 2024. Get free estimation today!",
    url: "https://gthomesolution.com",
    siteName: "GT Home Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GT Home Solution - Painting Services Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GT Home Solution | Painting & Waterproofing Chennai",
    description:
      "Professional painting, waterproofing & renovation services in Chennai. Free estimation!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
