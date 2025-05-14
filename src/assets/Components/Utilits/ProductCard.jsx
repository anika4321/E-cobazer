import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "./Rating";

const ProductCard = ({product}) => {

    return (
        <div className="productCard border hover:border-branding-success border-gray-300 rounded-lg">
            <div className="productThums relative group">
                <Link>
                  <p className="absolute top-4 left-4 px-2 py-[3px] bg-red-400 rounded inline-flex justify-center items-center gap-1  text-white text-sm leading-tight">
                    Sale {product.discountPercentage}%
                  </p>
                  <img 
                    className="max-w-full mx-auto bg-white" 
                    src={product.thumbnail} 
                    alt="" />
                </Link>
                <div className="">
                  <Link className="opacity-0 group-hover:opacity-100 translate-x-[50px] group-hover:translate-x-[0px] transition-transform duration-500 hover:text-white hover:bg-branding-success absolute top-8 right-5 bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center translate-y-[-50%]">
                    <FaRegHeart  className="text-2xl" />
                  </Link>
                  <Link className="opacity-0 group-hover:opacity-100 translate-x-[50px] group-hover:translate-x-[0px] transition-transform duration-500 hover:text-white hover:bg-branding-success absolute top-21 right-5 bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center translate-y-[-50%]">
                    <IoEyeOutline className="text-2xl" />
                  </Link>
                </div>
            </div>
            <div className="productCnt relative p-4">
                <Link className="text-neutral-600 text-sm font-normal leading-tight">
                   {product.title}
                </Link>
                <p className="text-zinc-900 text-base font-medium leading-normal">
                   {(product.price -
                      Math.round(product.price * (product.discountPercentage / 100))).toFixed(2)}{""}
                    <del className="text-neutral-400 text-base ml-1.5">{product.price}</del>
                </p>
                <Rating count={product.rating}/>
                <Link className="transition-all duration-300 hover:text-white hover:bg-branding-success absolute top-1/2 right-5 bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center translate-y-[-50%]">
                  <BsHandbag className="text-2xl" />
                </Link>
            </div>
        </div>
    )
}

export default ProductCard