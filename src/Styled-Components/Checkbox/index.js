import { FormControlLabel, Checkbox } from "@mui/material";
import CheckBoxCheckedIcon from "../Icons/CheckBoxCheckedIcon";
import UnCheckBoxCheckedIcon from "../Icons/UnCheckBoxCheckedIcon";
import { CheckboxWrapper } from "./style";

const CheckboxComponent = () => {
  return (
    <CheckboxWrapper>
      <FormControlLabel
        control={
          <Checkbox
            icon={<UnCheckBoxCheckedIcon />}
            checkedIcon={<CheckBoxCheckedIcon />}
            defaultChecked
          />
        }
      />
    </CheckboxWrapper>
  );
};

export default CheckboxComponent;
