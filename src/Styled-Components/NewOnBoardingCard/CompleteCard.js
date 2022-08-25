import { CardHead } from "./CardHead";
import { OnBoradCardCenterLabel } from "../Typography/Paragraph";
import theme from "../../Globals/theme";
import { Card } from "./style";

export const CompleteCard = (props) => {
  const { card, onChange } = props;
  const { value, headLabel } = card;
  return (
    <Card
      background={theme.colourBrandPrimaryTintExtraLight}
      border={`1.5px solid ${theme.colourBrandPrimaryTintExtraLight}`}
      onClick={() => onChange(value)}
    >
      <CardHead head={headLabel} value={value} disable={false} />
      <OnBoradCardCenterLabel>
        Organization and Roles Setup
      </OnBoradCardCenterLabel>
    </Card>
  );
};
