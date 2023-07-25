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

const Store = () => {
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
          매장
        </Text>
        <Text
          width={"40px"}
          height={"23px"}
          fontWeight={"400"}
          fontSize={"16px"}
          lineHeight={"23.17px"}
          color={"rgba(0, 0, 0, 0.5)"}
        >
          Store
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
              <option value="store">매장명</option>
              <option value="representative">대표자명</option>
            </Select>
            <Input
              placeholder="매장 명을 입력해주세요."
              width={"380px"}
              height={"32px"}
            />
          </Flex>
        </SearchWrap>
        <StateWrap width={"478px"} height={"23px"} gap={"28px"}>
          <Text
            width={"30px"}
            height={"23px"}
            fontWeight={"700"}
            fontSize={"16px"}
            lineHeight={"23.17px"}
            color={"rgba(0, 0, 0, 0.5)"}
          >
            상태
          </Text>
          <CheckboxGroup defaultValue={["전체"]}>
            <Stack spacing={[1, "5px"]} direction={["column", "row"]}>
              <Checkbox
                value="전체"
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "rgba(31, 31, 31, 1)",
                    border: "rgba(31, 31, 31, 1)",
                  },
                }}
                _hover={{
                  "& .chakra-checkbox__control": {
                    background: "#rgba(0,0,0,1)",
                  },
                }}
              >
                전체
              </Checkbox>
              <Checkbox
                value="입점"
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "rgba(31, 31, 31, 1)",
                    border: "rgba(31, 31, 31, 1)",
                  },
                }}
                _hover={{
                  "& .chakra-checkbox__control": {
                    background: "#rgba(0,0,0,1)",
                  },
                }}
              >
                입점
              </Checkbox>
              <Checkbox
                value="휴점"
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "rgba(31, 31, 31, 1)",
                    border: "rgba(31, 31, 31, 1)",
                  },
                }}
                _hover={{
                  "& .chakra-checkbox__control": {
                    background: "#rgba(0,0,0,1)",
                  },
                }}
              >
                휴점
              </Checkbox>
              <Checkbox
                value="폐점"
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "rgba(31, 31, 31, 1)",
                    border: "rgba(31, 31, 31, 1)",
                  },
                }}
                _hover={{
                  "& .chakra-checkbox__control": {
                    background: "#rgba(0,0,0,1)",
                  },
                }}
              >
                폐점
              </Checkbox>
              <Checkbox
                value="대기"
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "rgba(31, 31, 31, 1)",
                    border: "rgba(31, 31, 31, 1)",
                  },
                }}
                _hover={{
                  "& .chakra-checkbox__control": {
                    background: "#rgba(0,0,0,1)",
                  },
                }}
              >
                대기
              </Checkbox>
              <Checkbox
                value="기타"
                _checked={{
                  "& .chakra-checkbox__control": {
                    background: "rgba(31, 31, 31, 1)",
                    border: "rgba(31, 31, 31, 1)",
                  },
                }}
                _hover={{
                  "& .chakra-checkbox__control": {
                    background: "#rgba(0,0,0,1)",
                  },
                }}
              >
                기타
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </StateWrap>
      </SecondBox>
      <ThirdBox width={"522px"} height={"32px"} gap={"12px"}>
        <Text
          width={"45px"}
          height={"23px"}
          fontWeight={"700"}
          fontSize={"16px"}
          lineHeight={"23.17px"}
          color={"rgba(0, 0, 0, 0.5)"}
        >
          개업일
        </Text>
        <FoundingWrap
          gap={"83px"}
          width={"465px"}
          height={"32px"}
          align={"center"}
        >
          <Checkbox
            variant={"test"}
            width={"50px"}
            height={"20px"}
            color={"rgba(0, 0, 0, 0.5)"}
            gap={"8px"}
            value="전체"
            _checked={{
              "& .chakra-checkbox__control": {
                background: "rgba(31, 31, 31, 1)",
                border: "rgba(31, 31, 31, 1)",
              },
            }}
            _hover={{
              "& .chakra-checkbox__control": {
                background: "#rgba(0,0,0,1)",
              },
            }}
          >
            <Text width={"26px"} height={"20px"} fontSize={"14px"}>
              전체
            </Text>
          </Checkbox>
          <InputWrap gap={"8px"}>
            <Checkbox
              _checked={{
                "& .chakra-checkbox__control": {
                  background: "rgba(31, 31, 31, 1)",
                  border: "rgba(31, 31, 31, 1)",
                },
              }}
              _hover={{
                "& .chakra-checkbox__control": {
                  background: "#rgba(0,0,0,1)",
                },
              }}
            />
            <Input
              type="date"
              width={"152px"}
              height={"32px"}
              placeholder="From"
            />
            <Input
              type="date"
              width={"152px"}
              height={"32px"}
              placeholder="To"
            />
          </InputWrap>
        </FoundingWrap>
      </ThirdBox>
      <ButtonWrap justify={"flex-end"} align={"center"}>
        <Button
          width={"152px"}
          height={"32px"}
          backgroundColor={"primary"}
          gap={"8px"}
          color={"white"}
          fontWeight={"700"}
          fontSize={"14px"}
          lineHeight={"22px"}
          padding={"4px 15px 4px 15px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SearchIcon width="14px" height={"14px"} fill="white" />
          검색
        </Button>
      </ButtonWrap>
    </StoreWrap>
  );
};

export default Store;
