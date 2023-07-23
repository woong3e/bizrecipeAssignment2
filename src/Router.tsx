import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Board from "./pages/Board";
import Map from "./pages/Map";
const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
