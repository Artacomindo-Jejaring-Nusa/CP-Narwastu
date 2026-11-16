// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import komponen
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import SmoothScroll from "../app/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://narwastuarthatama.com'),
  title: {
    default: "PT. Narwastu Artha Tama - IT Solution Inovatif, Terdepan dan Terpercaya",
    template: "%s | PT. Narwastu Artha Tama"
  },
  description: "PT. Narwastu Artha Tama adalah penyedia solusi IT inovatif, terdepan dan terpercaya sejak 2014. Melayani Network Infrastructure, Network Security, Managed Services, VSAT, dan Software Development di Indonesia.",
  keywords: [
    "PT Narwastu Artha Tama",
    "Narwastu IT Solution",
    "IT Solution Jakarta",
    "Konsultan IT Indonesia",
    "Network Infrastructure",
    "Network Security",
    "Managed Services",
    "Software Development",
    "IT Consultant Jakarta",
    "Artacomindo Jejaring Nusa",
    "Artacomindotama",
    "Peplink Indonesia",
    "Maipu Indonesia"
  ],
  authors: [{ name: "PT. Narwastu Artha Tama", url: "https://narwastuarthatama.com" }],
  creator: "PT. Narwastu Artha Tama",
  publisher: "PT. Narwastu Artha Tama",
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logos/Picture7.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://narwastuarthatama.com",
    title: "PT. Narwastu Artha Tama - IT Solution Inovatif, Terdepan dan Terpercaya",
    description: "Penyedia solusi IT inovatif dan terpercaya sejak 2014. Melayani Network Infrastructure, Security, Managed Services, dan Software Development di Indonesia.",
    siteName: "PT. Narwastu Artha Tama",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT. Narwastu Artha Tama - IT Solution Provider"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Narwastu Artha Tama - IT Solution Inovatif, Terdepan dan Terpercaya",
    description: "Penyedia solusi IT yang inovatif, terdepan dan terpercaya sejak 2014.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://narwastuarthatama.com/#organization',
        name: 'PT. Narwastu Artha Tama',
        alternateName: ['Narwastu', 'Narwastu IT Solutions'],
        url: 'https://narwastuarthatama.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://narwastuarthatama.com/logos/Picture7.png',
          caption: 'PT. Narwastu Artha Tama Logo'
        },
        image: 'https://narwastuarthatama.com/og-image.png',
        description: 'Penyedia solusi IT inovatif, terdepan dan terpercaya sejak 2014. Melayani Network Infrastructure, Network Security, Managed Services, dan Software Development.',
        foundingDate: '2014-06-01',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Eighty Eight@Kasablanka Office Tower, Lantai 36 Unit A-D, Jl. Casablanca Kav. 88',
          addressLocality: 'Jakarta Selatan',
          addressRegion: 'DKI Jakarta',
          postalCode: '12870',
          addressCountry: 'ID'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+62-896-0602-5227',
            contactType: 'customer service',
            email: 'info@narwastuarthatama.com',
            availableLanguage: ['Indonesian', 'English'],
            areaServed: 'ID'
          }
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
          'ICT Services',
          'VSAT Services'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://narwastuarthatama.com/#website',
        url: 'https://narwastuarthatama.com',
        name: 'PT. Narwastu Artha Tama',
        description: 'Solusi IT Inovatif, Terdepan dan Terpercaya di Indonesia',
        publisher: {
          '@id': 'https://narwastuarthatama.com/#organization'
        },
        inLanguage: 'id-ID'
      }
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
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}