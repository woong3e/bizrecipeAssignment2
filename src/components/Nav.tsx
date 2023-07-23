import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Center,
  Container,
  Flex,
  Flex as Tabs,
  Button as MapWrap,
  Button as BoardWrap,
  Link,
} from "@chakra-ui/react";
import { ReactComponent as Logo } from "../assets/images/logo_nav.svg";
import { ReactComponent as MapIcon } from "../assets/images/map_icon.svg";
import { ReactComponent as MapText } from "../assets/images/map_text.svg";
import { ReactComponent as BoardIcon } from "../assets/images/board_icon.svg";
import { ReactComponent as BoardText } from "../assets/images/board_text.svg";

const Nav = () => {
  const navigate = useNavigate();
  const [fill, setFill] = useState<boolean>(true);
  const isFillTrue = () => {
    setFill(true);
  };
  const isFillFalse = () => {
    setFill(false);
  };
  return (
    <Flex
      padding="0 16px 0 16px"
      boxShadow="0px 4px 4px 0px #00000040"
      gap="10px"
      justify={"space-between"}
    >
      <Box _hover={{ cursor: "pointer" }}>
        <Logo width="106px" height="46px" onClick={() => navigate("/login")} />
      </Box>
      <Tabs gap={"32px"} justify={"center"} align={"center"}>
        <MapWrap
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"4px"}
          backgroundColor={"white"}
          _hover={{ backgroundColor: "white" }}
          onClick={() => {
            isFillTrue();
            navigate("/map");
          }}
        >
          <MapIcon
            width={"12.44px"}
            height={"12.44px"}
            fill={fill ? "tertiary" : "quaternary"}
          />
          <MapText
            width={"45px"}
            height={"22px"}
            fill={fill ? "tertiary" : "quaternary"}
          />
        </MapWrap>
        <BoardWrap
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          _hover={{ backgroundColor: "white" }}
          onClick={() => {
            isFillFalse();
            navigate("/board");
          }}
        >
          <BoardIcon
            width={"14px"}
            height={"14px"}
            fill={fill ? "quaternary" : "tertiary"}
          />
          <BoardText
            width={"59px"}
            height={"22px"}
            fill={fill ? "quaternary" : "tertiary"}
          />
        </BoardWrap>
      </Tabs>
      <Box width={"106px"} />
    </Flex>
  );
};

export default Nav;
