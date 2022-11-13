import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/home/profile")
  }
  const handleLogout = () => {
    navigate("/")
  }
  const handleHome = () => {
    navigate("/home")
  }
  return (
    <div>
      <nav className="navbarCustom">
        <span onClick={handleHome}>Women Empowerment</span>
        <div>
          <button type="button" className="btn btn-outline-light" onClick={handleProfile}>MyProfile</button>
          <button type="button" className="btn btn-outline-light" onClick={handleLogout} >Logout</button>
          <button type="button" className="btn btn-outline-light" onClick={handleHome} >Home</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
