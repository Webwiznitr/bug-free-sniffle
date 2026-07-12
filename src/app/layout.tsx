import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { canopee, editorialNew, bungee, pressStart2P } from '@/fonts/font';
import '@/app/globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import HOC from '@/components/ui/hoc';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'HackOdisha 6.0',
  description:
    'Largest Student hackathon of Odisha | HackOdisha 6.0 - a thrilling 36-hour online hackathon organized by Webwiz, NIT Rourkela',
  url: 'https://bug-free-sniffle-mocha.vercel.app',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  startDate: '2026-09-01T09:00:00+05:30',
  endDate: '2026-09-02T21:00:00+05:30',
  organizer: {
    '@type': 'Organization',
    name: 'Webwiz, NIT Rourkela',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bug-free-sniffle-mocha.vercel.app'),

  title: 'HackOdisha 6.0',
  description:
    'Largest Student hackathon of Odisha | HackOdisha 6.0 - a thrilling 36-hour online hackathon organized by Webwiz, NIT Rourkela — an event dedicated to fostering community collaboration.',
  keywords: [
    'HackOdisha',
    'HackOdisha 6.0',
    'HackOdisha 2026',
    'Hack Odisha',
    'Hackathon',
    'NIT Rourkela',
  ],
  openGraph: {
    title: 'HackOdisha 6.0',
    description: 'Largest Student hackathon of Odisha | HackOdisha 6.0',
    url: '/', // Next.js will automatically prepend the metadataBase
    siteName: 'HackOdisha',
    images: [
      {
        url: '/Images/cover.png',
        width: 1200,
        height: 630,
        alt: 'HackOdisha 6.0 Cover Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackOdisha 6.0',
    description:
      'HackOdisha 6.0 | Largest Student Run Hackathon of Odisha | Participate and Win Prizes, Goodies and subscriptions.',
    images: ['/Images/cover.png'],
  },
  icons: {
    icon: '/Images/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        className={`${geistSans.variable} ${geistMono.variable} ${canopee.variable} ${editorialNew.variable} ${bungee.variable} ${pressStart2P.variable} antialiased`}
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
