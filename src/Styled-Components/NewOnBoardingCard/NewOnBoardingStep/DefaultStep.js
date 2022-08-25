import { StepHead } from "./StepHead";
import { Continuebutton } from "../../Button/style";
import { OnBoradCardCenterLabel } from "../../Typography/Paragraph";
import theme from "../../../Globals/theme";
import { Card } from "../style";

export const DefaultStep = (props) => {
  const { step, onChange } = props;
  const { value, headLabel, isDisable, centerLabel } = step;
  return (
    <Card
      width="430px"
      height="162px"
      border={`1.5px solid ${theme.colourMaterialBorder}`}
      pedding="20px"
      onClick={() => onChange(value)}
    >
      <StepHead head={headLabel} value={value} disabled={isDisable} />
      <OnBoradCardCenterLabel className="on-board-step">
        {centerLabel}
      </OnBoradCardCenterLabel>
      <Continuebutton width="167px">Create a Billing Plan</Continuebutton>
    </Card>
  );
};
