import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from '@chakra-ui/react';
import { COLORS } from './colors';
import { WEB_TEXT_STYLE, MOBILE_TEXT_STYLE } from './textStyle';

export const textStyles = defineTextStyles({
  ...WEB_TEXT_STYLE,
  ...MOBILE_TEXT_STYLE,
  xs: {
    value: {
      fontSize: '14px',
      fontWeight: '500',
    },
  },
  sm: {
    value: {
      fontSize: '16px',
      fontWeight: '500',
    },
  },
  md: {
    value: {
      fontSize: '18px',
      fontWeight: '500',
    },
  },
  lg: {
    value: {
      fontSize: '23px',
      fontWeight: '500',
    },
  },
  xl: {
    value: {
      fontSize: '28px',
      fontWeight: '500',
    },
  },
  xxl: {
    value: {
      fontSize: '45px',
      fontWeight: '600',
    },
  },
});

const customConfig = defineConfig({
  theme: {
    textStyles,
    tokens: {
      colors: {
        ...COLORS,
        primary: {
          value: '#334195',
        },
        primary_2: {
          value: '#7c83b0',
        },
        primary_3: {
          value: '#a8adcd',
        },
        primary_4: {
          value: '#f8f9fc',
        },
        secondary: {
          value: '#4d8b31',
        },
        secondary_2: {
          value: '#ffc800',
        },
        main: {
          white_1: {
            value: '#ffffff',
          },
          black_1: {
            value: '#000000',
          },
          black_2: {
            value: '#666666',
          },
          black_3: {
            value: '#868686',
          },
          black_4: {
            value: '#a3a3a3',
          },
          black_5: {
            value: '#c3c2c2',
          },
          black_6: {
            value: '#e1e1eb',
          },
          line: {
            value: '#f2f3f5',
          },
        },
      },
    },

    semanticTokens: {
      colors: {
        primary: {
          solid: { value: '{colors.primary}' },
          // contrast: { value: '{colors.primary}' },
          // fg: { value: '{colors.primary}' },
          // muted: { value: '{colors.primary}' },
          // subtle: { value: '{colors.primary}' },
          // emphasized: { value: '{colors.primary}' },
          // focusRing: { value: '{colors.primary}' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
