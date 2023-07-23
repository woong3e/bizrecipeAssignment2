import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LogoText } from "../assets/images/logo_text.svg";
import { ReactComponent as HorizontalLine } from "../assets/images/horizontal_line.svg";
import {
  Center,
  Box,
  Checkbox,
  Container,
  Input,
  Flex as LogoWrap,
  Flex as InputWrap,
  Flex as HorizontalLineWrap,
  Flex,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  localStorage.setItem("email", "test@test.com");
  localStorage.setItem("pwd", "Test123!@");
  return (
    <Container
      display="flex"
      flexDirection="column"
      width="360px"
      height="471px"
      marginTop="115px"
      padding="0"
    >
      <LogoWrap justify="center" align="center" direction="column" gap="12px">
        <Logo width="64px" height="64px" />
        <LogoText width="236px" height="29px" />
      </LogoWrap>
      <InputWrap
        flexDirection={"column"}
        gap={"26px"}
        marginTop={"52px"}
        marginBottom={"10px"}
      >
        <Input
          width="100%"
          placeholder="이메일을 입력하세요."
          padding="8px 12px"
        />
        <Input
          type="password"
          width="100%"
          placeholder="비밀번호를 입력하세요."
          padding="8px 12px"
          _focus={{ outline: "secondary" }}
        />
        <Flex
          fontSize={"14px"}
          fontWeight={"400"}
          lineHeight={"22px"}
          justify={"space-between"}
        >
          <Flex>
            <Checkbox marginRight={"10px"} />
            <Text width={"68px"}>자동 로그인</Text>
          </Flex>
          <Text
            width={"131px"}
            _hover={{ cursor: "pointer" }}
            color={"secondary"}
          >
            아이디 / 비밀번호 찾기
          </Text>
        </Flex>
      </InputWrap>
      <Button
        height="48px"
        backgroundColor={"primary"}
        _hover={{ backgroundColor: "primary" }}
        color={"white"}
        gap={"10px"}
        padding={"6px 15px 6px 15px"}
        margin={"10px 0px"}
      >
        로그인
      </Button>
      <HorizontalLineWrap
        align="center"
        justify="center"
        gap="8px"
        margin={"10px 0px"}
      >
        <Box>
          <HorizontalLine width={"100%"} height={"22px"} />
        </Box>
        <Text
          display={"block"}
          color={"secondary"}
          fontSize={"14px"}
          fontWeight={"400"}
          lineHeight={"22px"}
          height={"22px"}
          width={"70%"}
        >
          또는
        </Text>
        <Box>
          <HorizontalLine width={"100%"} height={"22px"} />
        </Box>
      </HorizontalLineWrap>
      <Flex justify={"center"} width={"100%"} gap={"12px"} marginTop={"12px"}>
        <Text color={"secondary"}>브랜드 계정이 없으신가요?</Text>
        <Text color={"primary"}>회원가입</Text>
      </Flex>
    </Container>
  );
};

export default Login;
