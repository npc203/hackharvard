import React from "react";
import { Flex, Spacer, Box, Button, Heading, Image } from "@chakra-ui/react";

export default function Header() {
  const toast = useToast();
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
          <Button
            onClick={() =>
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            }
            backgroundColor="black"
            mr="4"
          >
            Room code : aaaaaa
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
