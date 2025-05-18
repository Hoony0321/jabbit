'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/src/client/theme/theme';
import {
  ColorModeProvider,
  ColorModeProviderProps,
} from '@/src/client/components/ui/color-mode';

export function ChakraStyleProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
