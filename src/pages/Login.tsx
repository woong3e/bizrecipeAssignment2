import React, { useState, ChangeEvent, useEffect } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LogoText } from "../assets/images/logo_text.svg";
import { ReactComponent as HorizontalLine } from "../assets/images/horizontal_line.svg";
import { ReactComponent as EyeInvisible } from "../assets/images/eyeInvisible.svg";
import { ReactComponent as CapsLockAlertIcon } from "../assets/images/tooltipIcon.svg";
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
  InputRightElement,
  InputGroup,
  Tooltip,
} from "@chakra-ui/react";
// import CapsLockAlert from "../components/CapsLockAlert";
const Login = () => {
  useEffect(() => {
    localStorage.setItem("email", "test@test.com");
    localStorage.setItem("password", "Test123!@");
  }, []);

  interface Inputs {
    email: string;
    password: string;
  }

  const [inputs, setInputs] = useState<Inputs>({
    email: "",
    password: "",
  });
  const [isTypePassword, setIsTypePassword] = useState<boolean>(true);
  const [isCapsLockOnEmail, setIsCapsLockOnEmail] = useState<boolean>(false);
  const [isCapsLockOnPassword, setIsCapsLockOnPassword] =
    useState<boolean>(false);

  const { email, password } = inputs;

  interface Valid {
    emailValid: boolean;
    passwordValid: boolean;
  }

  const userValidation: Valid = {
    emailValid: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(email),
    passwordValid: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,12}$/.test(password),
  };
  const { emailValid, passwordValid } = userValidation;

  const alertMsg = {
    emailMsg: userValidation.emailValid ? "" : "이메일을 다시 확인해주세요.",
    passwordMsg: userValidation.passwordValid
      ? ""
      : "영소/대문자, 숫자 포함. 필수 6~12자형식입니다.",
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
  };

  const handleOnClick = () => {
    setIsTypePassword((prev) => !prev);
  };

  const checkCapsLockEmail = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.getModifierState("CapsLock")
      ? setIsCapsLockOnEmail(true)
      : setIsCapsLockOnEmail(false);
    console.log(isCapsLockOnEmail);
  };

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
        gap={"7px"}
        marginTop={"52px"}
        marginBottom={"10px"}
      >
        <Tooltip
          hasArrow
          placement="right"
          label="Caps lock 버튼이 켜져있습니다."
          color={"black"}
          backgroundColor={"white"}
          boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.25)"}
          height={"40px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginLeft={"8px"}
          isOpen={isCapsLockOnEmail ? true : false}
        >
          <Input
            width="100%"
            placeholder="이메일을 입력하세요."
            padding="8px 12px"
            onChange={handleOnChange}
            name="email"
            _focus={
              emailValid
                ? {
                    boxShadow: "0 0 0 1px primary",
                    border: "1px solid primary",
                  }
                : {
                    boxShadow: "0 0 0 1px red",
                    border: "1px solid red",
                  }
            }
            onKeyUp={checkCapsLockEmail}
          />
        </Tooltip>
        <Text
          width={"100%"}
          height={"22px"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"22px"}
          color={"rgba(215, 0, 21, 1)"}
        >
          {alertMsg.emailMsg}
        </Text>
        <InputGroup>
          <Tooltip
            hasArrow
            placement="right"
            label="Caps lock 버튼이 켜져있습니다."
            color={"black"}
            backgroundColor={"white"}
            boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.25)"}
            height={"40px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            marginLeft={"8px"}
            isOpen={isCapsLockOnEmail ? true : false}
          >
            <Input
              type={isTypePassword ? "password" : "text"}
              width="100%"
              placeholder="비밀번호를 입력하세요."
              padding="8px 12px"
              onChange={handleOnChange}
              name="password"
              _focus={
                passwordValid
                  ? {
                      boxShadow: "0 0 0 1px primary",
                      border: "1px solid primary",
                    }
                  : {
                      boxShadow: "0 0 0 1px red",
                      border: "1px solid red",
                    }
              }
              onKeyUp={checkCapsLockEmail}
            />
          </Tooltip>
          <InputRightElement
            onClick={handleOnClick}
            _hover={{ cursor: "pointer" }}
          >
            <EyeInvisible
              width={"16px"}
              height={"16px"}
              fill={isTypePassword ? "black" : "rgba(38, 142, 255, 1)"}
            />
          </InputRightElement>
        </InputGroup>
        <Text
          width={"100%"}
          height={"22px"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"22px"}
          color={"rgba(215, 0, 21, 1)"}
        >
          {alertMsg.passwordMsg}
        </Text>
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
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "primary",
            }}
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
        <Text
          color={"primary"}
          fontSize={"14px"}
          fontWeight={"400"}
          lineHeight={"22px"}
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          회원가입
        </Text>
      </Flex>
    </Container>
  );
};

export default Login;
