import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ripple.png";

function NavBar() {
  const location = useLocation();
  let data = location.state;
  
  const handleLogout = () => {
    console.log('LOGGING OUT');
    data = null;
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "black",
          height: "7vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/" state = {data} style={{ textDecoration: "none" }}>
            <img
              style={{
                width: "4.5em",
                minWidth: "4.5em",
                padding: "1em",
                marginLeft: "1em",
              }}
              src={logo}
              alt="logo"
            />
          </Link>
          <Link to="/" state = {data} style={{ textDecoration: "none" }}>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "1.2em",
                fontStyle: "bold",
                fontWeight: "700",
                padding: "1em",
              }}
            >
              EduPath
            </p>
          </Link>
        </div>
        <div
          style={{
            fontWeight: "700",
            display: "flex",
            gap: "10em",
            alignItems: "center",
          }}
        >
          <div>
            <Link
              to="/courses"
              state = {data}
              id="navbar-courses"
              style={{ textDecoration: "none", color: "white" }}
            >
              EXPLORE COURSES
            </Link>
          </div>
          <div style={{ position: "relative", display: "flex" }}>
            <Link
              to="/careers"
              state = {data}
              id="navbar-careers"
              style={{ textDecoration: "none", color: "white" }}
            >
              FIND A CAREER
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            marginRight: "1em",
          }}
        >
          {data ? (
            <>
            <button
            id="navbar-logout"
            style={{
              backgroundColor: "#e7e7e7",
              fontSize: "16px",
              borderRadius: "8px",
              fontWeight: "700",
              padding: "10px 15px",
              border: "none",
              margin: "5px",
            }}
            onClick={handleLogout}
          >
            <a
              href='/login'
              id="navbar-logout"
              style={{ textDecoration: "none", color: "black" }}
            >
              LOG OUT
            </a>
          </button>
            <div style={{color: "white"}}> Welcome back, {data.fullName} </div>
            </>
  
          ):(
            <>
            <button
            id="navbar-signup"
            style={{
              backgroundColor: "#e7e7e7",
              fontSize: "16px",
              borderRadius: "8px",
              fontWeight: "700",
              padding: "10px 25px",
              border: "none",
              margin: "5px",
            }}
          >
            <a
              href="/signup"
              id="navbar-signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              SIGN UP
            </a>
          </button>
          <button
            class="btn default"
            id="navbar-login"
            style={{
              backgroundColor: "black",
              fontSize: "16px",
              borderRadius: "8px",
              fontWeight: "700",
              padding: "10px 25px",
              border: "none",
            }}
          >
            <a
              href="/login"
              id="navbar-login"
              style={{ textDecoration: "none", color: "white" }}
            >
              LOGIN
            </a>
          </button>
            </>
          )}
          
        </div>
      </div>
    </>
  );
}

export default NavBar;
