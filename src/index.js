import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorComponenet from "./components/error/ErrorComponenet";
import MainLayout from "./sections/mainlayout/MainLayout";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorComponenet />} />
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
