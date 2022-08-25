import { OnBoradCardCenterLabel } from "../../Typography/Paragraph";
import { StepHead } from "./StepHead";
import theme from "../../../Globals/theme";
import { Card } from "../style";

export const CompletedStep = (props) => {
  const { step, onChange } = props;
  const { value, headLabel, isDisable, centerLabel } = step;
  return (
    <Card
      width="430px"
      height="105px"
      border={`1.5px solid ${theme.colourBrandPrimaryTintExtraLight}`}
      background={theme.colourBrandPrimaryTintExtraLight}
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
