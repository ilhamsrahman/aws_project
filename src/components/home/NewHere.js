import React, { useState } from "react";
import CustomInput from "./CustomInput";

const NewHere = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    {
      /* TODO: API CALL! */
    }
    //   await axios.post("/api/forms/connect-with-us", {
    //     name: name,
    //     email: email,
    //     notes: notes,
    //     phoneNumber: phoneNumber,
    //     lifestage: lifestage,
    //   });
    //   setSubmitted(true);
    //   setTimeout(() => {
    //     resetForm();
    //   }, 2000);
    //   return;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setNotes("");
    setPhoneNumber("");
    setSubmitted(false);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#EEF7FF",
          backdropFilter: "blur(7px)",
          height: "60vh",
          gap: "10em",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "5em",
          }}
        >
          <h1
            style={{
              fontSize: "1.875em",
              color: "#505050",
              fontWeight: "bold",
              fontFamily: "Inter",
            }}
          >
            New here?
          </h1>
          <h1
            style={{
              fontSize: "1.875em",
              color: "#0628A3",
              fontWeight: "bold",
              fontFamily: "Inter",
            }}
          >
            Connect With Us!
          </h1>
        </div>
        <div
          style={{
            height: "80%",
            width: "40%",
            borderWidth: "1px",
            backgroundColor: "#F7FAFC",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={onSubmit} style={{ width: "90%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1vh",
              }}
            >
              <div style={{}}>
                <CustomInput
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <CustomInput
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <CustomInput
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <CustomInput
                  id="notes"
                  type="text"
                  placeholder="Notes and remarks"
                  value={notes}
                  required
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                marginTop: "1em",
                backgroundColor: "rgb(165, 203, 255)",
                fontSize: "24px",
                borderRadius: "8px",
                fontWeight: "700",
                padding: "1em",
                border: "none",
                width: "100%",
              }}
            >
              Submit
            </button>
            {submitted && <label>Thank you. We will be in touch soon!</label>}
          </form>
        </div>
      </div>
    </>
  );
};

export default NewHere;
