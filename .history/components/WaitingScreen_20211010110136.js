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
      </Box>
      <Center>
        <Box boxSize="sm">
          <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        </Box>
      </Center>
    </Box>
  );
};

export default WaitingScreen;