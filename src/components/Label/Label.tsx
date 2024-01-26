import './Labes.css';
import { useState } from 'react';

interface IColor {
  color: string,
  borderColor: string,
  statusIcon: string
}

function Label({ color, borderColor, statusIcon }: IColor) {
  const setColor = {
    color: borderColor,
    backgroundColor: color,
    borderColor,
  };

  const [isPressed, setClosed] = useState(true);
  const closedStatus = isPressed ? '' : 'closed-notification';
  const closedText = isPressed ? 'Lorem ipsum.' : 'Click to expand';

  const handleNotification = () => {
    setClosed(!isPressed);
  };

  return (
    <li>
      <div
        className={`notification-wrapper ${closedStatus}`}
        style={setColor}
        onClick={handleNotification}
      >
        <img
          src={statusIcon}
          alt="Missed_logo"
          className="status-icon"
        />
        {closedText}
        <img
          src="/close.png"
          alt="Close_icon"
          className="close-icon"
          onClick={handleNotification}
        />
      </div>
    </li>
  );
}

export default Label;
