import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
