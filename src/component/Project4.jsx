import React, { useState } from "react";
import "./Project4.css" 

const Project4 = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonstyle] = useState("white");
  const [themeName, setThemeName] = useState("light Theme");
 
  const handlecolor = () =>{
    setBackgroundColor(backgroundColor ==="white"?"#1b1b1b":"white");
    setTextColor(textColor==="#1b1b1b"?"white":"#1b1b1b");
    setButtonstyle(buttonStyle ==="white"?"#1b1b1b":"white");
    setThemeName(themeName ==="light Theme"?"dark Theme":"light Theme")

  }

  return (
    <div>
      <section style={{ backgroundColor, color: textColor, height:'500px', width:'500px' }}>

        <button
          style={{
            background:buttonStyle,
            color: textColor,
            border: `2px solid red`,
            cursor:'pointer'
          }}
          onClick={handlecolor}
        >
          {themeName}
        </button>
      </section>
    </div>
  );
};

export default Project4;
