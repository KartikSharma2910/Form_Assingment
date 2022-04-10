import React, { useRef } from "react";
import "./style.css";
import Box from "@mui/material/Box";

const FileInput = ({ onChange, name, error, stepKey, fileName }) => {
  const fileInput = useRef();

  const openFilePicker = () => {
    fileInput.current.click();
  };

  const fileChangeHandler = (e) => {
    if (e.target.files[0]) {
      onChange(name, e.target.files[0], stepKey);
    } else {
      onChange(name, {}, stepKey);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <input
        type="file"
        name={name}
        ref={fileInput}
        onChange={fileChangeHandler}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <button type="button" onClick={openFilePicker}>
          Choose file
        </button>
        <p>
          {fileName}
          {fileName !== "No file chosen" && (
            <button
              type="button"
              onClick={() => onChange(name, {}, stepKey)}
            ></button>
          )}
        </p>
      </Box>
      {error && <div className="fileError">{error}</div>}
    </Box>
  );
};

export default FileInput;
