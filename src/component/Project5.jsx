import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Project5 = () => {
  const [inputShow, setInputShow] = useState(false);

  return (
    <div>
      <section className="container" style={{width:'500px', height:'500px', background:'white'}}>
        {inputShow ? (
          <input type="text" placeholder="search..." />
        ) : (
          <FaSearch OnClick={() => setInputShow(true)} style ={{background:'white'}} />
        )}
      </section>
    </div>
  );
};

export default Project5;
