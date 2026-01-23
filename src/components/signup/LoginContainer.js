import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/ripple.png";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const [invalidMessage, setInvalidMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const payload = await axios.get("https://n1m3zwh7xk.execute-api.us-east-1.amazonaws.com/FirstStage/singup", { params: data })
      if (payload.status === 200 || payload.status === 201 ) {
        if (payload.data.success == "true") {
          console.log("SUCCESS!!");
          navigate('/', {state: payload.data.content});
        } else {
          if (payload.data.success == "invalid") {
            setInvalidMessage("Invalid Email Address!");
          } else {
            setInvalidMessage("Wrong Password!")
          }
          console.log(payload.data.success);
          setShowAlert(true);
        }
      }
    } catch (err) {
      console.log("ERROR!");
      console.log(err);
    }
  };

  const inputBoxStyle = {
    color: "black",
    background: "#EDF2F7",
    border: "1px solid #E2E8F0",
    boxSizing: "border-box",
    borderRadius: "12px",
    flex: "none",
    flexGrow: "0",
    margin: "5px 0px",
    padding: "15px",
    fontSize: "inherit",
    fontWeight: "500",
  };

  const submitBoxStyle = {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: "18px",
    boxSizing: "border-box",
    backdropFilter: "blur(6px)",
    borderRadius: "12px",
    fontWeight: "bold",
    fontSize: "inherit",
    width: "100%",
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
              height: "5vh",
              filter: "invert(0.6)",
            }}
            src={logo}
            alt="Logo"
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
            Login
          </span>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
                color: "#718096",
              }}
            >
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                style={{
                  ...inputBoxStyle,
                  height: ["40px", "40px", "60px", "60px"],
                }}
                {...register("emailAddress", {
                  required: "Required",
                  pattern: {
                    value:
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span
                  style={{
                    color: "#ED4337",
                    fontWeight: "bold",
                    fontSize: [12, 12, 12, 14],
                  }}
                >
                  {errors.email.message}
                </span>
              )}
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                style={{
                  ...inputBoxStyle,
                  height: ["40px", "40px", "60px", "60px"],
                }}
                {...register("password", {
                  required: "Required",
                })}
              />
              {errors.password && (
                <span
                  style={{
                    color: "#ED4337",
                    fontWeight: "bold",
                    fontSize: [12, 12, 12, 14],
                  }}
                >
                  {errors.password.message}
                </span>
              )}
              {showAlert ? (
                <span
                  style={{
                    color: "#ED4337",
                    fontWeight: "bold",
                    fontSize: [12, 12, 12, 14],
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {invalidMessage}
                </span>
              ) : null}
              <a href="/password/recover">
                <span
                  style={{
                    textAlign: "right",
                    fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
                    position: "relative",
                  }}
                >
                  Forgot Password?
                </span>
              </a>
            </div>
            <div
              style={{
                marginTop: ["10px", "10px", "15px", "15px"],
                fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
              }}
            >
              <button
                type="submit"
                style={{
                  ...submitBoxStyle,
                  background: "#0058D2",
                  height: ["40px", "40px", "55px", "55px"],
                }}
              >
                LOGIN
              </button>
            </div>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
            }}
          >
            <span style={{ marginRight: "5px" }}>Don't have an account?</span>
            <a href="/signup" style={{ id: "signup_container-login" }}>
              <span
                style={{
                  textAlign: "right",
                  position: "relative",
                  textDecoration: "underline",
                }}
              >
                Sign Up
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginContainer;
