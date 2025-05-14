import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SearchProdedCard = ({product}) => {
    return (
        <div className="productCard">
            <Link to="" className="grid lg:grid-cols-2 place-items-center">
                
                  <div className="productImage lg:col-span-1 p-5">
                    <img
                      className="w-full" 
                      src={product?.images[0]} 
                      alt="" 
                    />
                  </div>
                  <div className="productDtails col-auto p-4">
                    <h4 className="text-[14px] font-normal">{product.title}</h4>
                    <p className="text-[16px] font-medium">${product.price}</p>
                    <p className="text-sm flex place-items-center gap-2">
                      <span className="text-amber-400">
                        <FaStar/>
                      </span> ({product.rating})
                    </p>
                  </div>
                
            </Link>
        </div>
    )
}

export default SearchProdedCard;