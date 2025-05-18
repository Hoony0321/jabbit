import ReactQueryProvider from './ReactQueryProvider';
import { ChakraStyleProvider } from './ChakraProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ChakraStyleProvider forcedTheme="light">{children}</ChakraStyleProvider>
    </ReactQueryProvider>
  );
}

export default Provider;
