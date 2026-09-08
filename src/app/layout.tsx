import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import {
  canopee,
  editorialNew,
  bungee,
  pressStart2P,
  bricolageGrotesque,
  oxanium,
} from '@/fonts/font';
import '@/app/globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import HOC from '@/components/ui/hoc';
import { siteConfig } from '@/config/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;

/**
 * A @graph lets the Organization be declared once and referenced by @id from
 * both the WebSite and the Event, instead of being duplicated in each.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: siteConfig.organizer,
      alternateName: 'Webwiz',
      url: siteConfig.url,
      email: siteConfig.social.email,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/icon-512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        siteConfig.social.twitterUrl,
        siteConfig.social.instagram,
        siteConfig.social.discord,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { '@id': ORGANIZATION_ID },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Event',
      '@id': `${siteConfig.url}/#event`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      // Google requires an image on Event to be eligible for rich results.
      image: [`${siteConfig.url}${siteConfig.og.image}`],
      startDate: siteConfig.event.startDate,
      endDate: siteConfig.event.endDate,
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      // An online event still needs a `location`; for these it is a VirtualLocation.
      location: {
        '@type': 'VirtualLocation',
        url: siteConfig.url,
      },
      organizer: { '@id': ORGANIZATION_ID },
      // Free entry — update `price` here if registration ever becomes paid.
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: siteConfig.url,
      },
      inLanguage: 'en-IN',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // `default` is used as-is; any future page that sets a title gets the template.
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.organizer, url: siteConfig.url }],
  creator: siteConfig.organizer,
  publisher: siteConfig.organizer,
  category: 'technology',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: 'en_IN',
    images: [
      {
        url: siteConfig.og.image,
        // Declared dimensions must match the real file so crawlers reserve the
        // correct aspect ratio while the image is still loading.
        width: siteConfig.og.width,
        height: siteConfig.og.height,
        alt: siteConfig.og.alt,
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.og.image, alt: siteConfig.og.alt }],
  },

  /**
   * Safari only reliably picks up an icon when the link carries an accurate
   * `type` and `sizes`, so every entry below is declared explicitly and the
   * multi-resolution .ico is listed first.
   */
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64',
        type: 'image/x-icon',
      },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    // Opaque 180x180 — iOS composites any transparency to black.
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },

  manifest: '/manifest.webmanifest',

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // The design is a fixed light palette; this stops iOS Safari from restyling
  // form controls and scrollbars for dark mode.
  colorScheme: 'light',
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MLP0HVXXM9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MLP0HVXXM9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${canopee.variable} ${editorialNew.variable} ${bungee.variable} ${pressStart2P.variable} ${bricolageGrotesque.variable} ${oxanium.variable} antialiased`}
      >
        <Toaster position="top-right" />
        <Navbar />
        {/* HOC Wrapper ensures smooth Lenis scrolling across the app */}
        <HOC>{children}</HOC>
        <Footer />
      </body>
    </html>
  );
}
