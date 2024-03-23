import React, { useState } from "react";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [registerUser, setRegisterUser] = useState();
  const [pass, setPass] = useState();

  const nav = useNavigate();

  const passHandler = (event) => {
    setPass(event.target.value);
  };

  const registerUserHandler = (event) => {
    setRegisterUser(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (registerUser === "Admin" && pass === "Password") {
      localStorage.setItem("user", true);

      nav("/");
      toast.info("Welcome ");
    } else {
      toast.error("User Name Or Password Does not Match");
    }
  };

  return (
    <div className="register">
      <ToastContainer />
      <h2>Register Here</h2>
      <form onSubmit={onsubmitHandler}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter UserName"
          onChange={registerUserHandler}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={passHandler}
          required
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
