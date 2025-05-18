import React from "react";
import "./assets/css/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FontendLayout from "./assets/Layouts/FontendLayout";
import HomePages from "./assets/Pages/HomePages"
import ShopPages from "./assets/Pages/ShopPages"
import ContactPages from "./assets/Pages/ContactPages"
import BlogePages from "./assets/Pages/BlogePages"
import PagesPage from "./assets/Pages/PagesPage";
import Catagorex from "./assets/Pages/Catagorex";
import SingleProduct from "./assets/Pages/SingleProduct";

const APP = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FontendLayout/>}>
           <Route path='/' element={<HomePages/>} />
           <Route path='/shop' element={<ShopPages/>}/>
           <Route path='/page' element={<PagesPage/>}/>
           <Route path='/contact' element={<ContactPages/>}/>
           <Route path='/bloge' element={<BlogePages/>}/>
           <Route path='/catagore/:name' element={<Catagorex/>}/>
           <Route path='/product/:id' element={<SingleProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default APP;