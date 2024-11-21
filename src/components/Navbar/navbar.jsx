import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const navbar = ({sidebar,setSidebar}) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div data-aos="fade" className="container">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <h1 className="text-4xl font-bold uppercase">
            Leafy <span className="font-normal text-2xl">Lane</span>
          </h1>
          {/* Navlinks section */}
          {/* <ul className="lg:flex hidden space-x-4 text-xl">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#Numberscroll">Achievements</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul> */}
          {/* Hamburger menu */}
          <div onClick={() => setSidebar(!sidebar)}>
          <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
          </div>
          </div>
    </div>
  )
}

export default navbar
