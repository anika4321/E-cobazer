import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchProdedCard from "./SearchProdedCard";
import { MdClose } from "react-icons/md";

const Search = () => {

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleSearch = (e) => {
        setSearch(e.target.value);

    if (search.length > 3) {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then((data) => setSearchResult(data));
       }
    
    }

    const handleClose = (e) => {
        setIsOpen(false);
        setSearchResult(null);
        setSearch("")
    };


    return(
        <>
        <button onClick={()=> setIsOpen(true)} className="cursor-pointer">
           <FiSearch />
        </button>

        <div className={
            `searchBox fixed inset-0 bg-white/60 backdrop-blur-[2px] z-10 lg:p-20 transition-all duration-300 ${
                !isOpen 
                ? "translate-y-[100%] opacity-0 invisible"
                : "translate-y-[0%] opacity-100 visible"}`
        }>

          <button onClick={e=> handleClose(e)} className="absolute top-5 right-5 cursor-pointer">
            <MdClose />  
          </button>        

            <div className="searchArea">
                <input
                 value={search}
                 onChange={(e) => handleSearch(e)}
                 type="search" 
                 className="w-full border-b-2 lg:border-b-2 pb-5 border-gray-400 focus:border-b-branding-success-bright outline-0" 
                 placeholder="Search..." />
            </div>

            {search.length > 3 && (
                <div className="result grid lg:grid-cols-3">
                 {
                    searchResult?.products.length > 0 ? 
                        searchResult?.products.map((product) => (
                        <SearchProdedCard key={product.id} product={product}/>
                    )) : "No search result has found!"
                 }
                </div>
                )}

        </div>
        </>
    )
}

export default Search;