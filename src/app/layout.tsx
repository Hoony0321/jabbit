import type { Metadata } from 'next';
import { Theme } from '@chakra-ui/react';
import localFont from 'next/font/local';
import { Toaster } from '@/src/client/components/ui/toaster';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import ChannelTalk from './common/ChannelTalk/ChannelTalk';
import Provider from './common/Provider/Provider';

export const metadata: Metadata = {
  title: 'JABBIT (재빗)',
  description: '재무관리의 모든 것',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/assets/pwa/logo-192x192.png', sizes: '192x192' },
    {
      rel: 'apple-touch-icon',
      url: '/assets/pwa/logo-192x192.png',
      sizes: '192x192',
    },
    { rel: 'icon', url: '/assets/pwa/logo-152x152.png', sizes: '152x152' },
    { rel: 'icon', url: '/assets/pwa/logo-144x144.png', sizes: '144x144' },
    { rel: 'icon', url: '/assets/pwa/logo-128x128.png', sizes: '128x128' },
    { rel: 'icon', url: '/assets/pwa/logo-96x96.png', sizes: '96x96' },
  ],
};

const pretendard = localFont({
  src: '../client/font/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={pretendard.className}>
      <body>
        <ChannelTalk />
          <Provider>
            <Theme>{children}</Theme>
            <Toaster />
          </Provider>
        <GoogleAnalytics gaId="G-Q797S4KDG1" />
        <GoogleTagManager gtmId="GTM-TGKKWCHC" />
      </body>
    </html>
  );
}
