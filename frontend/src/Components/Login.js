import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
// src/components/Login.js
// import "../dashboard.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const defaultUsername = "admin";
  const defaultPassword = "password";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem('isloggedin', true);
      navigate("/AdminDashboard");
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
