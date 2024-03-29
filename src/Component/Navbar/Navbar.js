import React from 'react';
import logo from "../../Assets/logo.png"

const Navbar = () => {

    const menuItems = (
        <>
        <li><a href="#!"> HOME </a></li>
        <li><a href="#!"> ABOUT </a></li>
        <li><a href="#!"> PAGES </a></li>
        <li><a href="#!"> SERVICES </a></li>
        <li><a href="#!"> TEAM </a></li>
        <li><a href="#!"> CONTACK </a></li>
        </>
    )

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            menuItems
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"> <img src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        menuItems
      }
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
    );
};

export default Navbar;