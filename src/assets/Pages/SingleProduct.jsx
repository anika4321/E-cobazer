import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const {id} = useParams();
    const [product, setProduct] = useState(null)

      useEffect(() => {
       fetch(`https://dummyjson.com/products/${id}`)
           .then(res => res.json())
           .then(data => setProduct(data));
        }, [id]);
   

    return (
        <div>
            to kese he ap
        </div>
    )
}

export default SingleProduct;