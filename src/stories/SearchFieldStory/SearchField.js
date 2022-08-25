import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { SearchField, SearchFieldDropdownMenu } from "../../Styled-Components/SearchField";

const Search_Field = ({ placeholder }) => {
  return (
    <ThemeProvider theme={theme}>
      <SearchField placeholder={placeholder} />
    </ThemeProvider>
  );
};

const Search_Field_Dropdown_Menu = ({ placeholder }) => {
  return (
    <ThemeProvider theme={theme}>
      <SearchFieldDropdownMenu placeholder={placeholder} />
    </ThemeProvider>
  );
};

export { Search_Field , Search_Field_Dropdown_Menu };