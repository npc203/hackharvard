import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  GridItem,
  VisuallyHidden,
  Input,
  Button,
  Stack,
  Icon,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";

const WaitingScreen = () => {
  return (
    <Box px={4} py={32} mx="auto" w="100%">
      <Box w="100%" textAlign={{ base: "left", md: "center" }} mx="auto">
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="black"
          lineHeight="shorter"
        >
          Waiting for others to join...
        </chakra.h1>
        <Center>
          <Box paddingLeft="20" boxSize="sm">
            <Image src="/images/run.gif" alt="Loading" />
          </Box>
        </Center>
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="black"
          lineHeight="shorter"
        >
          Waiting for others to join...
        </chakra.h1>
      </Box>
    </Box>
  );
};

export default WaitingScreen;
