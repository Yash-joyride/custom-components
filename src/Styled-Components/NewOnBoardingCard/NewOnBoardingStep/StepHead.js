import RadioButton from "../../RadioButton";
import { OnBoradCardHead } from "../../Typography/Paragraph";
import { StepHeadWrap } from "../style";

export const StepHead = (props) => {
  const { head, value, disabled } = props;

  return (
    <StepHeadWrap>
      <RadioButton value={value} disable={disabled} />
      <OnBoradCardHead margin="0 0 0 12px">{head}</OnBoradCardHead>
    </StepHeadWrap>
  );
};
