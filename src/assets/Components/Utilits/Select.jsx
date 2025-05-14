import React from "react";

const Select = ({option,name,className}) => {
    return(
        <select name={name} className={`text-xs text-gren-gray-scale-700 outline-none ${className}`}>
           {
            option?.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))
           }
        </select>
    )
}

export default Select;