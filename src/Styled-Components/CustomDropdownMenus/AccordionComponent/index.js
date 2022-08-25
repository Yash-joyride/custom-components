import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionArrowIcon from "../../Icons/AccordionArrowIcon";
import ActiveCheckbox from "../../Checkbox/ActiveCheckbox";
import { AccordionWrapper, AccordionPanelWrapper } from "./style";

export const AccordionComponent = ({ head, arr }) => {
  return (
    <AccordionWrapper>
      <Accordion>
        <AccordionSummary expandIcon={<AccordionArrowIcon />}>
          <Typography>{head}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {arr.map((item) => {
            return (
              <AccordionPanelWrapper>
                <ActiveCheckbox label={item.label} inactive={item.inactive} />
              </AccordionPanelWrapper>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  );
};
