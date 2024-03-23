import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (userName === "Admin" && password === "Password") {
      localStorage.setItem("user", true);

      nav("/");
      toast.info("Welcome");
    } else {
      toast.error("User Name Or Password Does not Match");
    }
  };

  return (
    <div className={classes.login}>
      <ToastContainer />
      <h1>Login Please</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Your User Name"
          onChange={userNameHandler}
          className="form-control m-2"
          value={userName}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={passwordHandler}
          className="form-control m-2"
          value={password}
        />
        <button
          type="button"
          onClick={onsubmitHandler}
          className="btn btn-primary"
        >
          Login
        </button>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "darkblue",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          If You are new Register Here
        </Link>
      </form>
    </div>
  );
};

export default Login;
