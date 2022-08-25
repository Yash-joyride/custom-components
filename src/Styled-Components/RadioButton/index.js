import { FormControlLabel, Radio } from "@mui/material";
import { Tickicon } from "../Icons/TickIcon";
import { RadioboxWrapper } from "./style";

const RadioboxComponent = (props) => {
  const { value: radioValue, disable } = props;

  return (
    <RadioboxWrapper>
      <FormControlLabel
        disabled={disable}
        value={radioValue}
        control={<Radio checkedIcon={<Tickicon />} />}
      />
    </RadioboxWrapper>
  );
};

export default RadioboxComponent;
