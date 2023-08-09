import React from "react";
import "./navbarSignin.css";

const NavbarSignin = () => {
  return (
    <header>
      <a href="#">
        <h1 className="logo_navb">zipper</h1>
      </a>

      <ul className="navmenu">
        <li> <a href="#">Home</a></li>
        <li> <a href="#">shop</a></li>
        <li> <a href="#">products</a></li>
        <li> <a href="#">pages</a></li>
        <li> <a href="#">docs</a></li>
      </ul>
<div className="nav-icon">
    <a href="#"><i class="bx bx-search"></i></a>
    <a href="#"><i class='bx bx-user'></i></a>
    <a href="#"><i class='bx bx-cart'></i></a>

    <div class='bx bx-menu' id="menu-icon"></div>
</div>

    </header>
  );
};

export default NavbarSignin;
