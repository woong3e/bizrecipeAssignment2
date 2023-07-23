import React from "react";
import { Container, Box, Flex as Sidebar, Flex } from "@chakra-ui/react";

const Board = () => {
  return (
    <Box width={"100vw"} display={"flex"} margin={"0"} padding={"0"}>
      <Sidebar
        width={"80px"}
        height={"704px"}
        border="1px solid rgba(140, 140, 140, 1)"
        boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.75)"}
        margin={"8px 0px 0px 4px"}
      >
        사이드바
      </Sidebar>
      <Flex flexDirection={"column"}>
        <Flex
          width={"1180px"}
          height={"192px"}
          margin={"8px 8px 0px 8px"}
          border={"1px solid rgba(140, 140, 140, 1)"}
          boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.75)"}
        >
          위쪽
        </Flex>
        <Flex
          width={"1180px"}
          height={"504px"}
          margin={"8px 8px 0px 8px"}
          border={"1px solid rgba(140, 140, 140, 1)"}
          boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.75)"}
        >
          아래쪽
        </Flex>
      </Flex>
    </Box>
  );
};

export default Board;
