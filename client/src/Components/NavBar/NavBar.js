import React from 'react';
import './Section/Navbar.css';
import NavDrawer from './Section/NavDrawer';
import NoticeBoard from './Section/NoticeBoard';


function NavBar() {

  return (
    <nav className="menu">
      <div className="menu__logo">
      <NavDrawer />
      </div>
         <div className="menu__container">
         <img style={{height:'6rem', borderRadius:'3rem'}} src={'/images/shortcutImg.jpeg'} />
        </div>
        <div className="menu__container">
        <NoticeBoard />
        </div>

       
    </nav>
  )
}

export default NavBar