import React from "react";
import {
  Flex,
  Flex as StoreWrap,
  Flex as HeaderWrap,
  Flex as SecondBox,
  Flex as SearchWrap,
  Flex as StateWrap,
  Flex as ThirdBox,
  Flex as FoundingWrap,
  Flex as InputWrap,
  Text,
  Select,
  Input,
  CheckboxGroup,
  Checkbox,
  Stack,
  Flex as ButtonWrap,
  Button,
} from "@chakra-ui/react";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";

const Bsns = () => {
  return (
    <StoreWrap
      flexDirection={"column"}
      width={"1180px"}
      height={"192px"}
      margin={"8px 8px 0px 8px"}
      border={"1px solid rgba(140, 140, 140, 1)"}
      boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.75)"}
      padding={"16px"}
      gap={"11px"}
    >
      <HeaderWrap
        gap={"4px"}
        borderBottom={"1px solid black"}
        width={"1148px"}
        height={"31px"}
      >
        <Text
          width={"37px"}
          height={"23px"}
          fontWeight={"700"}
          fontSize={"20px"}
          lineHeight={"23.44px"}
          color={"rgba(0,0,0,0.8"}
        >
          상권
        </Text>
        <Text
          width={"40px"}
          height={"23px"}
          fontWeight={"400"}
          fontSize={"16px"}
          lineHeight={"23.17px"}
          color={"rgba(0, 0, 0, 0.5)"}
        >
          Bsns
        </Text>
      </HeaderWrap>
      <SecondBox width={"1091px"} height={"32px"} gap={"52px"}>
        <SearchWrap
          gap={"12px"}
          width={"561px"}
          height={"32px"}
          align={"center"}
        >
          <Text
            width={"45px"}
            height={"23px"}
            fontWeight={"700"}
            fontSize={"16px"}
            lineHeight={"23.17px"}
            color={"rgba(0, 0, 0, 0.5)"}
          >
            검색어
          </Text>
          <Flex flexDirection={"row"} gap={"4px"}>
            <Select
              width={"120px"}
              height={"32px"}
              fontWeight={"400"}
              fontSize={"16px"}
              lineHeight={"22px"}
            >
              <option value="store">상권명</option>
              <option value="representative">대표자명</option>
            </Select>
            <Input
              placeholder="상권 명을 입력해주세요."
              width={"380px"}
              height={"32px"}
            />
          </Flex>
        </SearchWrap>
      </SecondBox>
    </StoreWrap>
  );
};

export default Bsns;
