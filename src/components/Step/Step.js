import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import FileInput from "../FileInput/FileInput";
import { Box } from "@mui/material";
import "./style.css";
const Step = ({
  data,
  onChange,
  onFileChange,
  onStepChange,
  errors,
  stepKey,
  step,
  onPrevStep,
}) => {
  let output = [];

  for (const [key, val] of Object.entries(data)) {
    if (val.type.split(":")[0] === "input") {
      output.push(
        <Input
          key={key}
          placeholder={val.placeholder}
          name={key}
          value={val.value}
          onChange={(e) => onChange(stepKey, e)}
          error={errors[key]}
          type={val.type.split(":")[1]}
        />
      );
    } else if (val.type === "select") {
      output.push(
        <Select
          key={key}
          name={key}
          value={val.value}
          onChange={(e) => onChange(stepKey, e)}
          error={errors[key]}
          choices={val.choices}
        />
      );
    } else if (val.type === "file") {
      output.push(
        <FileInput
          key={key}
          onChange={onFileChange}
          error={errors[key]}
          name={key}
          stepKey={stepKey}
          fileName={val.fileName}
        />
      );
    }
  }

  return (
    <Box>
      {output}
      <Box className="buttonGrp">
        {step > 1 && (
          <button className="backBtn" onClick={() => onPrevStep(step - 1)}>
            Go back
          </button>
        )}
        <button className="nextBtn" onClick={(e) => onStepChange(data, e)}>
          Next
        </button>
      </Box>
    </Box>
  );
};

export default Step;
