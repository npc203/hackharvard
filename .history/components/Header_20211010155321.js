import React from "react";
import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Flex padding="5">
        <Box width="xl">
          <Image src="/images/FitGame.png" />
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>
    </div>
  );
}
