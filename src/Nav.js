import React, { useState, useEffect } from 'react'
import './Nav.css'
import menuLogo from './images/icons8-menu-rounded-50.png'

function Nav() {

  const [scrollDown, setscrollDown] = useState(false);
  const [responsiveNavBar, setresponsiveNavBar] = useState(false)

  function handleClickMenu() {
      if(responsiveNavBar){
          setresponsiveNavBar(false)
      }
      else{
          setresponsiveNavBar(true) 
      }
  }

  useEffect(() => {
    
    function handleScroll(event){
        if(window.scrollY > 100)
            setscrollDown(true)
        else 
            setscrollDown(false)
    }
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

  return (
    <div className={`nav ${scrollDown && "nav__black"} ${responsiveNavBar && "nav__responsiveblack"}`}>
      <div className="nav__linksAndLogo">
          <img
                  className="nav__logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt="Netflix Logo"
          />
          <div className="nav__links">
              <span className="nav__link">Home</span >
              <span className="nav__link">Tv Shows</span >
              <span className="nav__link">Movies</span >
              <span className="nav__link">New & Popular</span >
              <span className="nav__link">My List</span >
              <span className="nav__link">Browse by Language</span >
          </div>
            

      </div>
        
      
      <div className='nav__menuAndAvatar'>
          <img
            className='nav__humMenu'
            src={menuLogo}
            alt='menue'
            onClick={() => handleClickMenu()}
            />
          <img
                  className="nav__avatar"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="Netflix Avatar"
                  
              />
      </div>
      {
        responsiveNavBar
              &&

        <div className="nav__responsiveLinks">
            <span className="nav__link">Home</span >
            <span className="nav__link">Tv Shows</span >
            <span className="nav__link">Movies</span >
            <span className="nav__link">New & Popular</span >
            <span className="nav__link">My List</span >
            <span className="nav__link">Browse by Language</span >
        </div> 

      }
         
          
    </div>
  )
}

export default Nav