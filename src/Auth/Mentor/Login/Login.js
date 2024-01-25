import React from "react";
// import "./Login.css";

export default function Login() {
  const handleLogin = () => {
    console.log("Login button clicked");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google button clicked");
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <span>Dhanstithi</span>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="login-container">
        <h2 className="lhead"> Mentor Login</h2>
        <hr />
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" placeholder="Enter your ID" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="button btnp" onClick={handleLogin}>
            Login
          </button>
          <br />
          <p>You can also login with google if you verified your email</p>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="google-login-btn"
          >
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}
