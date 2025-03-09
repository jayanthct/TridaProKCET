import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeMainSection from "./Pages/Home/HomeMainSection/HomeMainSection";
import Layout from "./Pages/Layout/Layout";
import ResultMainSection from "./Pages/Result/MainSection/ResultMainSection";

import PageNotFound404 from "/PageNotFound404"



function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
  
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeMainSection />} />
          <Route element={<ResultMainSection />} />
          <Route path="*" element={<PageNotFound404></PageNotFound404>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
