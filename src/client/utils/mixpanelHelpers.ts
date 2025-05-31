import mixpanel from 'mixpanel-browser';
import { getCurrentTimestamp } from '@/src/client/utils/parser';
import { AuthUser } from '@/src/client/store/authStore';

export const mixpanelTrackWithCallback = (
  location: string,
  eventName: string,
  buttonName: string,
  user: AuthUser | null,
  callback: () => void,
) => {
  mixpanel.track(eventName, {
    location: location,
    button_name: buttonName,
    user_name: user?.name ? user.name : 'unknown',
    user_email: user?.email,
    timestamp: getCurrentTimestamp(),
  });
  callback();
};

export const mixpanelTrack = (
    location: string,
    eventName: string,
    buttonName: string,
    user: AuthUser | null,
  ) => {
    mixpanel.track(eventName, {
      location: location,
      button_name: buttonName,
      user_name: user?.name ? user.name : 'unknown',
      user_email: user?.email,
      timestamp: getCurrentTimestamp(),
    });
  };
  