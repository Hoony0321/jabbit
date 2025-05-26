import ReactQueryProvider from './ReactQueryProvider';
import { ChakraStyleProvider } from './ChakraProvider';
import MixPanelProvider from './MixPanelProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MixPanelProvider>
      <ReactQueryProvider>
        <ChakraStyleProvider forcedTheme="light">
          {children}
        </ChakraStyleProvider>
      </ReactQueryProvider>
    </MixPanelProvider>
  );
}

export default Provider;
