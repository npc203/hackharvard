import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import TextLoop from "react-text-loop";
import { Link } from "@chakra-ui/layout";
const Hero = () => {
  return (
    <HStack bg={useColorModeValue("brand.500")} px={8} py={24} mx="auto">
      <Box
        paddingLeft="150"
        paddingTop="70"
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <Box width="100">
          <Image paddingTop="10" paddingBottom="10" src="/images/FitGame.png" />
        </Box>

        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#47586B">
          <TextLoop>
            <span>
              The new era of gaming which can help you stay fit and healthy.
            </span>
            <span>Play your favourite games with the power of your body.</span>

            <span>
              Get personalized statistics about your health and fitness.
            </span>
          </TextLoop>
        </chakra.p>
        <br />
        <br />

        <HStack spacing="5">
          <Link href="/buy">
            <Button
              paddingY="7"
              display="inline-flex"
              rounded="md"
              shadow="md"
              bgGradient="linear(to-r, #e3072e , #ff7b43)"
              _hover={{
                bgGradient: "linear(to-l, #ff7b43, #e3072e)",
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
                Create room
              </chakra.a>
            </Button>
          </Link>
          <Link href="seller/seller1">
            <Button
              marginStart="10"
              paddingY="7"
              display="inline-flex"
              rounded="md"
              shadow="md"
              bgGradient="linear(to-r, #e3072e , #ff7b43)"
              _hover={{
                bgGradient: "linear(to-l, #ff7b43, #e3072e)",
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
                Join room
              </chakra.a>
            </Button>
          </Link>
        </HStack>
        <Image paddingTop="10" src="/images/MadeAtWyo.png" />
      </Box>
      <Box
        paddingTop="30"
        w={{ base: "full", md: 10 / 16 }}
        mx="auto"
        textAlign="center"
      >
        <Image
          w="70%"
          rounded="lg"
          src="/images/octosquid.png"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </HStack>
  );
};

export default Hero;
