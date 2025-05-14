import React, { useEffect, useState } from "react";
import ProductCard from "../Utilits/ProductCard";

const Features = ({limit = 4}) => {

    const [products, setproduct] = useState ([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=50`)
        .then(res => res.json())
        .then((data) => {
            setproduct(data?.products);
        });
    },[]);

    const addToCart = (product) => {};

    return (
        <div className="container">
            <div className="heading mb-10 text-zinc-900 text-4xl font-semibold leading-[48px]">
                Featured Products
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 mb-5">
                {
                    products.map((products) =>(
                         <ProductCard  key={products.id} product={products}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Features;