import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import './Card.css';

function scrollTo(ref) {
  if (!ref.current) return;
  window.scrollTo({top: ref.current.offsetTop - 120, behavior: 'smooth'});
}

function Card(props) {

  const {
    darkMode,
    className,
    pathString
  } = props;

  const [here, setHere] = useState(false);
  const location = useLocation();
  let ref = useRef(null);

  useEffect (() => {
    setHere(location.pathname + location.hash === pathString);
    if (here) scrollTo(ref);
    else if (!location.hash)
      window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location.pathname, location.hash, pathString, here]);
  
  return (
    <div className={'card ' + className} style={{borderColor:here?'orangered':null}} ref={ref}>
      {pathString && <Link to={here ? `${location.pathname}` : `${pathString}`} 
            className={'jump' + (darkMode ? ' jump-dark' : ' jump-light')}> 
        {here ? '^' : '#'} 
      </Link>}
      {props.children}
    </div>
  );
}

export default Card;