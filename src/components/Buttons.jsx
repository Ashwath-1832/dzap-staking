import React from "react";

function Buttons({ label, className }) {
  return <button className={`buttonBase ${className}`}>{label}</button>;
}

export default Buttons;
