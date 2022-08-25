import {
  HelpCenterMenuItemWrapper,
  HelpCenterMenuItemIconWrapper,
  HelpCenterMenuItemContentWrapper,
  HelpCenterMenuItemContentHeadingWrapper,
  HelpCenterMenuItemContentSubHeadingWrapper,
} from "./style";

export const HelpCenterMenuItem = ({ heading, caption, icon }) => {
  console.log(icon);
  return (
    <HelpCenterMenuItemWrapper>
      <HelpCenterMenuItemIconWrapper>{icon}</HelpCenterMenuItemIconWrapper>
      <HelpCenterMenuItemContentWrapper>
        <HelpCenterMenuItemContentHeadingWrapper>
          {" "}
          {heading}{" "}
        </HelpCenterMenuItemContentHeadingWrapper>
        <HelpCenterMenuItemContentSubHeadingWrapper>
          {" "}
          {caption}{" "}
        </HelpCenterMenuItemContentSubHeadingWrapper>
      </HelpCenterMenuItemContentWrapper>
    </HelpCenterMenuItemWrapper>
  );
};
