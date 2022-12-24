import React, { useState, useEffect } from 'react'
import './Nav.css'

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
      
        <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
          />
      
        
        <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
        />
    </div>
  )
}

export default Nav