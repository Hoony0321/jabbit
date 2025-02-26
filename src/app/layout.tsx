import type { Metadata } from 'next';
import { Provider } from '@/src/components/ui/provider';
import { Theme } from '@chakra-ui/react';
import localFont from 'next/font/local';
import { Toaster } from '@/src/components/ui/toaster';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import ChannelTalk from './common/ChannelTalk/ChannelTalk';
import MobileNotSupported from './components/MobileNotSupported/MobileNotSupported';
export const metadata: Metadata = {
  title: 'JABBIT (재빗)',
  description: '재무관리의 모든 것',
};

const pretendard = localFont({
  src: '../font/PretendardVariable.woff2',
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
        <Provider forcedTheme="light">
          <MobileNotSupported>
            <Theme>{children}</Theme>
          </MobileNotSupported>
          <Toaster />
        </Provider>
        <GoogleAnalytics gaId="G-Q797S4KDG1" />
        <GoogleTagManager gtmId="GTM-TGKKWCHC" />
      </body>
    </html>
  );
}
