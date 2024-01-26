import { useState } from 'react';
import './Hamburger.css';

function Hamburger() {
  const [isPressed, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isPressed);
  };

  return (
    <button type="button" className={`hamburger-main ${isPressed ? 'open-menu' : ''}`} onClick={handleClick}>
      <div className="burger-icon line-1" />
      <div className="burger-icon line-2" />
      <div className="burger-icon line-3" />
    </button>
  );
}

export default Hamburger;
