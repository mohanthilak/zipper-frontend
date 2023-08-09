import React from "react";
import "./navbarSignin.css";

const NavbarSignin = () => {

  
    // let menu=document.querySelector("#menu-icon");
    // let navmenu=document.querySelector(".navmenu");
    // menu.onclick=()=>{
    //   menu.classList.toggle('bx-x');
    //   navmenu.classList.toggle('open')
    // }
   

  // const burgermenu=()=>{
  //   let menu=document.querySelector("#menu-icon");
  //   let navmenu=document.querySelector(".navmenu");
  //   menu.classList.toggle('bx-x');
  //    navmenu.classList.toggle('open');
  // }

  return (
    <header>
      <a href="#">
        <h1 className="logo_navb">zipper</h1>
      </a>

      <ul className="navmenu">
        <li> <a href="#">dashboard</a></li>
        <li> <a href="#">books</a></li>
        <li> <a href="#">libraries</a></li>
        <li> <a href="#">borrowings</a></li>
        <li> <a href="#">reading list</a></li>
      </ul>
<div className="nav-icon">
    <a href="#"><i className="bx bx-search"></i></a>
    <a href="#"><i classNamw='bx bx-user'></i></a>
    <a href="#"><i className='bx bx-cart'></i></a>
{/* onClick={burgermenu} */}
    <div class='bx bx-menu'  id="menu-icon"></div>
</div>

    </header>
  );
};

export default NavbarSignin;
