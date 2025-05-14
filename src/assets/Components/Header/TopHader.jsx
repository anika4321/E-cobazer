import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Select from "../Utilits/Select";

const TopHader = () => {

    const language =[
        { value: "en", label: "ENS" },
        { value: "bn", label: "BDT" },
        { value: "es", label: "ESP" },
        { value: "fr", label: "FRA" }
    ]
    const currencies =[
        { value: "ued", label: "USD" },
        { value: "bn", label: "BDT" },
        { value: "ru", label: "IN" },
    ]

    return(
        <div className="bg-gren-gray-scale-50">
            <div className="container hidden lg:grid grid-cols-2 py-3">
                <div className="location">
                    <p className="flex gap-2 items-center text-xs text-gren-gray-scale-700">
                        <span className="text-xl">
                            <CiLocationOn />
                        </span>
                        Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </div>
                <div className="details flex justify-end gap-5">
                    <Select option={language}/>
                    <Select option={currencies}/>
                </div>
            </div>
        </div>
    )
}

export default TopHader;