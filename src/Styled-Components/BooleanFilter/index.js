import { FormControlLabel, Checkbox } from "@mui/material";
import CheckBoxCheckedIcon from "../Icons/CheckBoxCheckedIcon";
import UnCheckBoxCheckedIcon from "../Icons/UnCheckBoxCheckedIcon";
import { BooleanFilterWrapper } from "./style";

const BooleanFilter = ({ label }) => {
  return (
    <BooleanFilterWrapper>
      <FormControlLabel
        control={
          <Checkbox
            icon={<UnCheckBoxCheckedIcon />}
            checkedIcon={<CheckBoxCheckedIcon />}
            defaultChecked
          />
        }
        label={label}
      />
    </BooleanFilterWrapper>
  );
};

export default BooleanFilter;
