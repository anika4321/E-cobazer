import React from "react";
import { GoHome } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Bradcome = ({url, title}) => {
    return (
        <div className="breadcrum bg-[url(/public/public/image/Breadcrumbs.png)] py-[48px]">
            <div className="container text-neutral-400 flex gap-2 items-center">
                <Link to='/'>
                   <GoHome className="text-xl" />
                </Link>
                <RiArrowRightSLine className="text-xl" />
                 <Link>
                   Category
                </Link>
                <RiArrowRightSLine className="text-xl" />
                <Link to={url} className="text-green-600 capitalize">
                   {title}
                </Link>
            </div>
        </div>
    )
}

export default Bradcome;