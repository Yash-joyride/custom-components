import styled from "styled-components";

const OptionButtonText = styled.div`
  width: 95px;
`;

const AddOptionButtonText = styled.div`
  width: 118px;
  display: flex;
  justify-content: space-evenly;
`;

const PrimaryButton = styled.button`
  padding: 0px;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: 4px;
  width: 95px;
  height: 47px;
  color: ${({ theme }) => theme.colourTextPrimary};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  background: ${({ theme }) => theme.colourBrandPrimaryTintLight};

  :hover {
    background: ${({ theme }) => theme.colourBrandPrimaryTint};
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const InfoButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourStateInfoTint};
  }
`;

const SuccessButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colourStateSuccessTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateSuccessTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateSuccessTint};
  }
`;

const WarningButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colourStateWarningTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateWarningTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateWarningTint};
  }
`;

const ErrorButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colourStateErrorTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateErrorTint};
  }
`;

const AddPrimaryButton = styled(PrimaryButton)`
  width: 118px;
  color: ${({ theme }) => theme.colourTextPrimary};
  svg {
    path {
      fill: ${({ theme }) => theme.colourTextPrimary};
    }
  }
`;

const AddInfoButton = styled(AddPrimaryButton)`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourStateInfoTint};
  }
`;
const AddSecondaryButton = styled(AddPrimaryButton)`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const AddSuccessButton = styled(AddPrimaryButton)`
  background: ${({ theme }) => theme.colourStateSuccessTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateSuccessTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateSuccessTint};
  }
`;
const AddWarningButton = styled(AddPrimaryButton)`
  background: ${({ theme }) => theme.colourStateWarningTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateWarningTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateWarningTint};
  }
`;

const AddErrorButton = styled(AddPrimaryButton)`
  background: ${({ theme }) => theme.colourStateErrorTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateErrorTint};
  }
`;

const OptionPrimaryButton = styled(PrimaryButton)`
  width: 124px;
  border: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};
`;

const OptionInfoButton = styled(OptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourStateInfoTint};

    .fbEoCn {
      border-left: 1px solid ${({ theme }) => theme.colourStateInfoLight};
    }
  }
`;

const OptionSecondaryButton = styled(OptionPrimaryButton)`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const OptionSuccessButton = styled(OptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateSuccessTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateSuccessTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateSuccessTint};
  }
`;

const OptionWarningButton = styled(OptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateWarningTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateWarningTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateWarningTint};
  }
`;

const OptionErrorButton = styled(OptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateErrorTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateErrorTint};
  }
`;

const AddOptionPrimaryButton = styled(PrimaryButton)`
  width: 147px;
  display: inline-flex;
`;

const AddOptionInfoButton = styled(AddOptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateInfoTintLight};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourStateInfoTint};

    .kkKeSv {
      border-left: 1px solid ${({ theme }) => theme.colourStateInfoLight};
    }
  }
`;

const AddOptionSecondaryButton = styled(AddOptionPrimaryButton)`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const AddOptionSuccessButton = styled(AddOptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateSuccessTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateSuccessTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateSuccessTint};
  }
`;

const AddOptionWarningButton = styled(AddOptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateWarningTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateWarningTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateWarningTint};
  }
`;

const AddOptionErrorButton = styled(AddOptionPrimaryButton)`
  background: ${({ theme }) => theme.colourStateErrorTintLight};
  border: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};

  :hover {
    background: ${({ theme }) => theme.colourStateErrorTint};
  }
`;

const SmallPrimaryButton = styled(PrimaryButton)`
  width: 75px;
  height: 37px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const SmallAddButton = styled(SmallPrimaryButton)`
  width: 94px;

  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const ArrowButton = styled.div`
  width: 47px;
  height: 47px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  svg {
    display: flex;
  }
  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const SmallArrowButton = styled(ArrowButton)`
  width: 37px;
  height: 37px;
`;

const PlusButton = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  width: 33px;
  height: 33px;
  display: inline-flex;
  justify-content: center;
  border-radius: 4px;
  > div {
    display: flex;
    align-items: center;

    svg {
      path {
        fill: ${({ theme }) => theme.colourTextPrimary};
      }
    }
  }
`;

const Continuebutton = styled.div`
  width: 167px;

  height: 37px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colourTextPrimary};
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px 0 0 0;
`;

export default PrimaryButton;
export { InfoButton, SecondaryButton, SuccessButton, WarningButton, ErrorButton, AddPrimaryButton, AddInfoButton, AddSecondaryButton, AddSuccessButton, AddWarningButton, AddErrorButton, OptionPrimaryButton, OptionInfoButton, OptionSecondaryButton, OptionSuccessButton, OptionWarningButton, OptionErrorButton, AddOptionPrimaryButton, AddOptionSecondaryButton, AddOptionInfoButton, AddOptionSuccessButton, AddOptionWarningButton, AddOptionErrorButton, OptionButtonText, AddOptionButtonText, SmallPrimaryButton, SmallAddButton, ArrowButton, SmallArrowButton, PlusButton, Continuebutton };
