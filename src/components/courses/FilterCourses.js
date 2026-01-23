import React, { useState } from "react";

const filterCourses = ({
  allCourses,
  filterCourse,
  clearFilter,
  filterData,
  onClose,
}) => {
  const uniqueLanguage = [
    ...new Set(
      allCourses.map((course) => {
        if (course.language != null) return course.language;
      })
    ),
  ];

  const uniqueDuration = ["1 days", "< 3 days", "< 5 days", "< 30 days"];
  const uniqueSubject = [
    ...new Set(
      allCourses.map((course) => {
        if (course.subject != null) return course.subject;
      })
    ),
  ];

  const uniqueLevel = [
    ...new Set(
      allCourses.map((course) => {
        if (course.level != null) return course.level;
      })
    ),
  ];

  const buttonStyle = {
    fontSize: "16px",
    borderRadius: "8px",
    fontWeight: "700",
    padding: "10px 25px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "container.lg", marginLeft: "1em" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
          gap: "2em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: "1em",
          }}
        >
          <label
            htmlFor="subject"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Subject
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="subject"
            onChange={filterCourse}
            value={filterData[0]}
          >
            {!filterData[0] && (
              <option value="" disabled>
                Select a Subject
              </option>
            )}
            {uniqueSubject.length > 0 &&
              uniqueSubject.map((subject, i) => {
                if (subject != null)
                  return (
                    <option key={i} value={subject}>
                      {subject}
                    </option>
                  );
              })}
          </select>
        </div>
        <div
          style={{
            alignItems: "left",
            gap: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="level"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Level
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="level"
            onChange={filterCourse}
            value={filterData[1]}
          >
            {!filterData[1] && (
              <option value="" disabled>
                Select Level
              </option>
            )}
            {uniqueLevel.length > 0 &&
              uniqueLevel.map((level, i) => {
                if (level != null)
                  return (
                    <option key={i} value={level}>
                      {level}
                    </option>
                  );
              })}
          </select>
        </div>
        <div
          style={{
            alignItems: "left",
            gap: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="language"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Language
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="language"
            onChange={filterCourse}
            value={filterData[2]}
          >
            {!filterData[2] && (
              <option value="" disabled>
                Select Language
              </option>
            )}
            {uniqueLanguage.length > 0 &&
              uniqueLanguage.map((language, i) => {
                if (language != null)
                  return (
                    <option key={i} value={language}>
                      {language}
                    </option>
                  );
              })}
          </select>
        </div>
        <div
          style={{
            alignItems: "left",
            gap: "1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            htmlFor="duration"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Duration
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="duration"
            onChange={filterCourse}
            value={filterData[3]}
          >
            {!filterData[3] && (
              <option value="" disabled>
                Select Duration
              </option>
            )}
            {uniqueDuration.length > 0 &&
              uniqueDuration.map((duration, i) => {
                if (duration != null)
                  return (
                    <option key={i} value={duration}>
                      {duration}
                    </option>
                  );
              })}
          </select>
        </div>
        <div
          style={{
            alignItems: "left",
            gap: "2.5em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div></div>
          <button style={buttonStyle} onClick={clearFilter}>
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default filterCourses;
