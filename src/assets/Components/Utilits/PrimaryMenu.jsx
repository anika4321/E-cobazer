import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PrimaryMenu = () => {

    const [menus, setMenus] = useState([
        {id: '1', name: 'Home', path: '/'},
        {id: '2', name: 'Shop', path: '/shop'},
        {id: '3', name: 'Pages', path: '/page', subMenus: null,},
        {id: '4', name: 'Blog', path: '/bloge'},
        {id: '5', name: 'About Us', path: '/contact'},
    ])

    useEffect (()=>{
        fetch('https://dummyjson.com/products/categories')
          .then(res => res.json())
          .then(res=>{
            const 
            newMenus = [...menus];
            newMenus[2].subMenus = res
            setMenus(newMenus)
          });
    }, [])

    return(
        <ul className="primarymanu lg:flex gap-7">

            {
                menus.map((menu) => (
                    <li key={menu.id} className="relative group">
                        <NavLink 
                            to={menu.path} 
                            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                        >
                        {menu.name}
                        </NavLink>
                        {
                            menu.subMenus && (
                                <ul className="submenu group-hover:opacity-100 group-hover:visible mt-5 group-hover:mt-0 transition-all duration-300 opacity-0 invisible absolute z-10 bg-white py-4 px-5 border border-gray-300 min-w-[200px]">
                                  {menu.subMenus.map((item) => (
                                    <li key={item.slug} className="my-2">
                                        <NavLink 
                                        to={item.slug}
                                        className="hover:text-branding-success hover:pl-2 transition-all duration-200 text-sm text-medium text-gray-500">
                                           {item.name}
                                        </NavLink>
                                    </li>
                                  ))}
                                </ul>
                            )
                        }
                    </li>
           
                ))
            }
           
        </ul>
    )
}

export default PrimaryMenu;