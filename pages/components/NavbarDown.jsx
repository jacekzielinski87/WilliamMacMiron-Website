import React, {useState} from 'react'
import { FaInfo } from "react-icons/fa6";
import { MdLocalParking } from "react-icons/md";


 
const NavbarDown = () => {
    const [nav, setNav] = useState(false);
        const handleNav = () => {
        setNav(!nav);
    }
    
    return (
      <>
        <div className="bg-[#C8C8C8] p-3  border-2 border-black absolute bottom-0 w-full rounded-2xl">
        <div className="">
          <div className="flex justify-around">
            <FaInfo size={40} className='cursor-pointer'/>
            <MdLocalParking size={40} className='cursor-pointer'/>
          </div>
        </div>
        </div>
      </>
        );
    };
    
    export default NavbarDown;