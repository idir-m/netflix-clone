import React, { useState, useEffect } from 'react'
import './Nav.css'
import menuLogo from './images/icons8-menu-rounded-50.png'

function Nav() {

  const [scrollDown, setscrollDown] = useState(false);

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
    <div className={`nav ${scrollDown && "nav__black"}`}>
      <div className="nav__linksAndLogo">
          <img
                  className="nav__logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt="Netflix Logo"
          />
          <span  className="nav__links">Home</span >
          <span className="nav__links">Tv Shows</span >
          <span className="nav__links">Movies</span >
          <span className="nav__links">New & Popular</span >
          <span className="nav__links">My List</span >
          <span className="nav__links">Browse by Language</span >

      </div>
        
      
      <div className='nav__menuAndAvatar'>
          <img
            className='nav__humMenu'
            src={menuLogo}
            alt='menue'
            />
          <img
                  className="nav__avatar"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                  alt="Netflix Avatar"
              />
      </div>
          
    </div>
  )
}

export default Nav