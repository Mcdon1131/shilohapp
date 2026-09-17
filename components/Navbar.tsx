"use client";

import AnouncementBar from "./AnouncementBar";
import NavbarComponent from "./NavbarComponent";
const Navbar = () => {
  return (
    <div className="sticky -top-8.75 z-50 ">
      <AnouncementBar />
      <NavbarComponent />
    </div>
  );
};

export default Navbar;
