import React, { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (userName === "Admin" && password === "Password") {
      localStorage.setItem("user", true);
      nav("/");
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
          placeholder="Username"
          onChange={userNameHandler}
          className="form-control m-2"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
          className="form-control m-2"
        />
        <button
          type="button"
          onClick={onsubmitHandler}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
