import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {setData} from '../utils/storage'
import "./Login.css"
// src/components/Login.js
// import "../dashboard.css";
import { AuthApi } from '../services/AuthService';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const defaultUsername = "admin";
  const defaultPassword = "password";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      email: username,
      password: password

    }

    // const res = AuthApi.singIn(data)
    // console.log('res', res);

    if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem('isloggedin', true);
    // await setData("isloggedin", true);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button className="button2" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
