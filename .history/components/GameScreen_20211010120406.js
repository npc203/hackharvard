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
          <Box w="170px" h="10" bg="black" borderRadius="20">
            <Center padding="1.5">Guru</Center>
          </Box>
          <Spacer />
          <Box w="170px" h="10" bg="black" borderRadius="20">
            <Center padding="1.5">Sam</Center>
          </Box>
          <Spacer />{" "}
          <Box w="170px" h="10" bg="black" borderRadius="20">
            <Center padding="1.5">Bhuvi</Center>
          </Box>
          <Spacer />{" "}
          <Box w="170px" h="10" bg="black" borderRadius="20">
            <Center padding="1.5">Arslan</Center>
          </Box>
        </Flex>
      </Box>
      <Center mt="10">
        <Button
          paddingY="7"
          display="inline-flex"
          rounded="md"
          shadow="md"
          bgGradient="linear(to-r, #e3072e , #ff7b43)"
          _hover={{
            bgGradient: "linear(to-r, #ff7b43, #e3072e)",
          }}
        >
          <chakra.a
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            color={useColorModeValue("white")}
          >
            Start game
          </chakra.a>
        </Button>
      </Center>
    </Box>
  );
};

export default GameScreen;
