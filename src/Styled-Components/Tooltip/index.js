// import {
//   TooltipBottomContainer,
//   TooltipIconWrapper,
//   TooltipLeftContainer,
//   TooltipRightContainer,
//   TooltipTopContainer,
// } from "./style";
// import TooltipArrowIcon from "../Icons/TooltipArrowIcon";
// import { TooltipWrapper } from "../Typography/Paragraph";
import theme from "../../Globals/theme";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const ArrowTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({}) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colourMaterialReversePrimary,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colourMaterialReversePrimary,
    fontFamily: theme.fontWorkSansRegular,
    fontSize: theme.fontSize_14,
    padding: 10,
    zIndex: -9999999,
  },
}));

const CustomTooltip = ({ children, title, placement }) => {
  return (
    <ArrowTooltip title={title} placement={placement}>
      {children}
    </ArrowTooltip>
  );
};

export { CustomTooltip };
