import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Bradcome from "../Components/Utilits/Bradcome";
import ProductCard from "../Components/Utilits/ProductCard";

const Catagorex = () => {

    const {name} = useParams()
    const [catagore, setcatagore] = useState(null)

    useEffect (()=>{
        fetch(`https://dummyjson.com/products/category/${name}`)
        .then(res => res.json())
        .then(data=>{
            setcatagore(data.products)
        });
    }, [name])

    return (
        <div>
          <Bradcome url={`/catagorex/${name}`} title={name}/>

          <div className="container my-8 grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-6">
            {catagore?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
    )
}

export default Catagorex;