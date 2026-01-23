import React, { useState } from "react";
import { useEffect, useRef } from "react";
import bgPhoto from "../../assets/bg.png";
import SearchIcon from "@mui/icons-material/Search";
import NewHere from "./NewHere";
import EventsSection from "./EventsSection";
import CareerSection from "./CareerSection";

const HomeContainer = ({ anchorTarget }) => {
  useEffect(() => {
    const sentences = [
      "Abnormal Psychology",
      "Astrophysics",
      "Computer Science",
    ];
    const typewriter = document.getElementById("typewriter");
    let sentenceIndex = 0;
    let charIndex = 0;

    const typeNextCharacter = () => {
      const sentence = sentences[sentenceIndex];
      typewriter.textContent = sentence.substring(0, charIndex);
      charIndex++;
      if (charIndex > sentence.length) {
        charIndex = 0;
        sentenceIndex++;
        if (sentenceIndex >= sentences.length) {
          sentenceIndex = 0;
        }
      }
      setTimeout(typeNextCharacter, 150); // Adjust the typing speed here (in milliseconds)
    };

    typeNextCharacter();
  }, []);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "96vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <img
          src={bgPhoto}
          alt="backgroudnImg"
          style={{
            position: "absolute",
            width: "100%",
            height: "96vh",
            objectFit: "cover",
            filter: "blur(2px)",
            opacity: 0.6,
          }}
        />
        <div
          class="box"
          style={{
            zIndex: 1,
            backgroundColor: "white",
            position: "absolute",
            padding: 20,
            width: 700,
            borderRadius: 30,
            display: "flex",
            alignItems: "center",
            gap: "2em",
            fontSize: "20px",
          }}
        >
          <SearchIcon />
          What Do You Want to Learn Today?
          <span
            id="typewriter"
            style={{ color: "black", fontWeight: 700 }}
          ></span>
        </div>
      </div>
      <EventsSection />
      <CareerSection />
      <NewHere />
    </>
  );
};

export default HomeContainer;
