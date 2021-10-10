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
import Header from "./Header";

const GameScreen = () => {
  return (
    <Box px={4} mx="auto" w="100%">
      <Header />
      <Flex padding="10">
        <Box w="320px" h="660" bg="gray" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text fontWeight="bold" color="black">
                Guru (You)
              </Text>
            </VStack>
          </Center>
        </Box>
        <Spacer />
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 0.5)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                {/* <Center padding="1.5">Game screen</Center> */}
                <Image borderRadius="10" src="/images/stats.png" />
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text fontWeight="bold" color="black">
                Guru
              </Text>
            </VStack>
          </Center>
        </Box>
        <Spacer />{" "}
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 0.5)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text fontWeight="bold" color="black">
                Guru
              </Text>
            </VStack>
          </Center>
        </Box>
        <Spacer />{" "}
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 0.5)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text fontWeight="bold" color="black">
                Guru
              </Text>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default GameScreen;
