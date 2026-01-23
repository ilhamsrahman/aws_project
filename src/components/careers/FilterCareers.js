import React, { useState } from "react";

const FilterCareers = ({
  allCareers,
  filterCareer,
  clearFilter,
  filterData,
  onClose,
}) => {
  const uniqueDegree = [
    ...new Set(
      allCareers.map((career) => {
        if (career.degree != null) return career.degree;
      })
    ),
  ];

  const salaryGap = [
    "< $15,000",
    "< $30,000",
    "< $75,000",
    "< $100,000",
    "< $200,000",
  ];
  const uniqueField = [
    ...new Set(
      allCareers.map((career) => {
        if (career.tags != null) return career.tags[0];
      })
    ),
  ];

  const handleButtonClick = () => {
    clearFilter();
  };

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
            htmlFor="degree"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Degree Qualification
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="degree"
            onChange={filterCareer}
            value={filterData[0]}
          >
            {!filterData[0] && (
              <option value="" disabled>
                Select Degree
              </option>
            )}
            {uniqueDegree.length > 0 &&
              uniqueDegree.map((degree, i) => {
                if (degree != null)
                  return (
                    <option key={i} value={degree}>
                      {degree}
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
            htmlFor="jobField"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Job Field
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="field"
            onChange={filterCareer}
            value={filterData[1]}
          >
            {!filterData[1] && (
              <option value="" disabled>
                Select Job Field
              </option>
            )}
            {uniqueField.length > 0 &&
              uniqueField.map((fields, i) => {
                if (fields != null)
                  return (
                    <option key={i} value={fields}>
                      {fields}
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
            htmlFor="salary"
            style={{ color: "#0628A3", fontWeight: "bold", fontSize: "20px" }}
          >
            Salary
          </label>
          <select
            style={{
              overflowY: "scroll",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            name="salary"
            onChange={filterCareer}
            value={filterData[2]}
          >
            {!filterData[2] && (
              <option value="" disabled>
                Select Salary Range
              </option>
            )}
            {salaryGap.length > 0 &&
              salaryGap.map((salary, i) => {
                if (salary != null)
                  return (
                    <option key={i} value={salary}>
                      {salary}
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
          <button style={buttonStyle} onClick={handleButtonClick}>
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterCareers;
