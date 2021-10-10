import Head from "next/head";
import { VStack } from "@chakra-ui/layout";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

import { Spacer, Box, Button, Heading } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fit Game</title>
        <meta name="description" content="An escrow system build on Stellar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex position="fixed" w="100%" h="100%"></Flex>

      <VStack
        w="100%"
        background="linear-gradient(-28deg, rgba(255, 122, 117, 1) 2%, rgba(255, 218, 217, 1) 35%, rgba(255, 218, 217, 1) 51%, rgba(255, 122, 117, 071) 68%, rgba(255, 122, 117, 1) 92%)"
        // backgroundImage={useColorModeValue('url(/images/v2/lightbg.png)', 'url(/images/v2/darkbg.png)')}
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundRepeat="no-repeat"
      >
        <Hero />
      </VStack>
    </div>
  );
}
