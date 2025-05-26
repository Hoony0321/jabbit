'use client';

import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

function MixPanelProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!mixpanelToken) return;

    mixpanel.init(mixpanelToken, {
      debug: true,
      track_pageview: true,
    });
  }, []);

  return <>{children}</>;
}

export default MixPanelProvider;
