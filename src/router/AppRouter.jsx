import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import BookDetail from "../pages/BookDetail";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
