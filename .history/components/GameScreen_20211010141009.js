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

const GameScreen = () => {
  return (
    <Box px={4} py={32} mx="auto" w="100%">
      <Flex padding="10">
        {" "}
        <Box w="300px" h="10" bg="black">
          <Center padding="1.5">Guru</Center>
        </Box>
        <Spacer />
        <Box w="300px" h="10" bg="black">
          <Center padding="1.5">Sam</Center>
        </Box>
        <Spacer />{" "}
        <Box w="300px" h="10" bg="black">
          <Center padding="1.5">Bhuvi</Center>
        </Box>
        <Spacer />{" "}
        <Box w="300px" h="300" bg="black">
          <Center padding="1.5">Arslan</Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default GameScreen;
