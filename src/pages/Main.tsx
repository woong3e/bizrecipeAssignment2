import React from "react";
import { Box } from "@chakra-ui/react";
import { ReactComponent as Cool } from "../assets/images/logo.svg";
const Main = () => {
  const handleOnclick = () => {
    console.log("hi");
  };
  return <Cool width="150px" height="150px" />;
};

export default Main;
