import styled from "styled-components";

export const DatePickerButtonWrapper = styled.div`
  .DatePickerButton {
    font-family: ${({ theme }) => theme.fontWorkSansRegular};
    width: 121px;
    height: 47px;
    top: -1px;
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    gap: 20px;
    text-transform: none;
    color: ${({ theme }) => theme.colourTextPrimary};

    :hover {
      background: ${({ theme }) => theme.colourMaterialPrimaryHover};
    }

    > span {
      margin: 0px;
      > div {
        display: flex;
        > svg {
          > path {
            fill-opacity: 1;
          }
        }
      }
    }
  }

  .react-datepicker {
    display: flex;
  }

  .DatePickerButtonWithDate {
    width: 210px;
    padding: 10px;
    gap: 0px;
    justify-content: space-between;
  }
`;

export const DatePickerInputWrapper = styled.div`
  > div:first-child {
    > div:last-child {
      > div {
        input {
          border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
          background: ${({ theme }) => theme.colourMaterialPrimary};

          :hover {
            background: ${({ theme }) => theme.colourMaterialPrimaryHover};
          }

          :focus {
            background: ${({ theme }) => theme.colourBrandPrimaryTintLight};
          }
        }
      }
    }
  }
`;

export const DatePickerWrapper = styled.div`

.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle{
    display: none;
}
.react-datepicker__current-month{
    font-family: ${({ theme }) => theme.fontWorkSansRegular}
    font-size: ${({ theme }) => theme.fontSize14}
    color: ${({ theme }) => theme.colourTextPrimary};
}
.react-datepicker__day-name{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height : 28px;
    padding: 5px;
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_10}
    color: ${({ theme }) => theme.colourTextSecondary};
    margin: 0px;

}

.react-datepicker__day--selected {
  color: ${({ theme }) => theme.colourMaterialPrimary} !important;
}

.react-datepicker__day{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height : 28px;
    padding: 5px;
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_10}
   
    color: ${({ theme }) => theme.colourTextSecondary};
    margin: 0px;

    :hover {
        background: ${({ theme }) => theme.colourMaterialPrimaryHover};
        color: ${({ theme }) => theme.colourTextPrimary};

    }

}
.react-datepicker__header{
    background: none;
    border: none;
    padding: 0px;
    margin-top : 20px;
}

.react-datepicker__day--keyboard-selected {
    background: ${({ theme }) => theme.colourBrandPrimary} !important;
    color: ${({ theme }) => theme.colourTextReversePrimary} !important;
    :hover {
        background: ${({ theme }) => theme.colourBrandPrimary} !important;
        color: ${({ theme }) => theme.colourTextReversePrimary} !important;
    }

}

react-datepicker__day--outside-month{
    background: ${({ theme }) =>
      theme.colourMaterialPrimaryBackground} !important;
    color: ${({ theme }) => theme.colourTextReverseDisabled} !important;
}

.react-datepicker__day--in-range{
    background: ${({ theme }) => theme.colourMaterialSecondary};
    color: ${({ theme }) => theme.colourTextPrimary};
    border-radius: 0px;

    :hover{
        background: ${({ theme }) => theme.colourMaterialSecondary};
        color: ${({ theme }) => theme.colourTextPrimary};
        border-radius: 0px;
    }
}

.react-datepicker__day--in-selecting-range{
    background: ${({ theme }) => theme.colourMaterialSecondary} !important;
    color: ${({ theme }) => theme.colourTextPrimary} !important;
    border-radius: 0px !important;
}
.react-datepicker__navigation-icon::before{
    color: ${({ theme }) => theme.colourTextSecondary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-weight : ${({ theme }) => theme.fontWeight_900}
}

.react-datepicker__navigation {
    align-items: flex-start;
}


.react-datepicker__day--range-start{
    background: ${({ theme }) => theme.colourBrandPrimary} !important;
    color: ${({ theme }) => theme.colourTextReversePrimary} !important; 
    border-radius : 4px !important;
}
.react-datepicker__day--range-end{
    background: ${({ theme }) => theme.colourBrandPrimary} !important;
    color: ${({ theme }) => theme.colourTextReversePrimary} !important;
    border-radius : 4px !important;
 
}

.react-datepicker__day--outside-month{
    background: ${({ theme }) =>
      theme.colourMaterialPrimaryBackground} !important;
    color: ${({ theme }) => theme.colourTextDisabled} !important;
    border-radius : 4px !important;
}

.react-datepicker{
    border: none;
    border-radius: 0px;
    border-left: 1px solid ${({ theme }) => theme.colourMaterialBorder};
    padding-left : 20px;
}

.react-datepicker__week{
  text-align: left;
  margin-bottom: 4px;
  > div:empty {
        background-color: ${({ theme }) =>
          theme.colourMaterialPrimary} !important;
        display: none;
    }
}
`;

export const DatePickerContainer = styled.div`
  width: fit-content;
  margin-top: 10px;
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
`;

export const DatePickerSettingPanelContainer = styled.div`
    width: 100%
    display: inline-flex;
`;

export const DatePickerSettingPanelWrapper = styled.div`
padding: 20px 10px;
width: fit-content;

.css-10d9dml-MuiTabs-indicator{
    display: none;
}

.css-rzetok-MuiButtonBase-root-MuiTab-root.Mui-selected{
    background: ${({ theme }) => theme.colourMaterialSecondary};
    color: ${({ theme }) => theme.colourBrandPrimaryDark};
    svg{
        path{
            fill: ${({ theme }) => theme.colourBrandPrimaryDark};
            fill-opacity: 1 !important;
        }
    }
}
  div {
    div {
      div {
          gap: 10px
        button {
            padding: 9px 10px;
          display: inline-flex;
          flex-direction: row;
          justify-content: start;
          max-width: 0;
          min-width: 102px;
          min-height: 37px;
          align-items: center;
          background: ${({ theme }) => theme.colourMaterialPrimary};
          border-radius: 4px;
          font-family : ${({ theme }) => theme.fontWorkSansRegular}
          font-size : ${({ theme }) => theme.fontSize14}
  
          text-transform: none;
          
          svg{
              margin-right: 10px
          }

          :hover{
            background: ${({ theme }) => theme.colourMaterialPrimaryHover};
          }

          .css-8je8zh-MuiTouchRipple-root{
              display: none;
          }

        }
    }
  }
`;

export const DatePickerSettingPanelScreen = styled.div`
  padding: 20px 20px 20px 0px;
`;

export const DatePickerHeading = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular}
  font-size : ${({ theme }) => theme.fontSize_10}
  color: ${({ theme }) => theme.colourTextPrimary};
`;
