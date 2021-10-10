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
          <Button backgroundColor="black" mr="4">
            Turn on : voice
          </Button>
          <Button backgroundColor="black" mr="4">
            Leave room
          </Button>
          <Button backgroundColor="black" mr="4">
            Copy room code
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
