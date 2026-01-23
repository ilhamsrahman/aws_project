import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ripple.png";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "7vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      &copy; 2024-{new Date().getFullYear()} EduPath Corp. All rights reserved.
    </div>
  );
}

export default Footer;
