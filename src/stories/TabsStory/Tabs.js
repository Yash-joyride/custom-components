import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { SettingsPanel, TabBar } from "../../Styled-Components/Tabs";

const Settings_Panel = () => {
  return (
    <ThemeProvider theme={theme}>
      <SettingsPanel />
    </ThemeProvider>
  );
};

const Tab_Bar = () => {
  return (
    <ThemeProvider theme={theme}>
      <TabBar />
    </ThemeProvider>
  );
};

export { Settings_Panel, Tab_Bar };
