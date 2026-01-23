import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventsSectionCard = ({ width, height, event }) => {
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
    <Link
      style={{
        borderRadius: 10,
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "5px",
        marginRight: "2em",
        textDecoration: 'none'
      }}
      to={{
        pathname: `/courses/${event.id}`,
        state: { id: event.id }
      }}
    >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "90%",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            position: "relative",
            cursor: "pointer",
            zIndex: 5,
          }}
          onClick={onOpen}
        >
          <img
            style={{
              borderRadius: 10,
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            src={event.image}
            alt=""
          />
        </div>
        <div style={{ marginLeft: "1.5em" }}>
          <h2
            onClick={onOpen}
            style={{
              color: "#0628A3",
              cursor: "pointer",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {event.title}
          </h2>
          <p style={{ color: "#0628A3" }}>{event.university}</p>
        </div>
    </Link>
  );
};

export default EventsSectionCard;
