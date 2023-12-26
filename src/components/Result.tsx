import {
  Box,
  Flex,
  Flex as HeaderWrap,
  Flex as ResultWrap,
  Text,
  Checkbox,
  Thead,
  TableContainer,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { ReactComponent as DetailIcon } from "../assets/images/detail.svg";

const Result = () => {
  return (
    <ResultWrap
      width={"1180px"}
      height={"504px"}
      margin={"8px 8px 0px 8px"}
      border={"1px solid rgba(140, 140, 140, 1)"}
      boxShadow={"0px 0px 4px 0px rgba(0, 0, 0, 0.75)"}
      padding={"15px"}
      flexDirection={"column"}
    >
      <HeaderWrap
        gap={"8px"}
        borderBottom={"1px solid black"}
        width={"1148px"}
        height={"31px"}
      >
        <Text
          width={"79px"}
          height={"23px"}
          fontWeight={"700"}
          fontSize={"20px"}
          lineHeight={"23.44px"}
          color={"rgba(0,0,0,0.8"}
        >
          검색 결과
        </Text>
        <Text
          width={"47px"}
          height={"23px"}
          fontWeight={"400"}
          fontSize={"16px"}
          lineHeight={"23.17px"}
          color={"rgba(0, 0, 0, 0.5)"}
        >
          Result
        </Text>
      </HeaderWrap>
      <TableContainer padding={"0px"}>
        <Table variant={"unstyled"} width={"1140px"}>
          <Thead height={"23px"} color={"rgba(0, 0, 0, 0.5)"}>
            {/* 🚀🚀🚀🚀🚀🚀🚀 테이블헤더부분 🚀🚀🚀🚀🚀🚀🚀 */}
            <Tr display={"flex"} justifyContent={"space-between"}>
              <Th>test</Th>
              <Th textAlign={"center"}>
                <Text
                  fontWeight={"700"}
                  fontSize={"16px"}
                  lineHeight={"23.17px"}
                >
                  번호
                </Text>
              </Th>
              <Th textAlign={"center"}>매장명</Th>
              <Th textAlign={"center"}>매장코드</Th>
              <Th textAlign={"center"}>상태</Th>
              <Th textAlign={"center"}>타입</Th>
              <Th textAlign={"center"}>대표자</Th>
              <Th textAlign={"center"}>개업일</Th>
              <Th textAlign={"center"}>주소</Th>
              <Th textAlign={"center"}>상세보기</Th>
            </Tr>
          </Thead>
          <Tbody display="flex" flexDirection={"column"} gap={"4px"}>
            {/* **************************map 돌릴 부분*********************************** */}
            <Tr
              display={"flex"}
              justifyContent={"space-between"}
              width={"1148px"}
              border={"1px solid black"}
              borderRadius={"12px"}
              height={"56px"}
            >
              <Td>
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
              </Td>
              <Td textAlign={"center"}>1</Td>
              <Td textAlign={"center"}>서울역점</Td>
              <Td textAlign={"center"}>12839</Td>
              <Td textAlign={"center"}>입점</Td>
              <Td textAlign={"center"}>B</Td>
              <Td textAlign={"center"}>
                <Text>김양일</Text>
                <Text>(010-3928-7028)</Text>
              </Td>
              <Td textAlign={"center"}>2022-03-23</Td>
              <Td textAlign={"center"} whiteSpace={"normal"}>
                서울특별시 용산구 동자동 366 트윈시티 1103호
              </Td>
              <Td>
                <Box display={"flex"} justifyContent={"center"}>
                  <DetailIcon width={"14.29px"} height={"14.29px"} />
                </Box>
              </Td>
            </Tr>
            {/* **************************map 돌릴 부분*********************************** */}
            <Tr
              display={"flex"}
              justifyContent={"space-between"}
              border={"1px solid black"}
              borderRadius={"12px"}
              height={"56px"}
            >
              <Td>
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
              </Td>
              <Td textAlign={"center"}>1</Td>
              <Td textAlign={"center"}>서울역점</Td>
              <Td textAlign={"center"}>12839</Td>
              <Td textAlign={"center"}>입점</Td>
              <Td textAlign={"center"}>B</Td>
              <Td textAlign={"center"}>
                <Text>김양일</Text>
                <Text>(010-3928-7028)</Text>
              </Td>
              <Td textAlign={"center"}>2022-03-23</Td>
              <Td textAlign={"center"} whiteSpace={"normal"}>
                서울특별시 용산구 동자동 366 트윈시티 1103호
              </Td>
              <Td>
                <Box display={"flex"} justifyContent={"center"}>
                  <DetailIcon width={"14.29px"} height={"14.29px"} />
                </Box>
              </Td>
            </Tr>
            <Tr
              display={"flex"}
              justifyContent={"space-between"}
              width={"1148px"}
              border={"1px solid black"}
              borderRadius={"12px"}
              height={"56px"}
            >
              <Td>
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
              </Td>
              <Td textAlign={"center"}>1</Td>
              <Td textAlign={"center"}>서울역점</Td>
              <Td textAlign={"center"}>12839</Td>
              <Td textAlign={"center"}>입점</Td>
              <Td textAlign={"center"}>B</Td>
              <Td textAlign={"center"}>
                <Text>김양일</Text>
                <Text>(010-3928-7028)</Text>
              </Td>
              <Td textAlign={"center"}>2022-03-23</Td>
              <Td textAlign={"center"} whiteSpace={"normal"}>
                서울특별시 용산구 동자동 366 트윈시티 1103호
              </Td>
              <Td>
                <Box display={"flex"} justifyContent={"center"}>
                  <DetailIcon width={"14.29px"} height={"14.29px"} />
                </Box>
              </Td>
            </Tr>
            <Tr
              display={"flex"}
              justifyContent={"space-between"}
              width={"1148px"}
              border={"1px solid black"}
              borderRadius={"12px"}
              height={"56px"}
            >
              <Td>
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
              </Td>
              <Td textAlign={"center"}>1</Td>
              <Td textAlign={"center"}>서울역점</Td>
              <Td textAlign={"center"}>12839</Td>
              <Td textAlign={"center"}>입점</Td>
              <Td textAlign={"center"}>B</Td>
              <Td textAlign={"center"}>
                <Text>김양일</Text>
                <Text>(010-3928-7028)</Text>
              </Td>
              <Td textAlign={"center"}>2022-03-23</Td>
              <Td textAlign={"center"} whiteSpace={"normal"}>
                서울특별시 용산구 동자동 366 트윈시티 1103호
              </Td>
              <Td>
                <Box display={"flex"} justifyContent={"center"}>
                  <DetailIcon width={"14.29px"} height={"14.29px"} />
                </Box>
              </Td>
            </Tr>
            <Tr
              display={"flex"}
              justifyContent={"space-between"}
              width={"1148px"}
              border={"1px solid black"}
              borderRadius={"12px"}
              height={"56px"}
            >
              <Td>
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
              </Td>
              <Td textAlign={"center"}>1</Td>
              <Td textAlign={"center"}>서울역점</Td>
              <Td textAlign={"center"}>12839</Td>
              <Td textAlign={"center"}>입점</Td>
              <Td textAlign={"center"}>B</Td>
              <Td textAlign={"center"}>
                <Text>김양일</Text>
                <Text>(010-3928-7028)</Text>
              </Td>
              <Td textAlign={"center"}>2022-03-23</Td>
              <Td textAlign={"center"} whiteSpace={"normal"}>
                서울특별시 용산구 동자동 366 트윈시티 1103호
              </Td>
              <Td>
                <Box display={"flex"} justifyContent={"center"}>
                  <DetailIcon width={"14.29px"} height={"14.29px"} />
                </Box>
              </Td>
            </Tr>
            <Tr
              display={"flex"}
              justifyContent={"space-between"}
              width={"1148px"}
              border={"1px solid black"}
              borderRadius={"12px"}
              height={"56px"}
            >
              <Td>
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
              </Td>
              <Td textAlign={"center"}>1</Td>
              <Td textAlign={"center"}>서울역점</Td>
              <Td textAlign={"center"}>12839</Td>
              <Td textAlign={"center"}>입점</Td>
              <Td textAlign={"center"}>B</Td>
              <Td textAlign={"center"}>
                <Text>김양일</Text>
                <Text>(010-3928-7028)</Text>
              </Td>
              <Td textAlign={"center"}>2022-03-23</Td>
              <Td textAlign={"center"} whiteSpace={"normal"}>
                서울특별시 용산구 동자동 366 트윈시티 1103호
              </Td>
              <Td>
                <Box display={"flex"} justifyContent={"center"}>
                  <DetailIcon width={"14.29px"} height={"14.29px"} />
                </Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify={"center"}>페이지네이션</Flex>
    </ResultWrap>
  );
};

export default Result;
