import type { Metadata } from 'next';
import { Provider } from '@/src/components/ui/provider';
import { Theme } from '@chakra-ui/react';
import localFont from 'next/font/local';
import { Toaster } from '@/src/components/ui/toaster';
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
        <Provider>
          <Theme appearance="light">{children}</Theme>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
