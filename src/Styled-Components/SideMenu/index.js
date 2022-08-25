import React, { useState } from "react";
import { HelpCenterMenuItem } from "./HelpCenterMenuItem";
import { SideMenuWrapper, SideMenuHeaderWrapper, SideMenuBodyWrapper, SideMenuFooterWrapper, SideMenuIconsConatiner, UsernameWrapper, UsernameContainerWrapper, NotificationIconConatiner, SideMenuIconsWrapper } from "./style";
import JoyrideIcon from "../Icons/JoyrideIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import UsernameIcon from "../Icons/UsernameIcon";
import { SideMenuNavigation } from "./constant";
import { HelpCenterMenuWrapper, HelpCenterMenuItemWrapper, GlobalSecondaryNavigationWrapper, GlobalSecondaryNavigationHeadContainer, GlobalSecondaryNavigationHeadHeadingContainer, GlobalSecondaryNavigationHeadSubHeadingContainer } from "./style";
import { HelpCenterMenuHeaderWrapper, HelpCenterMenuNavHeaderWrapper, HelpCenterMenuVersionWrapper } from "../Typography/Paragraph";
import { CustomTooltip } from "../Tooltip";

const SideMenuComponent = () => {
  return (
    <SideMenuWrapper>
      <SideMenuHeaderWrapper>
        <JoyrideIcon />
      </SideMenuHeaderWrapper>
      <SideMenuBodyWrapper>
        {SideMenuNavigation.map((SideMenuNavigationItem) => {
          return (
            <CustomTooltip title={SideMenuNavigationItem.name} placement="right">
              <div>
                <SideMenuIconsConatiner>{SideMenuNavigationItem.icon}</SideMenuIconsConatiner>
              </div>
            </CustomTooltip>
          );
        })}
      </SideMenuBodyWrapper>

      <SideMenuFooterWrapper>
        <CustomTooltip>
          <QuestionIcon />
        </CustomTooltip>
        <CustomTooltip>
          <SettingsIcon />
        </CustomTooltip>
        <UsernameIcon />
      </SideMenuFooterWrapper>
    </SideMenuWrapper>
  );
};

export default SideMenuComponent;

export const HelpCenterMenu = ({ arr }) => {
  return (
    <HelpCenterMenuWrapper>
      <HelpCenterMenuHeaderWrapper>Help Center</HelpCenterMenuHeaderWrapper>
      <HelpCenterMenuNavHeaderWrapper>Home</HelpCenterMenuNavHeaderWrapper>
      <HelpCenterMenuItemWrapper>
        {arr.map((item) => {
          return <HelpCenterMenuItem heading={item.heading} caption={item.caption} icon={item.icon} />;
        })}
      </HelpCenterMenuItemWrapper>
      <HelpCenterMenuVersionWrapper>Joyride Application Version: V.2</HelpCenterMenuVersionWrapper>
    </HelpCenterMenuWrapper>
  );
};

export const GlobalSecondaryNavigation = ({ heading, subheading }) => {
  return (
    <GlobalSecondaryNavigationWrapper>
      <GlobalSecondaryNavigationHeadContainer>
        <GlobalSecondaryNavigationHeadHeadingContainer>{heading}</GlobalSecondaryNavigationHeadHeadingContainer>
        <GlobalSecondaryNavigationHeadSubHeadingContainer> {subheading} </GlobalSecondaryNavigationHeadSubHeadingContainer>
      </GlobalSecondaryNavigationHeadContainer>
    </GlobalSecondaryNavigationWrapper>
  );
};
