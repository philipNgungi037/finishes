import React from "react";
import './buttons.css';

// a re-usable normal button to be used acrross the app, it can be customized on colors according to its usage 
// for example; green for Create/Add, red for Remove/delete among others.

//** pass props to make it dynamic/custom.
const NormalButton = ({ onClick, className, color, children }) => {
  // buttonStyles variable for styling, has its className called (normal-button) incase of cutom css. it carries color prop to be adjusted dynamically...hapo sawa!
   const buttonStyles = `normal-button w-1/2 p-2 font-bold text-sm hover:text-xs rounded-md ${color}-button ${className}`;
  return (
    <button
       className={buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NormalButton;