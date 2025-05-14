import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BannerSliderTwo = () =>{
    return (
        <div className="container grid lg:grid-cols-2 h-full items-center lg:gap-[100px]">
            <div className="bannerImagTwo relative">
                <img src="/public/public/image/Image two.png" className="max-w-full" alt="" />
                <div className="absolute right-0 top-0 lg:top-32 pt-[21px] w-[100px] h-[100px] rounded-full bg-branding-warning font-semibold text-[32px] leading-[120%] text-center text-gray-scale-white">
                  70%<p className="font-medium text-[16px] leading-[100%] tracking-[0.02rem] uppercase">OFF</p>
                </div>
            </div>
            <div className="bannerCntTwo">
                <h4 className="mt-2.5 lg:mt-0 font-medium text-sm leading-full tracking-[0.02rem] uppercase text-branding-success">Welcome to shopery</h4>
                <h2 className="font-semibold text-4xl lg:text-[72px] leading-[120%] text-gray-scale-gray--900 lg:mt-2 mb-3 lg:mb-7">Fresh & Healthy <br />
                    Organic Food</h2>
                <p className="font-normal text-[14px] leading-[150%] text-gray-scale-gray--500 mt-1.5 lg:mt-3 mb-1.5 lg:mb-8">Free shipping on all your order. we deliver, you enjoy</p>
                <Link 
                    className="btn relative" 
                    to="/">
                        Shop now
                    <FaArrowRight className="text-gray-scale-white absolute right-3 lg:right-10 top-2.5 lg:top-4 text-sm lg:text-xl " />
                </Link>
            </div>
        </div>
    )
}

export default BannerSliderTwo;