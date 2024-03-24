import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Style.module.css";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsActive(true);
    }
  });

  const onLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("searchedItem");
    setIsActive(false);
    nav("/login");
  };
  return (
    <nav className={classes.navbar}>
      <h3 className={classes.logo}>Best4U</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>{!isActive && <Link to="/login">Login</Link>}</li>
        <li>
          {isActive && (
            <button
              type="button"
              onClick={onLogout}
              className="btn btn-warning"
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
