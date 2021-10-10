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
} from "@chakra-ui/react";

const WaitingScreen = () => {
  return (
    <Box px={4} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color="black"
          lineHeight="shorter"
        >
          Waiting for others to join
        </chakra.h1>

        <SimpleGrid
          as="form"
          w={{ base: "full", md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Input
              mt={0}
              size="lg"
              type="email"
              placeholder="Enter your email..."
              required="true"
            />
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
            cursor="pointer"
          >
            Get Started
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="gray.600"
        ></Stack>
      </Box>
    </Box>
  );
};

export default WaitingScreen;
