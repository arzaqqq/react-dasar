import React from "react";

// Komponen function dengan props
function ButtonFunction(props) {
    const {
      children = 'hai', 
      variant = "bg-yellow-500", 
      onClick = ()=>{}, 
      type = "button",
      className =""
    } = props;
    return (
      <button className={`w-28 h-full p-2 rounded-md active:bg-blue-900 text-white ${variant} ${className}`}
        type={type}
        onClick={() => onClick()}
      >
  {children}
      </button>
    );
  }

  export default ButtonFunction;