import { CardHead } from "./CardHead";
import { Continuebutton } from "../Button/style";
import { OnBoardDefaultLable } from "../Typography/Paragraph";
import { getCard } from "../../Globals/getAssets";
import theme from "../../Globals/theme";
import { Card, CardDetails, CardImg } from "./style";

export const DefaultCard = (props) => {
  const { card, onChange } = props;
  const { value, headLabel } = card;

  return (
    <Card
      border={`1.5px solid ${theme.colourMaterialBorder}`}
      onClick={() => onChange(value)}
    >
      <CardHead head={headLabel} value={value} disable={false} />
      <CardImg alt="on-board" src={getCard("on_board_card")} />
      <CardDetails>
        <OnBoardDefaultLable>
          Setup and assign your billing plan(s) in admin settings
        </OnBoardDefaultLable>
        <Continuebutton>Continue</Continuebutton>
      </CardDetails>
    </Card>
  );
};
