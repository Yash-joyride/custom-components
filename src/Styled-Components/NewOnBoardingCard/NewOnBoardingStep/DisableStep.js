import { OnBoradCardCenterLabel } from "../../Typography/Paragraph";
import { StepHead } from "./StepHead";
import theme from "../../../Globals/theme";
import { Card } from "../style";

export const DisableStep = (props) => {
  const { onChange, step } = props;
  const { value, headLabel, isDisable, centerLabel } = step;

  return (
    <Card
      width="430px"
      height="105px"
      border={`1.5px dashed ${theme.colourMaterialBorder}`}
      className={isDisable && "disabled"}
      pedding="20px"
      onClick={() => onChange(value)}
    >
      <StepHead head={headLabel} value={value} disabled={isDisable} />
      <OnBoradCardCenterLabel className="on-board-step">
        {centerLabel}
      </OnBoradCardCenterLabel>
    </Card>
  );
};
