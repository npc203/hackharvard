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
  useDisclosure,
  Input,
} from "@chakra-ui/react";

export default function Header() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Flex padding="5">
        <Box width="sm">
          <Image src="/images/FitGame.png" />
        </Box>
        <Spacer />
        <Box>
          <Button ref={btnRef} onClick={onOpen} backgroundColor="black" mr="4">
            Chat
          </Button>
          <Button backgroundColor="black" mr="4">
            Voice : on
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
            onHove
          >
            Room code : aaaaaa
          </Button>
          <Button backgroundColor="black" mr="4">
            Leave room
          </Button>
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="rgba(255, 122, 117, 1)">
          <DrawerCloseButton />
          <DrawerHeader>Chat</DrawerHeader>

          <DrawerBody>
            You : hello <br />
          </DrawerBody>

          <DrawerFooter>
            <Input
              borderColor="white"
              textColor="white"
              placeholder="Type here..."
            />
            <Button ml="5" backgroundColor="black">
              Send
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}