import React from "react";
import { Outlet } from "react-router-dom";
import TopHader from "../Components/Header/TopHader";
import MaimHader from "../Components/Header/MaimHader";
import Footer from "../Components/footer/Footer";

const FontendLayout = () => {
    return(
        <>
          <header>
            <TopHader/>
            <MaimHader/>
          </header>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </>
    )
}

export default FontendLayout;