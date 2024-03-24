import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Style.module.css";
const HomePage = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsActive(true);
    }
  });
  return (
    <div className={classes.display}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Indian-Food-wikicont.jpg"
        alt="alt-imag"
      />
      {!isActive && <Link to="/login">Please Login First</Link>}
      {isActive && <Link to="/recipe">Go To Recipe Page</Link>}
    </div>
  );
};

export default HomePage;
