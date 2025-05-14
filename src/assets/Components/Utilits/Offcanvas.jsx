import React, { Children } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Offcanvas = ({heading, children, showSidebar, hideSidebar, position}) => {
    return (
        <div
        onClick={(e) => {
                if (e.currentTarget === e.target) {
                    hideSidebar(false);
                }
            }}
        className={`fixed inset-0 bg-gray-900/50 z-10 duration-300 transition-all ${showSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className={`sideBerCut w-full max-w-[300px] bg-white h-screen duration-300 transition-all ${
              !showSidebar
                 ? `translate-x-[${position =='left' ? '-' : '+' }100%] opacity-0`
                 : 'translate-x-[0%] opacity-100'
              } ${position}-0 absolute`}>
                {heading && (
                    <div className='sideBarHader text-xl flex justify-between py-4 px-3 border-b-2 border-branding-success-dark'>
                    {heading}
                    <button onClick={hideSidebar} className="inline-flex items-center gap-1 text-xs">
                        <MdOutlineRestaurantMenu /> Close
                    </button>
                    </div>
                )}

                 <div className="sideBarBody py-4 px-4">
                   {children}
                 </div>

            </div>
        </div>
    )
}

export default Offcanvas;