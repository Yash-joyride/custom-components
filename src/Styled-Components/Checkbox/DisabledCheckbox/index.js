import { FormControlLabel, Checkbox } from "@mui/material";
import { DisabledCheckboxWrapper } from "../style";

const DisabledCheckbox = ({ label }) => {
  return (
    <DisabledCheckboxWrapper>
      <FormControlLabel disabled control={<Checkbox />} label={label} />
    </DisabledCheckboxWrapper>
  );
};

export default DisabledCheckbox;
