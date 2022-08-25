import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  ActiveTag,
  AddActiveTag,
  PickupTag,
  DropoffTag,
  IncrementalAnalyticStatusTag,
  DecrementalAnalyticStatusTag,
} from "../../Styled-Components/Tags/style";
import AddIcon from "../../Styled-Components/Icons/AddIcon/index";
import ArrowUpIcon from "../../Styled-Components/Icons/ArrowUpIcon";
import ArrowDownIcon from "../../Styled-Components/Icons/ArrowDownIcon";
import DropoffIcon from "../../Styled-Components/Icons/DropoffIcon/index";

const TagActive = ({ children, colour }) => {
  return (
    <ThemeProvider theme={theme}>
      <ActiveTag colour={colour}>{children}</ActiveTag>
    </ThemeProvider>
  );
};

const TagAddActive = ({ children, colour }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddActiveTag colour={colour}>
        <AddIcon />
        {children}
      </AddActiveTag>
    </ThemeProvider>
  );
};

const TagPickup = () => {
  return (
    <ThemeProvider theme={theme}>
      <PickupTag>
        <ArrowUpIcon />
      </PickupTag>
    </ThemeProvider>
  );
};

const TagDropoff = () => {
  return (
    <ThemeProvider theme={theme}>
      <DropoffIcon />
    </ThemeProvider>
  );
};

const TagIncrementalAnalyticStatus = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <IncrementalAnalyticStatusTag>
        <ArrowUpIcon />
        {children}
      </IncrementalAnalyticStatusTag>
    </ThemeProvider>
  );
};

const TagDecrementalAnalyticStatus = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <DecrementalAnalyticStatusTag>
        <ArrowDownIcon />
        {children}
      </DecrementalAnalyticStatusTag>
    </ThemeProvider>
  );
};

export {
  TagActive,
  TagAddActive,
  TagPickup,
  TagDropoff,
  TagIncrementalAnalyticStatus,
  TagDecrementalAnalyticStatus,
};
