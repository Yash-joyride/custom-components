import React from "react";
import { Settings_Panel, Tab_Bar } from "./Tabs";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Tabs/Settings Panel",
  component: Settings_Panel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const SettingsPanel = () => <Settings_Panel />;
export const TabBar = () => <Tab_Bar />;
