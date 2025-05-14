import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const BannerSlider = () => {
    return <div className="lg:h-[640px] lg:bg-[url(/public/public/image/BG.png)]"> 
            <div className="container grid lg:grid-cols-2 h-full items-center lg:gap-[100px]"> 
                <div className="bannerImg"> 
                   <img src="/public/public/image/Image.png" className="max-w-full" alt="" /> 
                </div> 
                <div className="bannerCnt">
                    <h4 className="mt-5 lg:mt-0 font-medium text-sm leading-full tracking-[0.02rem] uppercase text-branding-success">Welcome to shopery</h4>
                    <h2 className="font-semibold text-4xl lg:text-[72px] leading-[120%] text-gray-scale-gray--900 lg:mt-2 mb-3 lg:mb-7">Fresh & Healthy <br />
                    Organic Food</h2>
                    <h3 className="font-normal text-[16px] lg:text-[32px] leading-[120%] text-gray-scale-gray--900">Sale up to 
                        <span className="discount font-semibold text-branding-warning"> 30% OFF</span></h3>
                    <p className="font-normal text-[14px] leading-[150%] text-gray-scale-gray--500 mt-1.5 lg:mt-3 mb-1.5 lg:mb-8">Free shipping on all your order. we deliver, you enjoy</p>
                    <Link 
                    className="btn relative mb-8 lg:mb-0" 
                    to="/">
                        Shop now
                        <FaArrowRight className="text-gray-scale-white absolute right-3 lg:right-10 top-2.5 lg:top-4 text-sm lg:text-xl " />
                    </Link>
                </div> 
            </div> 
          </div>; 
}

export default BannerSlider