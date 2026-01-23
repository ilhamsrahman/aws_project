import React from "react";

const CustomInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          height: "3.5vh",
          padding: "1.5vh",
          fontSize: "2.5vh",
          border: "1px solid #000",
          borderRadius: "3px",
          background: "#E2E8F0",
          width: "95%",
        }}
      />
    </div>
  );
};

export default CustomInput;
