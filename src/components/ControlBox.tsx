import { Flex, Select } from "@chakra-ui/react";

const ControlBox = () => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      position={"absolute"}
      bottom={"80px"}
    >
      <Flex
        w={"300px"}
        h={"200px"}
        backgroundColor={"whiteSmoke"}
        zIndex={"11"}
      >
        <Select>
          <option value="none">시/도 선택</option>
          <option value="all" defaultValue={"all"}>
            전체
          </option>
          <option value="seoul">서울</option>
        </Select>
      </Flex>
      <Flex
        w={"300px"}
        h={"200px"}
        backgroundColor={"tomato"}
        zIndex={"11"}
      ></Flex>
    </Flex>
  );
};

export default ControlBox;
