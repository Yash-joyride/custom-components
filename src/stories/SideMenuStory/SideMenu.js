import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import SideMenuComponent, { HelpCenterMenu, GlobalSecondaryNavigation } from "../../Styled-Components/SideMenu/index";
import { HelpCenterMenuItem } from "../../Styled-Components/SideMenu/HelpCenterMenuItem";

const ComponentSideMenu = () => {
  return (
    <ThemeProvider theme={theme}>
      <SideMenuComponent />
    </ThemeProvider>
  );
};

export const Help_Center_Menu = ({ arr }) => {
  return (
    <ThemeProvider theme={theme}>
      <HelpCenterMenu arr={arr} />
    </ThemeProvider>
  );
};

export const Help_Center_Menu_Item = ({ heading, caption }) => {
  return (
    <ThemeProvider theme={theme}>
      <HelpCenterMenuItem heading={heading} caption={caption} />
    </ThemeProvider>
  );
};

export const Global_Secondary_Navigation = ({ heading, subheading }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalSecondaryNavigation heading={heading} subheading={subheading} />
    </ThemeProvider>
  );
};

export default ComponentSideMenu;
