import styled from "styled-components";
import { Slider } from "@mui/material";

export const SmallMapPinSliderWrapper = styled.div`
width: 203px;
height : 12px;
span {
    > span:first-child {
        height: 2px;
      background: ${({ theme }) => theme.colourData3};
      opacity: 1;
    }

    > span:nth-child(2) {
      background: transparent;
      border: none;
    }

    > span:nth-child(3) {
        width: 12px
        height: 12px
        color: ${({ theme }) => theme.colourMaterialPrimary};
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;

      :hover {
        box-shadow: none;
      }
      > span {
        display: none;
      }
    }

    > span:last-child {
        width: 12px;
        height: 12px;
        color: ${({ theme }) => theme.colourMaterialPrimary};
      border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
      box-shadow: none;

      :hover {
        box-shadow: none;
      }
      > span {
        display: none;
      }
    }
  }
`;

export const MediumMapPinSliderWrapper = styled(SmallMapPinSliderWrapper)`
  span {
    > span:first-child {
      height: 6px;
      background: ${({ theme }) => theme.colourData2};
    }

    > span:nth-child(3) {
      width: 16px;
      height: 16px;
    }

    > span:last-child {
      width: 16px;
      height: 16px;
    }
  }
`;

export const LargeMapPinSliderWrapper = styled(SmallMapPinSliderWrapper)`
  span {
    > span:first-child {
      height: 12px;
      background: ${({ theme }) => theme.colourData1};
    }

    > span:nth-child(3) {
      width: 24px;
      height: 24px;
    }

    > span:last-child {
      width: 24px;
      height: 24px;
    }
  }
`;

export const MapPinFlagWrapper = styled.div`
  > div {
    position: unset;
  }
`;

export const PlaybackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  width: 188px;
  height: 66px;
  left: 20px;
  top: 20px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 33px;
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
`;

export const PlaybackIconContainer = styled.div`
  display: flex;
  position: absolute;
  width: 54px;
  height: 54px;
  left: 5px;
  top: 5px;
  background: ${({ theme }) => theme.colourBrandPrimaryDark};
  border-radius: 50px;
`;

export const PlaybackIconWrapper = styled.div`
  position: absolute;
`;

export const LiveStatusIconWrapper = styled.div`
  position: absolute;
  left: 70px;
  top: 32px;
`;

export const IconButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colourBrandPrimaryDark};
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: none;
  top: 5px;

  .IconButtons {
    width: 54px;
    height: 54px;
  }
`;

export const PlaybackPlayContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  left: 20px;
  top: 20px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-radius: 50px;
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
  border: none;
`;

export const PlaybackPlayIconWrapper = styled.button`
  position: absolute;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colourBrandPrimaryTintExtraLight};
  border-radius: 50px;
  border: none;
`;

export const PlaybackDatePickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 346px;
  height: 66px;
  left: 76px;
  top: 0px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};

  &.DatePickerContainerWithDate {
    width: 460px;
  }
`;

export const PlaybackIconButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colourBrandPrimaryTintExtraLight};
  border: none;

  .PlayIconButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
  }
`;

export const PlaybackDatePickerWrapper = styled.div`
  width: 151px;
  height: 66px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  .PlaybackDatePickerButton {
    margin: 10px !important;
    width: 92%;
    justify-content: space-evenly;
  }

  .DatePickerButton {
    margin-left: 15px;
    margin-top: 10px;
  }

  .react-datepicker {
    display: flex;
  }

  &.DatePickerWrapperWithDate {
    width: 58%;
  }
  .MuiButton-endIcon {
    > div {
      display: flex;
      align-items: center;
    }
  }
`;

export const PlaybackMediaContainer = styled.div`
  position: absolute
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 185px;
  height : 66px;
  left : 159px;
  gap : 25px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  
    > svg {
      > path {
        fill : ${({ theme }) => theme.colourTextPrimary};
        cursor : pointer;
      }
  }

  &.PlaybackMediaContainerWithDate {
    position: relative;
    left: 0;
    right: 0;
  }
`;

export const PlayPauseIconContainer = styled.div`
  > div {
    > svg {
      > path {
        fill: ${({ theme }) => theme.colourTextPrimary};
        cursor: pointer;
      }
    }
  }
`;

export const PrettoSliderWrapper = styled(Slider)`
  color : ${({ theme }) => theme.colourTextPrimary} !important
  height : 4px !important;
  padding : 0px !important;
  bottom: 0px !important;
  position: absolute !important;
  border-radius: 0px !important;

  & .MuiSlider-track {
    border: none
  }

  & .MuiSlider-rail {
    color : ${({ theme }) => theme.colourMaterialBorder};
    opacity : 0.9
  }

  & .MuiSlider-thumb{
    height : 10px;
    width : 10px;
    background: ${({ theme }) => theme.colourMaterialPrimary};
    border: 2px solid ${({ theme }) => theme.colourTextPrimary};
    
    &:focus, &:hover, &.Mui-active, &.Mui-focusVisible {
      box-shadow: inherit
    },
  }`;
