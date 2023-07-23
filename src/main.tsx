import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router.tsx";
import theme from "./styles/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <Router />
  </ChakraProvider>
);
