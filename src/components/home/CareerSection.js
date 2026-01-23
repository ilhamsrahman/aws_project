import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../../assets/NextArrow.png";
import prevArrow from "../../assets/PrevArrow.png";
import coursePhotoExample from "../../assets/job.png";
import EventsSectionCard from "./EventsSectionCard";
import CareerSectionCard from "./CareerSectionCard";
import axios from "axios";

const CareerSection = () => {
  const [careers, setCareers] = useState([]);
  useEffect(() => {
    const url =
      "https://n1m3zwh7xk.execute-api.us-east-1.amazonaws.com/FirstStage";
    const endpoint = "/careers";

    axios
      .get(url + endpoint)
      .then((response) => {
        console.log(response.data); // Check the response data
        
        let result = JSON.parse(response.data.body).map(item => ({
          id: item.id,
          title: item.title,
          company: item.company,
          tags: item.tags,
          median_salary: item.median_salary,
          description: item.description,
          image: coursePhotoExample,
          application_link: item.application_link,
          degree: item.degree,
        }));

        setCareers(result);
      })
      .catch((error) => {
        console.error("Error retrieving careers:", error);
      });
  }, []);


  const [computedMargin, setComputedMargin] = useState();
  const [slideIndex, setSlideIndex] = useState(0);

  const marginRef = useRef(null);

  function SampleNextArrow(props) {
    const { onClick, index, maxSlide } = props;
    return index !== maxSlide - 1 ? (
      <div
        style={{
          display: "block",
          right: "0%",
          position: "absolute",
          top: "40%",
          zIndex: 8,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img src={nextArrow} width="80%" alt="Arrow" />
      </div>
    ) : null;
  }

  function SamplePrevArrow(props) {
    const { onClick, index } = props;
    return index !== 0 ? (
      <div
        style={{
          display: "block",
          left: "3%",
          position: "absolute",
          top: "40%",
          zIndex: 8,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <img src={prevArrow} width="80%" alt="Arrow" />
      </div>
    ) : null;
  }

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  const onArrowClick = (e) => {
    setSlideIndex(e);
  };

  const sliderSettings = {
    centerMode: false,
    dots: false,
    focusOnSelect: true,
    infinite: false,
    slidesPerRow: 1,
    speed: 500,
    swipeToSlide: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow index={slideIndex} maxSlide={careers.length - 2} />
    ),
    prevArrow: <SamplePrevArrow index={slideIndex} />,
    afterChange: onArrowClick,
  };

  const sliderStyle = {
    width: "100%",
    position: "relative",
    height: "auto",
  };

  return (
    <>
      <div
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "row",
          marginLeft: "2em",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            color: "#0628A3",
            alignSelf: "flex-start",
            fontSize: "3xl",
            fontWeight: "900",
          }}
        >
          Explore Careers for You!
        </h1>
        <button
          id="see-all"
          style={{
            backgroundColor: "white",
            color: "#0628A3",
            border: "2px solid #0628A3",
            fontSize: "16px",
            borderRadius: "8px",
            fontWeight: "700",
            padding: "0 20px",
            marginRight: "5em",
          }}
        >
          <a
            href="/careers"
            id="career-button"
            style={{ textDecoration: "none" }}
          >
            Explore More
          </a>
        </button>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "auto",
          whiteSpace: "nowrap",
          marginLeft: "3em",
          marginBottom: "3em",
          overflowX: "hidden",
          // _hover={{
          //   overflowX: "auto",
          // }}
        }}
      >
        <Slider {...sliderSettings} style={sliderStyle}>
          {careers.length > 0 &&
            careers.map((event, i) => {
              return (
                <CareerSectionCard
                  width="35em"
                  height="auto"
                  event={event}
                  key={"event" + i}
                />
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default CareerSection;
