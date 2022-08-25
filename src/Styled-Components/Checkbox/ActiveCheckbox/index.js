import { FormControlLabel, Checkbox } from "@mui/material";
import CheckBoxCheckedIcon from "../../Icons/CheckBoxCheckedIcon";
import UnCheckBoxCheckedIcon from "../../Icons/UnCheckBoxCheckedIcon";
import { ActiveCheckboxWrapper } from "../style";

const ActiveCheckbox = ({ label, inactive }) => {
  return (
    <ActiveCheckboxWrapper>
      <FormControlLabel
        disabled={inactive ? true : false}
        control={
          <Checkbox
            icon={<UnCheckBoxCheckedIcon />}
            checkedIcon={<CheckBoxCheckedIcon />}
          />
        }
        label={label}
      />
    </ActiveCheckboxWrapper>
  );
};

export default ActiveCheckbox;
