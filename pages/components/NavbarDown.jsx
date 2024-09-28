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
        <div className="bg-[#C8C8C8] p-4  border-4 border-black absolute bottom-0 left-0 w-[900px] rounded-2xl ">
        <div className="container mx-auto flex justify-around items-center ">
          <div className="">
            <FaInfo size={40}/>
          </div>
        </div>
        </div>
            
        <div className="bg-[#C8C8C8] p-4 border-4 border-black  absolute bottom-0 right-0 w-[900px] rounded-2xl ">
        <div className="container mx-auto flex justify-around items-center ">
          <div className=''>
              <MdLocalParking size={40} className='items-end'/>
          </div>
        </div>
        </div>
        </>
        );
    };
    
    export default NavbarDown;