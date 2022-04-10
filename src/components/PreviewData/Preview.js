import React from "react";
import Box from "@mui/material/Box";
import "./style.css"
const Preview = ({ data, onPrevStep }) => {
  return (
    <Box>
      <p>Your Filled the Form</p>
      <Box>
        <ul>
          {data.map((input, index) => (
            <li key={index} className="list">
              {!input.image ? (
                <Box>
                  <strong>{input.label}:</strong> {input.value}
                </Box>
              ) : (
                <Box>
                  <strong>{input.label}:</strong>
                  <img src={input.value} alt="" style={{ maxWidth: "200px" }} />
                </Box>
              )}
            </li>
          ))}
        </ul>
        <Box className="button">
          <button className="back" type="button" onClick={onPrevStep}>
            Go back
          </button>
          <button className="next" type="submit">
            Submit form
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Preview;
