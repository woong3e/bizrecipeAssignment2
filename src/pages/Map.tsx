import React, { useEffect, useRef, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import ControlBox from "../components/ControlBox";

const Map = () => {
  const [isCtrlBoxOpen, setIsCtrlBoxOpen] = useState<boolean>(false);
  const mapRef = useRef<unknown>(null);
  const { naver } = window;
  const N = naver.maps;
  const initMap = () => {
    const mapOptions = {
      // size: { width: 1920, height: 1920 },
      center: new N.LatLng(37.511337, 127.012084),
      zoom: 13,
    };
    const map = new N.Map("map", mapOptions);
  };
  useEffect(() => {
    initMap();
  }, []);

  const showControlBox = () => {
    setIsCtrlBoxOpen((prev) => !prev);
  };

  return (
    <Flex justify={"center"} align={"center"}>
      <Flex id="map" w={"90vw"} h={"90vh"} justify={"center"}>
        {isCtrlBoxOpen && <ControlBox />}
        <Flex position={"absolute"} bottom={"20px"}>
          <Button
            zIndex={11}
            backgroundColor={"tomato"}
            onClick={showControlBox}
          >
            버튼1
          </Button>
          <Button zIndex={11} backgroundColor={"lightBlue"}>
            버튼2
          </Button>
          <Button zIndex={11} backgroundColor={"lightGreen"}>
            버튼3
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Map;
