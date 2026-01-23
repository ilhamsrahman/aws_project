import React, { useState } from "react";
import logo from "../../assets/ripple.png";

// import { customAxios as axios } from "../helpers/customAxios";

const SignUpContainer = (props) => {
  const [invalidLogin, setInvalidLogin] = useState("");
  const { history } = props;

  const signupBoxStyle = {
    color: "white",
    alignItems: "center",
    alignSelf: "stretch",
    padding: "18px",
    boxSizing: "border-box",
    backdropFilter: "blur(6px)",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "inherit",
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(${require("../../assets/default-hk-background.jpeg")})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "40vw",
            margin: "auto",
            padding: "5em",
            background: "#f7fafc",
            borderRadius: "16px",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              marginBottom: "1em",
              height: "20vh",
              filter: "invert(0.6)",
            }}
            src={logo}
            alt="Logo of EduPath"
          />
          <span
            style={{
              fontWeight: "700",
              fontSize: "1.05rem",
              color: "#656565",
              marginBottom: "2em",
            }}
          >
            EduPath Corp
          </span>
          <span
            style={{
              fontWeight: "800",
              fontSize: "2.75rem",
              color: "#2D3748",
              marginBottom: "1em",
            }}
          >
            Sign Up
          </span>
          <div
            style={{
              fontSize: "1rem",
            }}
          >
            <a href="/signup/form" style={{ id: "signup_container-signup" }}>
              <button
                style={{
                  ...signupBoxStyle,
                  hover: { opacity: "0.75" },
                  background: "#0058D2",
                  height: ["40px", "40px", "55px", "55px"],
                  marginTop: "0",
                  id: "signup_container-signup",
                }}
              >
                SIGN UP WITH PERSONAL EMAIL
              </button>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
            }}
          >
            <span style={{ marginRight: "5px" }}>Already have an account?</span>
            <a href="/login" style={{ id: "signup_container-login" }}>
              <span
                style={{
                  textAlign: "right",
                  position: "relative",
                  textDecoration: "underline",
                }}
              >
                Login
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpContainer;
