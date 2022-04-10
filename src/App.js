import React from "react";
import Box from "@mui/material/Box";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <Box
      sx={{
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <section>
        <Box
          sx={{
            fontSize: "26px",
            fontWeight: "bold",
            color: "blue",
          }}
        >
          Multi Step Form
        </Box>
      </section>

      <Box>
        <Form />
      </Box>
    </Box>
  );
};

export default App;
