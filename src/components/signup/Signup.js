import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/ripple.png";


const countries = [
  { value: 'usa', label: 'USA' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'UK' },
  // Add more countries as needed
];

function App() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {

    try {
      const payload = await axios.post("https://n1m3zwh7xk.execute-api.us-east-1.amazonaws.com/FirstStage/singup", JSON.stringify({
        password: data.password ? data.password : "",
        emailAddress: data.email,
        fullName: data.firstName + " " + data.lastName,
        countryOfOrigin: data.countryOfOrigin,
        phoneNumber: data.pho8neNumber,
      }))
      if (payload.status === 200 || payload.status === 201 ) {
        console.log(payload);
        console.log("SUCCESS!!");
        navigate('/');

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
      }}>
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
        <h1>Sign Up</h1>
        <img
            style={{
              marginBottom: "1em",
              height: "5vh",
              filter: "invert(0.6)",
            }}
            src={logo}
            alt="Logo"
          />




        <form onSubmit={handleSubmit(onSubmit)}>
        <div 
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
                  color: "#718096",
                }}
              >
            <label>Email:</label>
            <input style={{
                  ...inputBoxStyle,
                  height: ["40px", "40px", "60px", "60px"],
                }} type="email" name="email" {...register('email', { required: true })} />
            {errors.email && <span>Email is required</span>}
          </div>

          <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
            color: "#718096",
          }}
          >
            <label>Password:</label>
            <input 
            style={{
              ...inputBoxStyle,
              height: ["40px", "40px", "60px", "60px"],
            }}
            type="password" name="password" {...register('password', { required: true })} />
            {errors.password && <span>Password is required</span>}
          </div>
          <div
          style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
                  color: "#718096",
                }}>
            <label>Re-enter Password:</label>
            <input
            style={{
              ...inputBoxStyle,
              height: ["40px", "40px", "60px", "60px"],
            }}
            type="password" name="repassword" {...register('repassword', { required: true })} />
            {errors.repassword && <span>Please re-enter your password</span>}
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
            color: "#718096",
          }}>
            <label>First Name:</label>
            <input
            style={{
              ...inputBoxStyle,
              height: ["40px", "40px", "60px", "60px"],
            }}
            type="text" name="firstName" {...register('firstName', { required: true })} />
            {errors.firstName && <span>First name is required</span>}
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
            color: "#718096",
          }}>
            <label>Last Name:</label>
            <input
            style={{
              ...inputBoxStyle,
              height: ["40px", "40px", "60px", "60px"],
            }}
            type="text" name="lastName" {...register('lastName', { required: true })} />
            {errors.lastName && <span>Last name is required</span>}
          </div>
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
            color: "#718096",
          }}>
            <label>Phone Number:</label>
            <input
            style={{
              ...inputBoxStyle,
              height: ["40px", "40px", "60px", "60px"],
            }}
            type="tel" name="phoneNumber" {...register('phoneNumber', { required: true })} />
            {errors.phoneNumber && <span>Phone number is required</span>}
          </div>
          <div
          style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  fontSize: ["0.675rem", "0.75rem", "1rem", "1rem"],
                  color: "#718096",
                }}>
            <label>Country of Origin:</label>
            <select 
            style={{
              ...inputBoxStyle,
              height: ["40px", "40px", "60px", "60px"],
            }}
            name="countryOfOrigin" {...register('countryOfOrigin', { required: true })}>
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            {errors.country && <span>Please select your country</span>}
          </div>
          <button type="submit"
          style={{
            ...submitBoxStyle,
            background: "#0058D2",
            height: ["40px", "40px", "55px", "55px"],
          }}
          >Sign Up</button>
        </form>
        </div>
    </div>
    </>
  );
}

export default App;