import React, { useEffect, useState } from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
import Ripples from 'react-ripples';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--medium--colored', 'btn--large'];

export const Button = ({
  darkMode = true,
  children, 
  onClick,
  type,
  buttonStyle, 
  buttonSize
}) => {

  const [colorStyle, setColorStyle] = useState('btn--dark');

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  useEffect(() => {
    setColorStyle(darkMode ? 'btn--dark' : 'btn--light');
  }, [darkMode]);

  return (
    <div className='gap-right'>
      <Ripples>
        <Link to='/join' className='btn-mobile'>
          <button
            className={`btn ${colorStyle} ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      </Ripples> 
    </div>
  )
};
