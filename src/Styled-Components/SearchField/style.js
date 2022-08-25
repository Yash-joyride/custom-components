// Search Field Dropdown Menu Wrapper

import styled from "styled-components";

const SearchFieldDropdownMenuWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  width: 293px;
  padding-left: 4px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  height: 47px;

  .dropdownList {
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
    font-size: ${({ theme }) => theme.fontSize_14};
  }

  .rw-list-option {
    color: ${({ theme }) => theme.colourTextSecondary};
    border: none;
    padding: 10px 24px;
  }

  .rw-list {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .rw-list-option.rw-state-selected,
  .rw-state-selected.rw-list-option-create {
    background: ${({ theme }) => theme.colourMaterialBorder};
    color: ${({ theme }) => theme.colourTextPrimary};
  }

  .dropdownListContainer {
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
    border: 0px;
    display: inline-flex;
    align-items: center;
    padding: 0px;
  }

  .rw-dropdown-list-input {
    padding-right: 0px;
    min-width: 100%;
  }

  .rw-widget-input {
    color: ${({ theme }) => theme.colourTextSecondary};
    box-shadow: none;
    padding-right: 10px;
  }

  .rw-state-focus .rw-widget-picker {
    border: 0px;

    &.rw-widget-input {
      box-shadow: none;
    }
  }

  .rw-popup-container {
    left: -56px;
  }
  .rw-list-option:hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    border: none;
  }
`;

const SearchIconContainer = styled.div`
  width: 42px;
  height: 36px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 4px;
  justify-content: center;
`;

// Search Field Wrapper

const SearchFieldWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
  padding: 5px;

  > div {
    > div {
      margin: 0px !important;
      > div {
        font-size: ${({ theme }) => theme.fontSize_10} !important;
        > input {
          padding: 0px !important;
          border: none !important;
          background: ${({ theme }) =>
            theme.colourMaterialPrimaryBackground} !important;
          height: 35px !important;
        }
      }
    }
  }
`;

export const SearchFieldIconWrapper = styled.div`
  padding: 9px 14px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px;
  ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

export {
  SearchFieldWrapper,
  SearchFieldDropdownMenuWrapper,
  SearchIconContainer,
};
