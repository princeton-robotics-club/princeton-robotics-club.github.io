import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function NavbarItem(props) {

  const {
    label,
    link,
    pathString = link,
    dropdownOptions = [],
    dropdownLinks = [],
    forceStyle = null,
    closeMobile,
    darkMode = true
  } = props;

  const [drop, setDrop] = useState(false);  
  const showDrop = () => setDrop(window.innerWidth > 960);
  const hideDrop = () => setDrop(false);

  const [underline, setUnderline]  = useState(false);
  const location = useLocation();

  useEffect (() => {
    setUnderline(location.pathname.indexOf(pathString) === 0);
  }, [location.pathname, pathString, underline]);

  window.addEventListener('resize', hideDrop);
  
  return (
    <li className='nav-item' key={label} onMouseLeave={hideDrop}>
      <Link to={link}
          onMouseEnter={showDrop}  
          className={(forceStyle ? forceStyle : (underline ? 'nav-links-here' : 'nav-links') 
                      + (darkMode ? ' nav-links-dark' : ' nav-links-light'))} 
          onClick={closeMobile}
      > {label} </Link>
      {drop && 
        dropdownOptions.map((option, idx) => {
          return (
            <div className='dropdown-rectangle' key={option}> 
              <Link to={dropdownLinks[idx]} className='dropdown-link'>
                <div> {option} </div>
              </Link>
            </div>
          );
        })
      }
    </li>
  );
}

export default NavbarItem;