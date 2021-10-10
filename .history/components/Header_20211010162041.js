import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Image,
  useToast,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
          <Button
            onClick={() =>
              toast({
                position: "bottom-left",
                render: () => (
                  <Box color="black" p={3} bg="rgba(255, 122, 117, 1)">
                    Room code copied to clipboard
                  </Box>
                ),
              })
            }
            backgroundColor="#000000"
            mr="4"
          >
            Room code : aaaaaa
          </Button>
          <Button backgroundColor="black" mr="4">
            Leave room
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
