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
  title: 'Arbit Infratel Private Limited | Building with Purpose. Leading with Pride.',
  description:
    'Arbit Infratel Private Limited (Est. 2010, Gorakhpur) — Building with Purpose. Leading with Pride. Over 38+ commercial landmarks delivered across Gorakhpur and Eastern UP. Registered UP-RERA Promoter (UPRERAPRM160411).',
  keywords: [
    'Arbit Infratel Private Limited',
    'Building with Purpose Leading with Pride',
    'Arbit The 25',
    'Arbit 34 Westside Gorakhpur',
    'Arbit 36 Reliance Fashion Factory',
    'Arbit Vibhuti Metro Shoes Golghar',
    'Civil EPC Gorakhpur',
    'Commercial Real Estate Gorakhpur',
    'UPRERAPRM160411',
    'UPRERAPRJ218427',
    'U64200UP2010PTC041308',
    'Anand Kumar Mishra Arbit',
    'Abhishek Agrawal Arbit',
    'Altius Network Telecom',
    'Civil Lines Gorakhpur Real Estate'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sg-aditya28.github.io/arbit-infratel-preview/',
    siteName: 'Arbit Infratel Private Limited',
    title: 'Arbit Infratel Private Limited | Building with Purpose. Leading with Pride.',
    description: 'Premier infrastructure engineering, civil EPC, and commercial real estate in Gorakhpur, UP. 38+ projects delivered.',
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
    title: 'Arbit Infratel Private Limited | Building with Purpose. Leading with Pride.',
    description: '38+ commercial landmarks delivered across Gorakhpur • Civil EPC & Telecom Infrastructure O&M',
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
      <body className="bg-white text-[#0F172A] font-sans antialiased selection:bg-[#2C8FEA] selection:text-white min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
