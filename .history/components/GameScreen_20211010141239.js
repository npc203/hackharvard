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
        <VStack>
        <Box w="320px" h="420" bg="black">

          <Box w="300px" h="400" bg="black">
            <Center padding="1.5">Arslan</Center>
          </Box>
          <Box w="300px" h="200" bg="black">
            <Center padding="1.5">Arslan</Center>
          </Box>
        </VStack>
        <Spacer />
        <Box w="300px" h="400" bg="black">
          <Center padding="1.5">Arslan</Center>
        </Box>
        <Spacer />{" "}
        <Box w="300px" h="400" bg="black">
          <Center padding="1.5">Arslan</Center>
        </Box>
        <Spacer />{" "}
        <Box w="300px" h="400" bg="black">
          <Center padding="1.5">Arslan</Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default GameScreen;
