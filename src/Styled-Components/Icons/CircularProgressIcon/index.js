import CircularProgress from "@mui/material/CircularProgress";
import {
  ChargedCircularProgressWrapper,
  ChargedCircularProgressContainerWrapper,
  NeedsChargeCircularProgressWrapper,
  NeedsChargeCircularProgressContainerWrapper,
  BatterLowCircularProgressWrapper,
  BatteryLowCircularProgressContainerWrapper,
} from "../WrapperCircularProgress";
import IconWrapper from "../IconWrapper";

const CircularProgressIcon = ({ value }) => {
  if (value > 66 && value <= 100) {
    return (
      <IconWrapper>
        <ChargedCircularProgressWrapper>
          <CircularProgress variant="determinate" value={value} />
        </ChargedCircularProgressWrapper>
        <ChargedCircularProgressContainerWrapper>
          <CircularProgress variant="determinate" value={100} />
        </ChargedCircularProgressContainerWrapper>
      </IconWrapper>
    );
  } else if (value > 33 && value <= 66) {
    return (
      <IconWrapper>
        <NeedsChargeCircularProgressWrapper>
          <CircularProgress variant="determinate" value={value} />
        </NeedsChargeCircularProgressWrapper>
        <NeedsChargeCircularProgressContainerWrapper>
          <CircularProgress variant="determinate" value={100} />
        </NeedsChargeCircularProgressContainerWrapper>
      </IconWrapper>
    );
  } else {
    return (
      <IconWrapper>
        <BatterLowCircularProgressWrapper>
          <CircularProgress variant="determinate" value={value} />
        </BatterLowCircularProgressWrapper>
        <BatteryLowCircularProgressContainerWrapper>
          <CircularProgress variant="determinate" value={100} />
        </BatteryLowCircularProgressContainerWrapper>
      </IconWrapper>
    );
  }
};

export default CircularProgressIcon;
