declare module 'next-pwa' {
  import { NextConfig } from 'next';

  type PWAOptions = {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    runtimeCaching?: any[];
    buildExcludes?: string[];
    fallbacks?: { [key: string]: string };
    [key: string]: any;
  };

  const withPWA: (
    options: PWAOptions,
  ) => (nextConfig: NextConfig) => NextConfig;
  export default withPWA;
}
