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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Text,
} from "@chakra-ui/react";
import TextLoop from "react-text-loop";
import { Link } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const Hero = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack bg={useColorModeValue("brand.500")} px={8} py={10} mx="auto">
      <Box
        paddingLeft="150"
        paddingTop="10"
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <Box width="xl">
          <Image src="/images/FitGame.png" />
        </Box>

        <chakra.p mb="3" fontSize={{ base: "lg", md: "xl" }} color="#000000">
          <TextLoop>
            <span>
              The new era of gaming which can help you stay fit and healthy.
            </span>
            <span>Play your favourite games when you perform exercises.</span>

            <span>
              Get personalized statistics about your health and fitness.
            </span>
          </TextLoop>
        </chakra.p>
        <br />
        <br />

        <HStack spacing="5">
          <Button
            paddingY="7"
            display="inline-flex"
            rounded="md"
            shadow="md"
            bgGradient="linear(to-r, #e3072e , #ff7b43)"
            _hover={{
              bgGradient: "linear(to-l, #ff7b43, #e3072e)",
            }}
            onClick={onOpen}
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
        </HStack>
        <Image paddingTop="20" src="/images/HackHarvard.png" />
      </Box>
      <Box w={{ base: "full", md: 10 / 16 }} mx="auto" textAlign="center">
        <motion.div
          initial={{ rotate: 180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            w="75%"
            rounded="lg"
            src="/images/octosquid.png"
            alt="Hellonext feedback boards software screenshot"
          />
        </motion.div>
      </Box>

      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay />

        <ModalContent bgGradient="linear(to-r, #e3072e , #ff7b43)">
          <ModalHeader>Create New Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {" "}
            <Text mb="8px">Value: </Text>
            <Input
              borderRadius="20"
              borderColor="white"
              placeholder="Here is a sample placeholder"
              size="sm"
            />
          </ModalBody>
          <ModalFooter>
            <Button backgroundColor="black" mr={3} onClick={onClose}>
              Create room
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default Hero;
