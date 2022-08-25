// Dropdown Form MultiSelect

import styled from "styled-components";

export const DropdownFormMultiSelect = styled.div`
  #DropdownFormMultiSelect {
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
    width: 100%;
  }
  .chip {
    height: 37px;
    color: ${({ theme }) => theme.colourBrandPrimaryDark};
    background: ${({ theme }) => theme.colourBrandPrimaryTintExtraLight};
    border-radius: 4px;
    gap: 10px;
    padding: 9px 14px;
    top: 20px;
    font-size: ${({ theme }) => theme.fontSize14};
    :hover {
      background: ${({ theme }) => theme.colourMaterialSecondaryHover};
    }
  }

  .gfIOUM {
    padding-left: 235px;
  }

  .fdMgXG {
    width: 100%;
  }

  .highlightOption {
    background: none;
  }

  .searchWrapper {
    background: ${({ theme }) => theme.colourMaterialPrimary};
    padding: 9px 14px;
  }

  .icon_down_dir:before {
    content: "";
  }

  .multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize_14};
  }

  .multiSelectContainer li {
    padding: 10px 14px;
  }

  .multiSelectContainer li:hover {
    color: ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }

  .multiSelectContainer input {
    margin-top: 0px;
  }

  .icon_down_dir {
    right: 15px;
  }
`;

// Dropdown Form Not Required Select

export const DropdownFormNotRequiredSelect = styled.div`

.DropdownContainer {
    display: flex;
    gap: 20px;
    font-family : ${({ theme }) => theme.fontWorkSansRegular};
}

.gfIOUM {
    padding-left: 119px;
}

.chip {
    border-radius: 4px;
    gap: 0px;
    padding: 4px 4px;
    left: 0px;
    top: 0px;
    margin-bottom :0px;
    font-size: ${({ theme }) => theme.fontSize_16};
}


#DropdownSelectNotRequired {
  background: ${({ theme }) => theme.colourMaterialPrimary};

    flex-direction: column;
    aligh-items: column;
    width: 100%;
    height: 47px;

    .searchWrapper {
        border: 1px solid ${({ theme }) =>
          theme.colourMaterialBorder} !important;
        font-family : ${({ theme }) => theme.fontWorkSansRegular}
        border-radius: 4px;
        padding: 9px 14px;
        position: relative;
        background: ${({ theme }) => theme.White};

        :hover {
            background: ${({ theme }) => theme.colourMaterialPrimaryHover};
        }
    }
    .icon_down_dir:before {
        content: "";        
    }
}

.multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize14};
    font-family : ${({ theme }) => theme.fontWorkSansRegular};

}

.multiSelectContainer input {
    margin-top: 0px;
}

.multiSelectContainer li:hover {
    color: ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
}

.multiSelectContainer li {
    padding: 10px 14px;
}

.icon_down_dir {
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
}

`;

// Dropdown Form Required Select

export const DropdownFormRequiredSelect = styled.div`
  .DropdownContainer {
    display: flex;
    gap: 20px;
    font-family: ${({ theme }) => theme.fontWorkSansRegular};

    > div {
      width: 100%;
    }
  }

  .gfIOUM {
    padding-left: 119px;
  }

  .chip {
    border-radius: 4px;
    gap: 0px;
    padding: 4px 4px;
    left: 0px;
    top: 0px;
    margin-bottom: 0px;
    font-size: ${({ theme }) => theme.fontSize_16};
  }

  #DropdownFormRequiredSelect {
    flex-direction: column;
    aligh-items: column;
    width: 100%;
    height: 47px;
    gap: 10px;

    .searchWrapper {
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      border-radius: 4px;
      padding: 9px 14px;
      position: relative;
      background: ${({ theme }) => theme.colourMaterialPrimary};

      :hover {
        background: ${({ theme }) => theme.colourMaterialPrimaryHover};
      }
    }

    .icon_down_dir:before {
      content: "";
    }
  }

  .multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize14};
  }

  .multiSelectContainer li:hover {
    color: ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }

  .multiSelectContainer li {
    padding: 10px 16px;
  }

  .multiSelectContainer input {
    margin-top: 0px;
  }

  .icon_down_dir {
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
  }

  .fdMgXG {
    width: 100%;
  }
`;

// Dropdown Menu Item Checkbox Select

export const DropdownMenuItemCheckboxSelect = styled.div`
.chip {
    height: 37px;
    color :  ${({ theme }) => theme.colourBrandPrimaryDark};
    background: ${({ theme }) => theme.colourBrandPrimaryTintExtraLight};
    border-radius: 4px;
    gap: 10px;
    margin-bottom : 0px ;
    font-size: ${({ theme }) => theme.fontSize14};
    :hover {
        background : ${({ theme }) => theme.colourMaterialSecondaryHover};
    }
}

#DropdownMenuItemCheckbox {
    font-family : ${({ theme }) => theme.fontWorkSansRegular};
    width: 100%;
    height: 47px;
    gap: 10px;
    
    .searchWrapper {
        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        border-radius: 4px;
        padding: 9px 14px;
        position: relative;
        background: ${({ theme }) => theme.colourMaterialPrimary};
    }

    .icon_down_dir:before {
        content: "";        
    }

}

.Checkbox {
    accent-color: ${({ theme }) => theme.colourBrandPrimary}; !important;
}

.optionListContainer {
    color: ${({ theme }) => theme.colourTextPrimary};
}

.multiSelectContainer li:hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    color: ${({ theme }) => theme.colourTextPrimary};
}

.multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize14};
}

.multiSelectContainer li {
    padding: 10px 16px;
}

.multiSelectContainer input {
    margin-top: 0px;
}

.icon_down_dir {
    position: absolute;
    right: 15px;
    transform: translateY(-50%);
    width: 10px;
}
`;

// Dropdown Menu Item Select

export const DropdownMenuItemSelect = styled.div`


.chip {
    font-family : ${({ theme }) => theme.fontWorkSansRegular};
    border-radius: 4px;
    gap: 0px;
    padding: 0px 0px;
    left: 0px;
    top: 0px;
    margin-bottom : 0px;
    font-size: ${({ theme }) => theme.fontSize_16};
    color: ${({ theme }) => theme.colourTextPrimary};
    }
}

#DropdownMenuItem {
    width: 100%;
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    height: 47px;
    gap: 10px;
    
    .searchWrapper {
        font-family : ${({ theme }) => theme.fontWorkSansRegular};
        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        border-radius: 4px;
        padding: 10px 14px;
        position: relative;
        background: ${({ theme }) => theme.colourMaterialPrimary};
        height: 47px;
    }

    .icon_down_dir:before {
        content: "";        
    }

}

.optionListContainer {
    color: ${({ theme }) => theme.colourTextPrimary};
}

.multiSelectContainer li:hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    color: ${({ theme }) => theme.colourTextPrimary};
}

.multiSelectContainer li{
    padding: 10px 16px;
}

.multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize14};
}

.multiSelectContainer input {
    margin-top : 0px;
}

.icon_down_dir {
    position: absolute;
    right: 15px;
    transform: translateY(-50%);
    width: 10px;
}
`;

// Dropdown Multi Select

export const DropdownMultiSelect = styled.div`
  #DropdownMultiSelect {
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
  }
  .chip {
    height: 37px;
    color: ${({ theme }) => theme.colourBrandPrimaryDark};
    background: ${({ theme }) => theme.colourBrandPrimaryTintExtraLight};
    border-radius: 4px;
    gap: 10px;
    padding: 9px 14px;
    font-size: ${({ theme }) => theme.fontSize_16};
    :hover {
      background: ${({ theme }) => theme.colourMaterialSecondaryHover};
    }
  }

  .searchWrapper {
    padding: 9px 14px;
    background: ${({ theme }) => theme.colourMaterialPrimary};
    font-size: ${({ theme }) => theme.fontSize_16};
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    gap: 11px;
    display: flex;
    width: 100%;
  }

  .multiSelectContainer input {
    font-size: ${({ theme }) => theme.fontSize_16};
    margin-top: 0px;
  }

  .multiSelectContainer li {
    padding: 10px 16px;
    font-size: ${({ theme }) => theme.fontSize_14};
  }

  .multiSelectContainer li:hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    color: ${({ theme }) => theme.colourTextPrimary};
  }

  .highlightOption {
    background: none;
    color: ${({ theme }) => theme.colourTextPrimary};
  }

  .icon_down_dir:before {
    content: "";
  }
`;

//Dropdown Small Disable Select

export const DropdownSmallDisableSelect = styled.div`
.chip {
    border-radius: 4px;
    gap: 0px;
    padding: 0px 0px;
    left: 20px;
    top: 20px;
    margin-bottom : 0px;
    font-size: ${({ theme }) => theme.fontSize_10};
    }
}

#DropdownSmallDisable {

    width: 100%;
    height: 30px;
    gap: 10px;
    opacity: 1;
    
    .searchWrapper {
        border: 1px solid ${({ theme }) =>
          theme.colourMaterialBorder} !important;
        border-radius: 4px;
        padding: 9px 14px;
        position: relative;
        background: ${({ theme }) =>
          theme.colourMaterialPrimaryBackground} !important;
        color: rgba(31, 31, 31, 0.2) !important;
    }

    .icon_down_dir:before {
        content: "";        
    }
}


.multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize14};
}

.multiSelectContainer li {
    padding: 12px;
}

.multiSelectContainer input {
    margin-top: 0px;
}

.icon_down_dir {

    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
}
`;

// Dropdown Small Select

export const DropdownSmallSelect = styled.div`
.chip {
    border-radius: 4px;
    gap: 0px;
    padding: 0px 0px;
    left: 20px;
    margin-top : 0px;
    font-size: 10px;
    }
}

#DropdownSmall {
    width: 100%;
    height: 20px;
    gap: 10px;
    
    .searchWrapper {
        border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
        border-radius: 4px;
        padding: 9px 14px;
        position: relative;
        background: ${({ theme }) => theme.colourMaterialPrimary};
        :hover {
            background: ${({ theme }) => theme.colourMaterialPrimaryHover};
        }
    }
    .icon_down_dir:before {
        content: "";        
    }
}

.multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize_10};
}

.multiSelectContainer li {
    padding: 10px 14px;

}

.multiSelectContainer li:hover {
    color: ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
}

.multiSelectContainer input {
    margin-top: 0px;
}

.icon_down_dir {
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
}

`;

// Dropdown Station Select

export const DropdownStationSelect = styled.div`

.btn-primary{
    color : ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border : 1px solid ${({ theme }) => theme.colourMaterialBorder};

}

.btn {
    width : 100%;
    font-family : ${({ theme }) => theme.fontWorkSansRegular};
    font-size : ${({ theme }) => theme.fontSize_16};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-shadow : none !important;

    > span {
        position: absolute;
        left: 45px;
    }
}

.dropdown-toggle::after{
    display: none;
}

.btn-check:active+.btn-primary, .btn-check:checked+.btn-primary, .btn-primary.active, .btn-primary:active, .show>.btn-primary.dropdown-toggle{
    color : ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border : 1px solid ${({ theme }) => theme.colourMaterialBorder};
}

.dropdown-menu {
    width : 100%;
    padding: 0px;
}

.dropdown-item {
    color : ${({ theme }) => theme.colourTextPrimary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular};
    font-size : ${({ theme }) => theme.fontSize_14}
    padding:10px 10px;
    height : 47px;
}

.dropdown-menu :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover} !important;
    
}

.dropdown-item:nth-child(even) {
    background : ${({ theme }) => theme.colourMaterialPrimaryBackground};
    display:flex;
    align-items: center;
}
.dropdown-item:nth-child(odd) {
    background : ${({ theme }) => theme.colourMaterialPrimary};
    display:flex;
    align-items: center;
}

`;

// Dropdown Wrapper

const DropdownWrapper = styled.div`
  .DropdownContainer {
    display: flex;
    gap: 20px;
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
    > div {
      width: 100%;
    }
  }

  .gfIOUM {
    padding-left: 119px;
  }

  .chip {
    border-radius: 4px;
    gap: 0px;
    padding: 4px 4px;
    left: 0px;
    top: 0px;
    margin-bottom: 0px;
    font-size: ${({ theme }) => theme.fontSize_16};
  }

  #DropdownSelect {
    flex-direction: column;
    aligh-items: column;
    width: 100%;
    height: 47px;
    gap: 10px;

    .searchWrapper {
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      border-radius: 4px;
      padding: 9px 14px;
      position: relative;
      background: ${({ theme }) => theme.colourMaterialPrimary};

      :hover {
        background: ${({ theme }) => theme.colourMaterialPrimaryHover};
      }
    }

    .icon_down_dir:before {
      content: "";
    }
  }

  .multiSelectContainer ul {
    font-size: ${({ theme }) => theme.fontSize14};
  }

  .multiSelectContainer li:hover {
    color: ${({ theme }) => theme.colourTextPrimary};
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }

  .multiSelectContainer li {
    padding: 10px 16px;
  }

  .multiSelectContainer input {
    margin-top: 0px;
  }

  .icon_down_dir {
    position: absolute;
    right: 10px;
    transform: translateY(-50%);
    width: 10px;
  }

  .fdMgXG {
    width: 100%;
  }
`;

export { DropdownWrapper };
