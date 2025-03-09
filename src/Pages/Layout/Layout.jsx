import { Outlet } from "react-router-dom";

import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

import MapAnimation from "../Home/Form/MapAnimation";
import InfiniteScrollPredictors from "./InfiniteScrollPredictors";
import StateCard from "../OtherPredictors/StateCard";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <InfiniteScrollPredictors></InfiniteScrollPredictors>
      <Footer></Footer>
    </>
  );
};

export default Layout;
