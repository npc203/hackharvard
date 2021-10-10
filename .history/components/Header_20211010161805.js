import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Image,
  useToast,
} from "@chakra-ui/react";

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
            nClick={() =>
              toast({
                position: "bottom-left",
                render: () => (
                  <Box color="white" p={3} bg="blue.500">
                    Hello World
                  </Box>
                ),
              })
            }
          >
            Room code : aaaaaa
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
