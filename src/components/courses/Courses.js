import React, { useEffect, useState } from "react";
import FilterCourses from "./FilterCourses";
import CourseCard from "./CourseCard";
import universityPhoto from "../../assets/university.png";
import axios from "axios";

function Courses() {
  const [coursesList, setCourses] = useState([]);

  useEffect(() => {
    const url =
      "https://n1m3zwh7xk.execute-api.us-east-1.amazonaws.com/FirstStage";
    const endpoint = "/courses";

    axios
      .get(url + endpoint)
      .then((response) => {
        console.log(response.data); // Check the response data

        let result = JSON.parse(response.data.body).map((item) => ({
          id: item.id,
          title: item.title,
          university: item.university,
          language: item.language,
          duration: item.duration,
          subject: item.subject,
          level: item.level,
          image: universityPhoto,
        }));

        // Process the careersList as needed
        setCourses(result);
      })
      .catch((error) => {
        console.error("Error retrieving courses:", error);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;
  const [filterSubject, setFilterSubject] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("");
  const [filterDuration, setFilterDuration] = useState("");

  const filterData = [
    filterSubject,
    filterLevel,
    filterLanguage,
    filterDuration,
  ];

  const filterCourse = (event) => {
    setCurrentPage(1);
    if (event.target.name === "subject") {
      setFilterSubject(event.target.value);
    } else if (event.target.name === "language") {
      setFilterLanguage(event.target.value);
    } else if (event.target.name === "level") {
      setFilterLevel(event.target.value);
    } else if (event.target.name === "duration") {
      setFilterDuration(event.target.value);
    }
  };

  const filteredCourses = coursesList
    .filter((course) => {
      if (filterSubject === "") return true;
      else if (course.subject != null)
        return course.subject.includes(filterSubject);
    })
    .filter((course) => {
      if (filterLanguage === "") return true;
      else if (course.language != null)
        return course.language.includes(filterLanguage);
    })
    .filter((course) => {
      if (filterLevel === "") return true;
      else if (course.level != null) return course.level.includes(filterLevel);
    })
    .filter((course) => {
      if (filterDuration === "") return true;
      else if (course.duration != null) {
        const courseDay = parseInt(course.duration);
        const filterDay = parseInt(filterDuration.replace(/\D/g, ""));
        return courseDay < filterDay || courseDay === filterDay;
      }
    });
  const clearFilter = () => {
    setFilterDuration("");
    setFilterSubject("");
    setFilterLanguage("");
    setFilterLevel("");
  };

  //pagination section
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
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
          width: "90%",
        }}
      >
        <h1 style={{ color: "black", fontWeight: "900", fontSize: "2.5rem" }}>
          Explore Courses to Learn
        </h1>
      </div>
      <div>
        <h1 style={{ margin: "20px", color: "black", fontSize: "1.5rem" }}>
          Find Something Interesting:
        </h1>
        <FilterCourses
          allCourses={coursesList}
          filterCourse={filterCourse}
          filterData={filterData}
          clearFilter={clearFilter}
        />
      </div>
      <div
        style={{
          margin: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2.5em",
        }}
      >
        {currentCourses.length > 0 &&
          currentCourses.map((course, i) => (
            <>
              <CourseCard courseData={course} allCourses={filteredCourses} />
            </>
          ))}
        {/* add pagination  */}
      </div>
    </div>
  );
}

export default Courses;
