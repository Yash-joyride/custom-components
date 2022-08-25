import { useState } from "react";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import { UnhiddenInputField } from "../InputField";
import {
  SearchFieldWrapper,
  SearchFieldIconWrapper,
  SearchFieldDropdownMenuWrapper,
  SearchIconContainer,
} from "./style";
import SearchIcon from "../Icons/SearchIcon";

const data = [
  "Menu Item 1",
  "Menu Item 2",
  "Menu Item 3",
  "Menu Item 4",
  "Menu Item 5",
];

const SearchField = ({ placeholder }) => {
  return (
    <SearchFieldWrapper>
      <SearchFieldIconWrapper>
        <SearchIcon />
      </SearchFieldIconWrapper>
      <UnhiddenInputField placeholder={placeholder} />
    </SearchFieldWrapper>
  );
};

const SearchFieldDropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SearchFieldDropdownMenuWrapper
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <SearchIconContainer>
          <SearchIcon width="14" height="19" />
        </SearchIconContainer>
        <DropdownList
          open={open}
          data={data}
          defaultValue="Search"
          selectIcon=""
          className="dropdownList"
          containerClassName="dropdownListContainer"
          renderValue={({ item }) => <>{" " + item}</>}
        />
      </SearchFieldDropdownMenuWrapper>
    </>
  );
};

export { SearchField, SearchFieldDropdownMenu };
