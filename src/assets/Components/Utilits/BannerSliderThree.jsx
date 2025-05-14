import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BannerSliderThree = () =>{
    return (
        <div className="lg:h-[640px] lg:bg-gren-gray-scale-50"> 
        <div className="container grid lg:grid-cols-2 h-full items-center lg:gap-[100px] ">
            <div className="bannerImagTwo mt-[35px] lg:mt-0 order-1 lg:order-2 lg:mr-[100px]">
                <img src="/public/public/image/Image three.png" className="max-w-full" alt="" />
            </div>
            <div className="bannerCntTwo order-2 lg:order-1 lg:ml-[200px]">
                <h4 className="font-medium text-sm leading-full tracking-[0.02rem] uppercase text-branding-success">Welcome to shopery</h4>
                <h2 className="font-semibold text-4xl lg:text-[72px] leading-[120%] text-gray-scale-gray--900 lg:mt-2 mb-3 lg:mb-7">Fresh & Healthy <br />
                    Organic Food</h2>
                <h3 className="font-normal text-[16px] lg:text-[32px] leading-[120%] text-gray-scale-gray--900">Sale up to 
                    <span className="discount font-semibold text-branding-warning"> 30% OFF</span></h3>
                <p className="font-normal text-[14px] leading-[150%] text-gray-scale-gray--500 mt-1.5 lg:mt-3 mb-1.5 lg:mb-8">Free shipping on all your order. we deliver, you enjoy</p>
                <Link 
                    className="btn relative" 
                    to="/">
                    Shop now
                    <FaArrowRight className="text-gray-scale-white absolute right-3 lg:right-10 top-2.5 lg:top-4 text-sm lg:text-xl " />
                </Link>
            </div>
        </div>
        </div>
    )
}

export default BannerSliderThree;