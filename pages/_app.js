import Head from "next/head";
import { VStack } from "@chakra-ui/layout";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
