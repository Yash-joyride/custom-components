import * as React from "react";
import { Tabs, Tab } from "@mui/material";
import {
  SettingPanelContainer,
  SettingPanelScreen,
  SettingPanelWrapper,
  TabBarContainer,
  TabBarWrapper,
} from "./style";
import { SettingsPanelTabItems, TabBarTabItems } from "./constant";

const SettingsPanel = () => {
  const [value, setValue] = React.useState("Mobile");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SettingPanelContainer>
      <SettingPanelWrapper>
        <Tabs value={value} onChange={handleChange} orientation="vertical">
          {SettingsPanelTabItems.map((SettingsPanelTabItem) => {
            return (
              <Tab
                icon={SettingsPanelTabItem.icon}
                value={SettingsPanelTabItem.value}
                label={SettingsPanelTabItem.label}
              />
            );
          })}
        </Tabs>
      </SettingPanelWrapper>
      <SettingPanelScreen>
        <h1>{value}</h1>
      </SettingPanelScreen>
    </SettingPanelContainer>
  );
};

const TabBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TabBarContainer>
      <TabBarWrapper>
        <Tabs value={value} onChange={handleChange}>
          {TabBarTabItems.map((TabBarTabItem) => {
            return (
              <Tab icon={TabBarTabItem.icon} label={TabBarTabItem.label} />
            );
          })}
        </Tabs>
      </TabBarWrapper>
      <SettingPanelScreen>
        <h1>{value}</h1>
      </SettingPanelScreen>
    </TabBarContainer>
  );
};

export { SettingsPanel, TabBar };
