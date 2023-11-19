import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../button/Button';
import NavbarItem from './NavbarItem';
import { Tooltip } from 'react-tooltip';
import './Navbar.css';

function Navbar(props) {

  const {
    darkMode,
    toggleDarkMode
  } = props;
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [joinPath,  setJoinPath]  = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => setButton(window.innerWidth > 960);

  useEffect(() => {
      showButton();
  }, []);

  const location = useLocation();

  useEffect(() => {
    setJoinPath(location.pathname.indexOf('/join') === 0);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location.pathname]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={'navbar ' + (darkMode ? 'navbar-dark' : 'navbar-light')}>
        <div className='navbar-container'>

          <Link onClick={() => {closeMobileMenu(); toggleDarkMode();}}>
            <div className={'navbar-logo' + (darkMode ? ' navbar-logo-dark' : ' navbar-logo-light')}
                 data-tooltip-id='logo-tooltip' 
                 data-tooltip-content='Click me to toggle dark mode!'/>
          </Link>
          <Tooltip id='logo-tooltip'
                   className='navbar-tooltip' />

          <Link to='/' onClick={closeMobileMenu} 
                className={'navbar-logo-text' + (darkMode ? ' navbar-logo-text-dark' : ' navbar-logo-text-light')}>
              <div className={'navbar-logo-text-top'}>
                PRINCETON UNIVERSITY
              </div>
              <div className={'navbar-logo-text-bottom'}>
                ROBOTICS CLUB
              </div>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
            <NavbarItem 
              label = {'Projects'}
              link  = {'/projects'}
              pathString = {'/projects'}
              dropdownOptions = {[]}
              dropdownLinks = {[]}
              closeMobile = {closeMobileMenu}
              darkMode = {darkMode}
            />

            <NavbarItem 
              label = {'Supporters'}
              link  = {'/supporters'}
              pathString = {'/supporters'}
              dropdownOptions = {[]}
              dropdownLinks = {[]}
              closeMobile = {closeMobileMenu}
              darkMode = {darkMode}
            />

            <NavbarItem 
              label = {'About Us'}
              link  = {'/about'}
              pathString = {'/about'}
              dropdownOptions = {['Officers', 'Leads', 'Faculty']}
              dropdownLinks = {['/about#officers', '/about#leads', '/about#faculty']}
              closeMobile = {closeMobileMenu}
              darkMode = {darkMode}
            />

            <li>
              <Link to='/join' 
                    className={joinPath ? 'nav-links-mobile-red' : 'nav-links-mobile'} 
                    onClick={() => {closeMobileMenu();}}>
                JOIN
              </Link>
            </li>
          </ul>
          {button && 
            <Button buttonStyle='btn--outline' 
                    buttonSize={joinPath ? 'btn--medium--colored' : 'btn--medium'}
                    darkMode={darkMode}>
              JOIN
            </Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;