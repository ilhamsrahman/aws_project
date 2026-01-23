import React, { useEffect, useState } from "react";
import CareerCard from "./CareerCard";
import careerImg from "../../assets/job.png";
import FilterCareers from "./FilterCareers";
import axios from "axios";
// todo: benernin cssnya

function Careers() {
  const [careersList, setCareersList] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);
  const [filterDegree, setFilterDegree] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterSalary, setFilterSalary] = useState("");

  const filterData = [filterDegree, filterField, filterSalary];

  //filter section
  const filterCareer = (event) => {
    setCurrentPage(1);
    if (event.target.name === "degree") {
      setFilterDegree(event.target.value);
    } else if (event.target.name === "salary") {
      setFilterSalary(event.target.value);
    } else if (event.target.name === "field") {
      setFilterField(event.target.value);
    }
  };

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
          imgSrc: careerImg,
          application_link: item.application_link,
          degree: item.degree,
        }));

        setCareersList(result);
      })
      .catch((error) => {
        console.error("Error retrieving careers:", error);
      });
  }, []);

  const clearFilter = () => {
    setFilterDegree("");
    setFilterField("");
    setFilterSalary("");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const careersPerPage = 12;

  const indexOfLastCareer = currentPage * careersPerPage;
  const indexOfFirstCareer = indexOfLastCareer - careersPerPage;
  const currentCareer =
    careersList && careersList.length > 0
      ? careersList.slice(indexOfFirstCareer, indexOfLastCareer)
      : [];
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "20px",
          borderWidth: "1px",
          borderRadius: "20px",
          backgroundImage: `url(${require("../../assets/about-us-bg.jpg")})`,
          textAlign: "center",
          backgroundSize: "cover",
          padding: "8px 10px",
          paddingTop: "8px",
          paddingBottom: "12px",
        }}
      >
        <h1 style={{ color: "black", fontWeight: "900", fontSize: "2.5rem" }}>
          Find New Careers for You
        </h1>
      </div>
      <div>
        <h1 style={{ margin: "20px", color: "black", fontSize: "1.5rem" }}>
          All Available Careers:
        </h1>
        {careersList ? (
          <FilterCareers
            allCareers={careersList}
            filterCareer={filterCareer}
            filterData={filterData}
            clearFilter={clearFilter}
          />
        ) : null}
      </div>
      <div
        style={{
          margin: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2.5em",
        }}
      >
        {careersList && careersList.length > 0 ? (
          careersList.map((career, i) => (
            <React.Fragment key={i}>
              <CareerCard careerData={career} />
            </React.Fragment>
          ))
        ) : (
          <p>No careers available</p>
        )}
      </div>
    </div>
  );
}

export default Careers;
