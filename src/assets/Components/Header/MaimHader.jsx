import React, { useState } from "react";
import PrimaryMenu from "../Utilits/PrimaryMenu";
import { Link } from "react-router-dom";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import Search from "../Utilits/Search";
import { RiMenuFold2Line } from "react-icons/ri";
import Card from "../Utilits/Card";
import Offcanvas from "../Utilits/Offcanvas";

const MaimHader = () => {

    const [showMenu, setShowMenu] = useState(false)

    const showMobileNab = () => {
        setShowMenu(true)
    }

    const hideMobileNab = () => {
        setShowMenu(false)
    }

    return(
        <nav>
            <div className="container grid grid-cols-5 py-5 items-center px-5 lg:px-5">
                <div className="manus col-span-1 lg:col-span-2">
                    <div className="hidden lg:block">
                        <PrimaryMenu/>
                    </div>
                    <div className="lg:hidden text-2xl">
                        <button onClick={showMobileNab}>
                            <RiMenuFold2Line />
                        </button>

                        <Offcanvas 
                        position="left"
                        hideSidebar={hideMobileNab} 
                        showSidebar={showMenu} 
                        heading="Shopping Cart">
                            <PrimaryMenu/>
                        </Offcanvas>
                    </div>
                </div>
                <div className="logos col-span-3 lg:col-span-1">
                    <Link to="/"><img className="m-auto" src="/public/public/image/Logo.png" alt="" /></Link>
                </div>
                <div className="quiklink col-span-1 lg:col-span-2 flex justify-end place-items-center gap-10">
                    <a 
                    href="tel:(219) 555-0114" 
                    className="lg:flex gap-2 place-items-center hidden text-[14px] text-gray-scale-gray--900">
                        <span className="text-3xl">
                        <PiPhoneCallLight />
                        </span>
                        (219) 555-0114
                    </a>
                    <ul className="flex gap-5 lg:text-4xl text-2xl">
                        <li>
                            <Search/>
                        </li>
                        <li className="hidden lg:inline-block"><Link><FaRegHeart /></Link></li>
                        <li className="relative">
                            <Card/>
                        </li>
                        <li className="hidden lg:inline-block"><Link><FaRegUser /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MaimHader;