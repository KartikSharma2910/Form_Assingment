import React from "react";
import Box from "@mui/material/Box";
import "./styles.css";

const Input = ({
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <Box className="wrapper">
      <input
        className={error ? "dangerInput" : "input"}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <Box className="error">{error}</Box>}
    </Box>
  );
};

export default Input;
