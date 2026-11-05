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
  title: 'Arbit Infratel Private Limited | Master Real Estate Developers & Civil EPC Conglomerate',
  description:
    'Arbit Infratel Private Limited (Est. 2010, Gorakhpur) is a premier ₹100+ Crore Indian infrastructure engineering, civil EPC, and commercial real estate conglomerate. Registered UP-RERA Promoter (UPRERAPRM160411) developing iconic landmarks like Arbit The 25.',
  keywords: [
    'Arbit Infratel Private Limited',
    'Arbit The 25',
    'Civil EPC Gorakhpur',
    'Commercial Real Estate Gorakhpur',
    'UPRERAPRM160411',
    'U64200UP2010PTC041308',
    'Abhishek Agrawal Arbit',
    'Anand Kumar Mishra Arbit',
    'Civil Lines Gorakhpur Real Estate'
  ],
  icons: {
    icon: '/arbit-infratel-preview/favicon.svg',
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
        <link rel="icon" type="image/svg+xml" href="/arbit-infratel-preview/favicon.svg" />
      </head>
      <body className="bg-[#F6F5F2] text-[#181A1F] font-sans antialiased selection:bg-[#B8965A] selection:text-white min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
