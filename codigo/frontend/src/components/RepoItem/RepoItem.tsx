import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import Icon from "@chakra-ui/icon"
import { Box, Flex, Spacer, Text } from "@chakra-ui/layout"
import { colors } from "../../styles/customTheme"
import { RepoItemProps } from "../../shared/interfaces/RepoItemProps"


export const RepoItem = (props: RepoItemProps) => {

    const { colorMode } = useColorMode();
    const color = (light: boolean) => light ? colors.light.Nord4 : colors.dark.Nord2
    const isLight = () => colorMode === "light"
    const textColor = color(!isLight());
    const bgcolor = color(isLight());

    return (
        <>
            <Box borderWidth="1px" borderRadius="lg"
                _hover={{ transition: "0.3s ease-out", boxShadow: "dark-lg" }}
                overflow="hidden" display="flex" flexDirection="column" p="4" bg={bgcolor} width="sm" m="4">
                <Box display="flex">
                    <Box>
                        <Text mt="1"
                            fontWeight="extrabold"
                            as="h3"
                            lineHeight="tight"
                            color={textColor}
                            isTruncated>
                            {props?.title}

                        </Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button as="a" href={props?.link}
                            _hover={{}} background={colors.aurora.Nord14}
                            color={colors.light.Nord6}>
                            Acessar
                                </Button>
                    </Box>
                </Box>
                <Flex>
                    <Icon
                        as={props.icon}
                        mr="5px"
                        boxSize="24px"
                    />
                    <Text mt="1"
                        lineHeight="tight"
                        color={textColor}
                        margin="auto 0"
                        isTruncated>
                        {`${props?.org}/${props.logicalName}`}
                    </Text>
                </Flex>

            </Box>
        </>
    )
}