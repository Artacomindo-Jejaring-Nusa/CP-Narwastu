// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import komponen
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://narwastu.com'),
  title: {
    default: "PT. Narwastu Artha Tama - IT Solution Inovatif, Terdepan dan Terpercaya",
    template: "%s | PT. Narwastu Artha Tama"
  },
  description: "PT. Narwastu Artha Tama adalah penyedia solusi IT yang inovatif, terdepan dan terpercaya sejak 2014. Melayani Network Infrastructure, Security, Managed Services, dan Software Development.",
  keywords: ["IT Solution", "Network Infrastructure", "Security", "Managed Services", "Software Development", "IT Consultant", "Technology Provider", "Narwastu"],
  authors: [{ name: "PT. Narwastu Artha Tama" }],
  creator: "PT. Narwastu Artha Tama",
  publisher: "PT. Narwastu Artha Tama",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://narwastu.com",
    title: "PT. Narwastu Artha Tama - IT Solution Inovatif, Terdepan dan Terpercaya",
    description: "Penyedia solusi IT yang inovatif, terdepan dan terpercaya sejak 2014. Melayani Network Infrastructure, Security, Managed Services, dan Software Development.",
    siteName: "PT. Narwastu Artha Tama",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PT. Narwastu Artha Tama"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Narwastu Artha Tama - IT Solution Inovatif, Terdepan dan Terpercaya",
    description: "Penyedia solusi IT yang inovatif, terdepan dan terpercaya sejak 2014.",
    images: ["/og-image.jpg"],
    creator: "@narwastu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT. Narwastu Artha Tama',
    alternateName: 'Narwastu',
    url: 'https://narwastu.com',
    logo: 'https://narwastu.com/logos/Picture7.png',
    description: 'Penyedia solusi IT yang inovatif, terdepan dan terpercaya sejak 2014. Melayani Network Infrastructure, Security, Managed Services, dan Software Development.',
    foundingDate: '2014-06-01',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Eighty Eight@Kasablanka Office Tower, Lantai 36 Unit A-D, Jl. Casablanca Kav. 88',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12870',
      addressCountry: 'ID'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-896-0602-5227',
      contactType: 'customer service',
      email: 'info@narwastuarthatama.com',
      availableLanguage: 'Indonesian'
    },
    sameAs: [
      'https://www.linkedin.com/company/narwastu-artha-tama'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia'
    },
    knowsAbout: [
      'Network Infrastructure',
      'Network Security',
      'Managed Services',
      'Software Development',
      'IT Consulting',
      'ICT Services'
    ]
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}