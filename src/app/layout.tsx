  import type { Metadata } from 'next';
  import { NEXT_PUBLIC_URL } from '../config';

  
  import '@coinbase/onchainkit/styles.css';
  import './global.css';
  import '@rainbow-me/rainbowkit/styles.css';
  import dynamic from 'next/dynamic';

  const OnchainProviders = dynamic(
    () => import('src/components/OnchainProviders'),
    {
      ssr: false,
    },
  );

  export const viewport = {
    width: 'device-width',
    initialScale: 1.0,
  };

  export const metadata: Metadata = {
    title: 'Tang Cat $TANG Swapper',
    description: 'Built with OnchainKit',
    openGraph: {
      title: 'Tang Cat $TANG Swapper',
      description: 'Built with OnchainKit',
      images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
    },
  };

  export default function RootLayout({
    children,
  }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="flex items-center justify-center">
          <OnchainProviders>{children}</OnchainProviders>
        </body>
      </html>
    );
  }
