import React, { useState } from 'react';
import Logo from "../assests/vegmartLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import '../styles/Navbar.css';

function Navbar() {
  const[openLinks,setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to="/events"> Events Organised</Link>
            <Link to="/gifts"> Gifts and Vouchers</Link>
            <Link to="/feedback"> Feedback Form</Link>
            </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/events"> Events Organised</Link>
          <Link to="/gifts"> Gifts and Vouchers</Link>
          <Link to="/feedback"> Feedback Form</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      
    </div>
  );
}

export default Navbar;
