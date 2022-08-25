import { FormControlLabel, Switch } from "@mui/material";
import { ToggleButtonWrapper } from "./style";

const LabeledToggleButton = () => {
  return (
    <ToggleButtonWrapper>
      <FormControlLabel control={<Switch defaultChecked />} label="Toggle" />
    </ToggleButtonWrapper>
  );
};

const ToggleButton = () => {
  return (
    <ToggleButtonWrapper>
      <FormControlLabel control={<Switch defaultChecked />} />
    </ToggleButtonWrapper>
  );
};

export { ToggleButton, LabeledToggleButton };
