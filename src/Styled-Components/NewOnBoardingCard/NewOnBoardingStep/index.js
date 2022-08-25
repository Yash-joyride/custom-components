import React, { Fragment } from "react";
import { FormControl, RadioGroup } from "@mui/material";
import { find } from "lodash";
import { DisableStep } from "./DisableStep";
import { CompletedStep } from "./CompletedStep";
import { DefaultStep } from "./DefaultStep";
import { stepArray } from "../Constants";

export const NewOnBoardingStep = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (rValue) => {
    const clickedObj = find(stepArray, (s) => s.value === rValue);
    if (clickedObj && clickedObj.isDisable === false) {
      setValue(rValue);
    } else setValue(value);
  };

  return (
    <FormControl aria-labelledby="on-boarding-step" name="onboarding-step">
      <RadioGroup onChange={(e) => handleChange(e.target.value)} value={value}>
        {stepArray.map((c) => (
          <Fragment key={c.value}>
            {c.isDisable ? (
              <DisableStep
                disabled={c.isDisable}
                step={c}
                onChange={handleChange}
              />
            ) : c.isFinished ? (
              <CompletedStep step={c} onChange={handleChange} />
            ) : (
              <DefaultStep step={c} onChange={handleChange} />
            )}
          </Fragment>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
