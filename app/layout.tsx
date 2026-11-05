import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Arbit Infratel Private Limited | Shaping Skylines • Building Legacies',
  description:
    'Arbit Infratel Private Limited (Est. 2010, Gorakhpur) is a premier ₹100+ Crore Indian infrastructure engineering, civil EPC, and commercial real estate conglomerate. "Home to Eminent Retail Brands & Luxury Living". Registered UP-RERA Promoter (UPRERAPRM160411).',
  keywords: [
    'Arbit Infratel Private Limited',
    'Arbit The 25',
    'Civil EPC Gorakhpur',
    'Commercial Real Estate Gorakhpur',
    'UPRERAPRM160411',
    'UPRERAPRJ218427',
    'U64200UP2010PTC041308',
    'Abhishek Agrawal Arbit',
    'Anand Kumar Mishra Arbit',
    'Altius Network Telecom',
    'Civil Lines Gorakhpur Real Estate'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sg-aditya28.github.io/arbit-infratel-preview/',
    siteName: 'Arbit Infratel Private Limited',
    title: 'Arbit Infratel Private Limited | Home to Eminent Retail Brands & Luxury Living',
    description: 'Premier infrastructure engineering, civil EPC, and commercial real estate conglomerate in Gorakhpur, UP. Shaping Skylines, Building Legacies.',
    images: [
      {
        url: 'https://sg-aditya28.github.io/arbit-infratel-preview/arbit-logo-hd.jpg',
        width: 720,
        height: 720,
        alt: 'Arbit Infratel Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arbit Infratel Private Limited | Shaping Skylines, Building Legacies',
    description: 'Home to Eminent Retail Brands & Luxury Living • Telecom Infrastructure O&M (Altius Network)',
    images: ['https://sg-aditya28.github.io/arbit-infratel-preview/arbit-logo-hd.jpg'],
  },
  icons: {
    icon: [
      { url: '/arbit-infratel-preview/favicon.png', type: 'image/png' },
      { url: '/arbit-infratel-preview/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/arbit-infratel-preview/favicon-192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="64x64" href="/arbit-infratel-preview/favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/arbit-infratel-preview/favicon.svg" />
        <link rel="apple-touch-icon" href="/arbit-infratel-preview/favicon-192.png" />
      </head>
      <body className="bg-[#F6F5F2] text-[#181A1F] font-sans antialiased selection:bg-[#B8965A] selection:text-white min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
