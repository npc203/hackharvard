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
  Text,
  Image,
  Center,
  Spacer,
} from "@chakra-ui/react";

const GameScreen = () => {
  return (
    <Box px={4} py={32} mx="auto" w="100%">
      <Flex padding="10">
        <Box w="320px" h="660" bg="red" marginR>
          <Center>
            <VStack>
              <Box mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Arslan</Center>
              </Box>
              <Box w="300px" h="200" bg="black">
                <Center padding="1.5">Arslan</Center>
              </Box>
              <Text>Hello</Text>
            </VStack>
          </Center>
        </Box>
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
