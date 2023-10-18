import React from "react";

function Buttons({ label, className, onClick }) {
  return (
    <button className={`buttonBase ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Buttons;
