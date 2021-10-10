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
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 0.5)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text>Guru</Text>
            </VStack>
          </Center>
        </Box>
        <Spacer />
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 1)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text>Guru</Text>
            </VStack>
          </Center>
        </Box>
        <Spacer />{" "}
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 1)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text>Guru</Text>
            </VStack>
          </Center>
        </Box>
        <Spacer />{" "}
        <Box w="320px" h="660" bg="rgba(255, 122, 117, 1)" borderRadius="10">
          <Center>
            <VStack>
              <Box borderRadius="10" mt="2" w="300px" h="400" bg="black">
                <Center padding="1.5">Game screen</Center>
              </Box>
              <Box borderRadius="10" w="300px" h="200" bg="black">
                <Center padding="1.5">Video feed</Center>
              </Box>
              <Text>Guru</Text>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default GameScreen;
