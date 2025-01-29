import React from "react";

// Komponen function dengan props
function ButtonFunction(props) {
    const {children = 'hai', variant = "bg-yellow-500" } = props;
    return (
      <button className={`w-20 h-full p-2 rounded-md active:bg-blue-900 text-white ${variant}`}>
  {children}
      </button>
    );
  }

  export default ButtonFunction;