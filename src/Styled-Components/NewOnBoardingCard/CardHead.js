import { OnBoradCardHead } from "../Typography/Paragraph";
import RadioButton from "../RadioButton";
import { HeadWrapper } from "./style";

export const CardHead = (props) => {
  const { head, value, disable } = props;

  return (
    <HeadWrapper>
      <OnBoradCardHead>{head}</OnBoradCardHead>
      <RadioButton value={value} disable={disable} />
    </HeadWrapper>
  );
};
