import React from "react";
import { Flex, Spacer, Box, Button, Heading, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Flex padding="5">
        <Box width="sm">
          <Image src="/images/FitGame.png" />
        </Box>
        <Spacer />
        <Box>
          <Button backgroundColor="black" mr="4">
            Chat
          </Button>
          <Button backgroundColor="black">Turn on : voice</Button>
          
        </Box>
      </Flex>
    </div>
  );
}
