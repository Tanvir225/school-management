"use client";
import { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="block lg:hidden px-5 py-2">
     
        <button onClick={toggleDrawer} className={`btn btn-sm w-28 btn-outline ${isOpen ? 'hover:bg-primary hover:text-white':'bg-red-700 text-white'}`}>{isOpen ? 'close' : 'menu'}</button>
   
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div>Hello World</div>
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
