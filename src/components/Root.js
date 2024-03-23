import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import classes from "./Style.module.css";
const Root = () => {
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
    <div>
      <nav className={classes.navbar}>
        <h1 className={classes.logo}>Best4U</h1>
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

      <Outlet />
    </div>
  );
};

export default Root;
