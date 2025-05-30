import mixpanel from 'mixpanel-browser';
import { getCurrentTimestamp } from '@/src/client/utils/parser';
import { AuthUser } from '@/src/client/store/authStore';

export const mixpanelTrackWithCallback = (
  location: string,
  buttonName: string,
  user: AuthUser | null,
  callback: () => void,
) => {
  mixpanel.track(buttonName, {
    location: location,
    user_name: user?.name ? user.name : 'unknown',
    user_email: user?.email,
    timestamp: getCurrentTimestamp(),
  });
  callback();
};

export const mixpanelTrack = (
    location: string,
    buttonName: string,
    user: AuthUser | null,
  ) => {
    mixpanel.track(buttonName, {
      location: location,
      user_name: user?.name ? user.name : 'unknown',
      user_email: user?.email,
      timestamp: getCurrentTimestamp(),
    });
  };
  