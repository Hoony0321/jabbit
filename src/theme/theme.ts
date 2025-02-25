import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTextStyles,
} from '@chakra-ui/react';

export const textStyles = defineTextStyles({
  sm: {
    value: {
      fontSize: '14px',
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
          line: {
            value: '#f2f3f5',
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
