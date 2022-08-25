import React from "react";
import ComponentSideMenu, {
  Help_Center_Menu,
  Help_Center_Menu_Item,
  Global_Secondary_Navigation,
} from "./SideMenu";
import SideMenuHelpCenterProductUpdatesIcon from "../../Styled-Components/Icons/SideMenuHelpCenterProductUpdatesIcon";
import SideMenuHelpCenterOnboardingCardIcon from "../../Styled-Components/Icons/SideMenuHelpCenterOnboardingCardIcon";
import SideMenuHelpCenterPatchNotesIcon from "../../Styled-Components/Icons/SideMenuHelpCenterPatchNotesIcon";
import SideMenuHelpCenterFaqIcon from "../../Styled-Components/Icons/SideMenuHelpCenterFaqIcon";

export default {
  title: "Joyride/Side Menu/Side Menu",
  component: ComponentSideMenu,
};

export const SideMenuComponent = () => <ComponentSideMenu />;

export const HelpCenterMenu = () => (
  <Help_Center_Menu
    arr={[
      {
        heading: "Onboarding",
        caption: "Tasks before you get started",
        icon: <SideMenuHelpCenterOnboardingCardIcon />,
      },
      {
        heading: "Product Updates",
        caption: "What’s new with Joyride",
        icon: <SideMenuHelpCenterProductUpdatesIcon />,
      },
      {
        heading: "Patch Notes",
        caption: "Current Version V.2",
        icon: <SideMenuHelpCenterPatchNotesIcon />,
      },
      {
        heading: "Frequently Asked Questions",
        caption: "Having issues with something?",
        icon: <SideMenuHelpCenterFaqIcon />,
      },
    ]}
  />
);

export const HelpCenterMenuItem = () => (
  <Help_Center_Menu_Item heading="Onboarding" caption="For first time users" />
);
export const GlobalSecondaryNavigation = () => (
  <Global_Secondary_Navigation
    heading="Analytics"
    subheading="Manage fleet analytics"
  />
);
