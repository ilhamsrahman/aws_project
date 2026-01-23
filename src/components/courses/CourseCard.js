import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ courseData }) => {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "25px",
          height: "auto",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "0.5em",
            position: "relative",
          }}
        >
          <div>
            <div
              key={"course-subject"}
              style={{
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "900",
                padding: "12px",
                zIndex: 999,
                top: "20px",
                left: "20px",
                position: "absolute",
                backgroundColor: "white",
              }}
            >
              {courseData.subject}
            </div>
            <img
              alt="course-img"
              src={courseData.image}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                height: "30em",
                position: "relative",
              }}
            />
          </div>

          <div
            style={{
              overflow: "hidden",
              position: "relative",
              marginBottom: "-1em",
              width: "90%",
            }}
          >
            <h4
              style={{
                fontSize: "20px",
                fontWeight: "900",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "black",
                marginBottom: "0em",
              }}
            >
              {courseData.title + " | " + courseData.university}
            </h4>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {courseData.duration &&
                courseData.level &&
                courseData.language && (
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    Duration: {courseData.duration} | Level: {courseData.level}{" "}
                    | Language: {courseData.language}
                  </p>
                )}
            </div>
            <div style={{ marginBottom: "3em", marginTop: "1em" }}>
              <Link
                style={{
                  backgroundColor: "#2C5282",
                  fontSize: "16px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  padding: "10px 20px",
                  border: "none",
                  color: "white",
                  textDecoration: "none",
                }}
                to={{
                  pathname: `/courses/${courseData.id}`,
                  state: { id: courseData.id }
                }}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
