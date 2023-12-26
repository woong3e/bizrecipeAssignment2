import { Flex, Container } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Container width="100vw" position="absolute" bottom="0" left="0" right="0">
      <Flex
        height="22px"
        justify="center"
        align="center"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0, 0, 0, 0.25)"
      >
        Copyright ©2023 Produced by OntheMap
      </Flex>
    </Container>
  );
};

export default Footer;
