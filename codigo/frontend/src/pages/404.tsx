import { useColorMode } from "@chakra-ui/color-mode";
import { Center, Flex, Text } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { RiHome2Fill } from "react-icons/ri";
import { colors } from ".././styles/customTheme";

const LIGHT = "light";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Center>
        <Flex
          flexDirection="column"
          textAlign="center"
          fontFamily="Alatsi"
          alignItems="center"
          boxShadow="2xl"
          rounded="md"
          p={16}
          borderRadius={20}
          bgColor={
            colorMode === LIGHT
              ? `${colors.light.Nord4}`
              : `${colors.dark.Nord1}`
          }
        >
          <Image
            boxSize="80px"
            src={
              colorMode === LIGHT
                ? "/assets/icon/dark-circle.svg"
                : "/assets/icon/light-circle.svg"
            }
            alt="Logo"
          />
          <Text mt={5} fontSize="4xl" fontWeight="thin">
            404
          </Text>
          <Text fontSize="9xl">Opsss...</Text>
          <Text fontSize="5xl" fontWeight="light">
            P&aacute;gina n&atilde;o encontrada!
          </Text>
          <Link href="/">
            <Button
              size="lg"
              fontSize="3xl"
              fontWeight={500}
              borderRadius={15}
              mt={5}
              bgColor={
                colorMode === LIGHT
                  ? `${colors.light.Nord4}`
                  : `${colors.dark.Nord1}`
              }
              textColor={
                colorMode === LIGHT
                  ? `${colors.dark.Nord2}`
                  : `${colors.light.Nord6}`
              }
              _hover={{
                backgroundColor:
                  colorMode === LIGHT
                    ? `${colors.light.Nord5}`
                    : `${colors.dark.Nord2}`,
              }}
            >
              <RiHome2Fill />
            </Button>
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default Page404;
