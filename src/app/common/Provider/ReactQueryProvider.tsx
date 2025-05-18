'use client';

import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    (window as any).toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary>{children}</HydrationBoundary>

      {/* dev mode용 데브툴 */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* production mode용 데브툴 */}
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
