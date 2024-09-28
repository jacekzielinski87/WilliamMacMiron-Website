import React, {useState} from 'react'
import { FaInfo } from "react-icons/fa6";
import { MdLocalParking } from "react-icons/md";


 
const NavbarDown = () => {
    const [nav, setNav] = useState(false);
        const handleNav = () => {
        setNav(!nav);
    }
    
    return (
        <nav className="bg-[#C8C8C8] p-4 flex border-4 border-black absolute bottom-0 w-full ">
          <div className="container mx-auto ">
           <ul className="flex justify-between items-center">
              <li className=''>
                <FaInfo size={40}/>
            </li>
             <li>
                <MdLocalParking size={40} />
            </li>
            </ul>
          </div>
        </nav>
      );
    };
    
    export default NavbarDown;