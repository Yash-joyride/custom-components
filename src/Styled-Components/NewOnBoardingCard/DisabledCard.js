import { OnBoradCardCenterLabel } from "../Typography/Paragraph";
import { CardHead } from "./CardHead";
import { Card } from "./style";
import theme from "../../Globals/theme";

export const DisabledCard = (props) => {
  const { card, onChange, disabled } = props;
  const { value, headLabel } = card;

  return (
    <Card
      className={disabled && "disabled"}
      border={`1.5px dashed ${theme.colourMaterialBorder}`}
      onClick={() => onChange(value)}
    >
      <CardHead head={headLabel} value={value} disable={disabled} />
      <OnBoradCardCenterLabel>Finish Step 2</OnBoradCardCenterLabel>
    </Card>
  );
};
