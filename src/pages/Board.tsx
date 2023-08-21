import React, { useState } from "react";
import {
  Box,
  Flex,
  Flex as Sidebar,
  Flex as SideIconDiv,
  Flex as StoreDiv,
  Flex as DistrictDiv,
  Text,
} from "@chakra-ui/react";
import Store from "../components/Store";
import Result from "../components/Result";
import Bsns from "../components/Bsns";
import { ReactComponent as StoreIcon } from "../assets/images/storeIcon.svg";
import { ReactComponent as DistrictIcon } from "../assets/images/districtIcon.svg";
const Board = () => {
  const [store, setStore] = useState<boolean>(true);
  const [district, setDistrict] = useState<boolean>(false);

  const handleStoreBtn = () => {
    setDistrict(false);
    setStore(true);
    console.log("clicked", store);
  };

  const handleDistrictBtn = () => {
    setStore(false);
    setDistrict(true);
    console.log("clicked", store, district);
  };

  return (
    <Box width={"100vw"} display={"flex"} margin={"0"} padding={"0"}>
      <Sidebar
        width={"80px"}
        height={"704px"}
        border="1px solid rgba(140, 140, 140, 1)"
        boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.75)"}
        margin={"8px 0px 0px 4px"}
        justify={"center"}
      >
        {/* 🚀🚀🚀🚀🚀🚀🚀🚀onclick 조건부렌더링 - 컴포넌트화하기(store,bsns,result)🚀🚀🚀🚀🚀🚀🚀🚀🚀 */}
        <SideIconDiv
          flexDirection={"column"}
          align={"center"}
          justify={"flex-start"}
          marginTop={"16px"}
          gap={"18px"}
        >
          <StoreDiv
            width={"40px"}
            height={"40px"}
            borderRadius={"70px"}
            backgroundColor={"primary"}
            _hover={{ cursor: "pointer" }}
            onClick={handleStoreBtn}
          >
            <StoreIcon width={"40px"} height={"40px"} />
          </StoreDiv>
          <Text
            width={"30px"}
            height={"23px"}
            fontSize={"16px"}
            lineHeight={"23.17px"}
            fontWeight={"400"}
          >
            매장
          </Text>
          <DistrictDiv
            width={"40px"}
            height={"40px"}
            borderRadius={"70px"}
            backgroundColor={"primary"}
            _hover={{ cursor: "pointer" }}
            onClick={handleDistrictBtn}
          >
            <DistrictIcon width={"100%"} height={"100%"} />
          </DistrictDiv>
          <Text
            width={"30px"}
            height={"23px"}
            fontSize={"16px"}
            lineHeight={"23.17px"}
            fontWeight={"400"}
          >
            상권
          </Text>
        </SideIconDiv>
      </Sidebar>
      <Flex flexDirection={"column"}>
        {store ? (
          <>
            <Store />
            <Result />
          </>
        ) : (
          <>
            <Bsns />
            <Result />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Board;
