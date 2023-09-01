import { useEffect, useRef, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import axios from "axios";
import ControlBox from "../components/ControlBox";

interface dataEl {
  id: number;
}
const Map = () => {
  const [isCtrlBoxOpen, setIsCtrlBoxOpen] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const mapRef = useRef();
  const { naver } = window;
  const N = naver.maps;
  const showControlBox = () => {
    setIsCtrlBoxOpen((prev) => !prev);
  };

  const initMap = () => {
    const mapOptions = {
      center: new N.LatLng(37.511337, 127.012084),
      zoom: 13,
    };
    mapRef.current = new N.Map("map", mapOptions);
  };

  useEffect(() => {
    initMap();
  }, []);

  useEffect(() => {
    axios
      .get("data/sido_test.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    if (!mapRef.current || !data) return;
    // console.log(data);
    const path = data.map((el) => JSON.parse(el.polygon));
    // console.log(path);
    const path2 = path[0];
    console.log(path2);
    // for (const el of polygon1) {
    //   console.log(el);
    //   // for (const el2 of el) {
    //   //   console.log(el2);
    //   // }
    // }
    // const polygon = new N.Polygon({
    //   map: mapRef.current,
    //   paths: [
    //     [도시1 폴리곤
    //       new N.LatLng(37.37544345085402, 127.11224555969238),
    //       new N.LatLng(37.37230584065902, 127.10791110992432),
    //       new N.LatLng(37.35975408751081, 127.10795402526855),
    //       new N.LatLng(37.359924641705476, 127.11576461791992),
    //       new N.LatLng(37.35931064479073, 127.12211608886719),
    //       new N.LatLng(37.36043630196386, 127.12293148040771),
    //       new N.LatLng(37.36354029942161, 127.12310314178465),
    //       new N.LatLng(37.365211629488016, 127.12456226348876),
    //       new N.LatLng(37.37544345085402, 127.11224555969238),
    //     ],
    //     [도시2 폴리곤
    //       new N.LatLng(37.37544345085402, 127.11224555969238),
    //       new N.LatLng(37.37230584065902, 127.10791110992432),
    //       new N.LatLng(37.35975408751081, 127.10795402526855),
    //       new N.LatLng(37.359924641705476, 127.11576461791992),
    //       new N.LatLng(37.35931064479073, 127.12211608886719),
    //       new N.LatLng(37.36043630196386, 127.12293148040771),
    //       new N.LatLng(37.36354029942161, 127.12310314178465),
    //       new N.LatLng(37.365211629488016, 127.12456226348876),
    //       new N.LatLng(37.37544345085402, 127.11224555969238),
    //     ],
    //   ],
    //   fillColor: "#ff0000",
    //   fillOpacity: 0.3,
    //   strokeColor: "#ff0000",
    //   strokeOpacity: 0.6,
    //   strokeWeight: 3,
    // });
  }, [data]);

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
