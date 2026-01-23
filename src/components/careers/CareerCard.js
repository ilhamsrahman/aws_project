import React, { useState } from "react";
const CareerCard = ({ careerData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (e) => {
    if (!e.target.href) {
      setIsOpen(true);
    }
  };

  const onClose = (e) => {
    setIsOpen(false);
  };

  return (
    <>
    {console.log(careerData)}
      <div
        style={{
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "25px",
          height: "auto",
          cursor: "pointer",
        }}
        onClick={onOpen}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <div>
            <img
              alt="event-img"
              src={careerData?.imgSrc}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "-1em",
              }}
            >
              {careerData?.tags.map((tag, i) => (
                <div
                  key={"event" + i}
                  style={{
                    borderRadius: "25px",
                    fontSize: "14px",
                    padding: "10px",
                    marginRight: "1.5em",
                    backgroundColor: "#E2E8F0",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
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
              {careerData?.title + " - " + careerData?.company}
            </h4>
            <div>
              {careerData?.median_salary && (
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                  Median Salary: {careerData?.median_salary}
                </p>
              )}
            </div>
            <div
              style={{
                width: "100%",
                backgroundColor: "#F9F9F9",
                borderRadius: "20",
                padding: "0.5em",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {careerData?.description}
              </p>
            </div>
            <div>
              {careerData?.application_link.length > 0 && (
                <button
                  id="apply-now"
                  style={{
                    marginTop: "1em",
                    marginBottom: "2em",
                    backgroundColor: "#2C5282",
                    fontSize: "16px",
                    borderRadius: "8px",
                    fontWeight: "700",
                    padding: "10px 20px",
                    border: "none",
                  }}
                >
                  <a
                    href={
                      careerData?.application_link
                        ? careerData?.application_link
                        : null
                    }
                    style={{
                      display: "inline-block",
                      color: "white",
                      textDecoration: "none",
                    }}
                    disabled={careerData?.application_link.length <= 0}
                  >
                    Apply Now
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            className="modal overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 9998,
            }}
          ></div>
          <div
            class="modal"
            style={{
              zIndex: 9999,
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              width: "30%",
              height: "auto",
              overflow: "auto",
              borderRadius: "20px",
            }}
          >
            <button
              style={{
                position: "fixed",
                right: "0.5em",
                top: "1em",
                backgroundColor: "transparent",
                border: "none",
                fontWeight: 900,
                fontSize: "20px",
              }}
              onClick={onClose}
            >
              X
            </button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <div>
                <img
                  alt="event-img"
                  src={careerData?.imgSrc}
                  style={{
                    objectFit: "cover",
                    marginTop: "2.5em",
                    borderRadius: "10px",
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "-1em",
                  }}
                >
                  {careerData?.tags.map((tag, i) => (
                    <div
                      key={"event" + i}
                      style={{
                        borderRadius: "25px",
                        fontSize: "14px",
                        padding: "10px",
                        marginRight: "1.5em",
                        backgroundColor: "#E2E8F0",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
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
                  {careerData?.title + " - " + careerData?.company}
                </h4>
                <div>
                  {careerData?.median_salary && (
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Median Salary: {careerData?.median_salary}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#F9F9F9",
                    borderRadius: "20",
                    padding: "1em",
                    alignItems: "center",
                    height: "auto",
                    textOverflow: "ellipsis",
                  }}
                >
                  {careerData?.description}
                </div>
                <div>
                  {careerData?.application_link.length > 0 && (
                    <button
                      id="apply-now"
                      style={{
                        marginTop: "1em",
                        marginBottom: "2em",
                        backgroundColor: "#2C5282",
                        fontSize: "16px",
                        borderRadius: "8px",
                        fontWeight: "700",
                        padding: "10px 20px",
                        border: "none",
                      }}
                    >
                      <a
                        href={
                          careerData?.application_link
                            ? careerData?.application_link
                            : null
                        }
                        style={{
                          display: "inline-block",
                          color: "white",
                          textDecoration: "none",
                        }}
                        disabled={careerData?.application_link.length <= 0}
                      >
                        Apply Now
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CareerCard;
