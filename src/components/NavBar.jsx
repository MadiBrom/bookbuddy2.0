import React, { useState } from "react";

const NavBar = ({ setSearchParams, handleLogin }) => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [loginData, setLoginData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
  });

  const toggleLogIn = () => {
    setShowLogIn((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(loginData.email, loginData.password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="search">
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="Search for a book..."
            onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
          />
        </label>

        <button onClick={toggleLogIn}>
          {showLogIn ? "Close Log In" : "Log In"}
        </button>
      </div>
      {showLogIn && (
        <div className="login-form">
          <form onSubmit={handleLoginSubmit}>
            <label>
              First:
              <input
                type="text"
                name="first"
                value={loginData.first}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Last:
              <input
                type="text"
                name="last"
                value={loginData.last}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Log In</button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
