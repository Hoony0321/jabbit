'use client'; // 클라이언트 컴포넌트로 설정

import { useEffect } from 'react';
import * as ChannelService from '@channel.io/channel-web-sdk-loader';

const ChannelTalk = () => {
  useEffect(() => {
    const loadChannelTalk = async () => {
      try {
        await ChannelService.loadScript();
        ChannelService.boot({
          pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY as string,
        });
      } catch (error) {
        console.error('ChannelTalk 로드 실패:', error);
      }
    };

    loadChannelTalk();

    return () => {
      ChannelService.shutdown();
    };
  }, []);

  return null;
};

export default ChannelTalk;
