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
  Spacer,
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
          <Image src="/images/run.gif" alt="Loading" />
        </Center>
        <chakra.h1
          mt="10"
          mb={3}
          fontSize="xl"
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="black"
          lineHeight="shorter"
        >
          Players inside the room
        </chakra.h1>
        <Flex padding="10">
          {" "}
          <Box w="170px" h="10" bg="red.500">
            <Center padding="1.5">Guru</Center>
          </Box>
          <Spacer />
          <Box w="170px" h="10" bg="red.500">
            <Center padding="1.5">Sam</Center>
          </Box>
          <Spacer />{" "}
          <Box w="170px" h="10" bg="red.500">
            <Center padding="1.5">Bhuvi</Center>
          </Box>{" "}
          <Spacer />{" "}
          <Box w="170px" h="10" bg="red.500">
            <Center padding="1.5">Guru</Center>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WaitingScreen;
