import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as LogoText } from "../assets/images/logo_text.svg";
import { ReactComponent as HorizontalLine } from "../assets/images/horizontal_line.svg";
import { ReactComponent as EyeInvisible } from "../assets/images/eyeInvisible.svg";
import { ReactComponent as CloseCircle } from "../assets/images/closeCircle.svg";
import {
  Box,
  Checkbox,
  Container,
  Input,
  Flex,
  Flex as LogoWrap,
  Flex as InputWrap,
  Flex as HorizontalLineWrap,
  Text,
  InputRightElement,
  InputGroup,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
// import CapsLockAlert from "../components/CapsLockAlert";
const Login = () => {
  const navigate = useNavigate();

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const { isOpen, onOpen, onClose } = useDisclosure();

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
  };

  const checkCapsLockPassword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.getModifierState("CapsLock")
      ? setIsCapsLockOnPassword(true)
      : setIsCapsLockOnPassword(false);
  };

  const clickCapsLockEmail = (e: React.MouseEvent<HTMLInputElement>) => {
    e.getModifierState("CapsLock") && setIsCapsLockOnEmail(true);
    setIsCapsLockOnPassword(false);
  };
  const clickCapsLockPassword = (e: React.MouseEvent<HTMLInputElement>) => {
    e.getModifierState("CapsLock") && setIsCapsLockOnPassword(true);
    setIsCapsLockOnEmail(false);
  };
  const handleLoginBtn = () => {
    const email = "test@test.com";
    const password = "Test123!@";
    if (inputs.email === email && inputs.password === password) {
      localStorage.setItem("token", "asdf");
      navigate("/board");
    } else {
      setIsModalOpen(true);
    }
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
      <LogoWrap
        justify="center"
        align="center"
        direction="column"
        gap="12px"
        _hover={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
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
            name="email"
            width="100%"
            placeholder="이메일을 입력하세요."
            padding="8px 12px"
            _focus={
              email.length > 0 &&
              !emailValid && {
                boxShadow: "0px 0px 0px 1px red",
                border: "1px solid red",
              }
            }
            onChange={handleOnChange}
            onClick={clickCapsLockEmail}
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
          {email.length > 0 && alertMsg.emailMsg}
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
            isOpen={isCapsLockOnPassword ? true : false}
          >
            <Input
              name="password"
              type={isTypePassword ? "password" : "text"}
              width="100%"
              placeholder="비밀번호를 입력하세요."
              padding="8px 12px"
              onChange={handleOnChange}
              _focus={
                password.length > 0 &&
                !passwordValid && {
                  boxShadow: "0px 0px 0px 1px red",
                  border: "1px solid red",
                }
              }
              onClick={clickCapsLockPassword}
              onKeyUp={checkCapsLockPassword}
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
          {password.length > 0 && alertMsg.passwordMsg}
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
        onClick={handleLoginBtn}
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
      <Modal onClose={onClose} isOpen={isModalOpen} isCentered>
        <ModalOverlay />
        <ModalContent width={"408px"} height={"156px"}>
          <ModalHeader
            display={"flex"}
            gap={"8px"}
            padding={"12px 24px 12px 24px"}
          >
            <CloseCircle width={"24px"} height={"24px"} />
            로그인 불가
          </ModalHeader>
          <ModalCloseButton size={"sm"} top={"20px"} left={"376px"} />
          <ModalBody
            whiteSpace={"normal"}
            height={"44px"}
            fontSize={"14px"}
            fontWeight={"400"}
          >
            존재하지 않는 이메일일입니다.
            <br />
            이메일을 확인하시거나 새로운 계정을 생성해주세요.
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              bg={"primary"}
              color={"white"}
              width={"58px"}
              height={"32px"}
              padding={"4px 15px"}
            >
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Login;
