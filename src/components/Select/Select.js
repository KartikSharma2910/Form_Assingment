import React from "react";
import Box from "@mui/material/Box";
import "./style.css";
const Select = ({ name, value, onChange, choices, error }) => {
  return (
    <Box>
      <Box className={error ? "dangerSelect" : "select"}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="select"
        >
          {choices.map((choice, index) => (
            <option key={index} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
      </Box>
      {error && <Box className="error">{error}</Box>}
    </Box>
  );
};

export default Select;
