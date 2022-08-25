import React, { Fragment } from "react";
import { FormControl, RadioGroup } from "@mui/material";
import { find } from "lodash";
import { CompleteCard } from "./CompleteCard";
import { DefaultCard } from "./DefaultCard";
import { DisabledCard } from "./DisabledCard";
import { cardArray } from "./Constants";

export const NewOnBoardingCards = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (rValue) => {
    const clickedObj = find(cardArray, (s) => s.value === rValue);
    if (clickedObj && clickedObj.isDisable === false) {
      setValue(rValue);
    } else setValue(value);
  };

  return (
    <FormControl aria-labelledby="on-boarding-card" name="onboarding-card">
      <RadioGroup
        row
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      >
        {cardArray.map((c) => (
          <Fragment key={c.value}>
            {c.step === 1 && <CompleteCard card={c} onChange={handleChange} />}
            {c.step === 2 && <DefaultCard card={c} onChange={handleChange} />}
            {c.isDisable && (
              <DisabledCard card={c} onChange={handleChange} disabled={true} />
            )}
          </Fragment>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
