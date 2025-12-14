"use client";

import { useCallback, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleShowNav = useCallback(() => {
        setShowNav(true);
    }, []);
    const handleCloseNav = useCallback(() => {
        setShowNav(false);
    }, []);
  return (
    <div>
          <Nav openNav={handleShowNav} />
          <MobileNav showNav={showNav} closeNav={handleCloseNav} />    
    </div>
  )
}

export default ResponsiveNav