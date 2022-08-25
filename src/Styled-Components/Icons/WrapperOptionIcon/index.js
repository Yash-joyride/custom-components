import styled from "styled-components";

const OptionPrimaryWrapperIcon = styled.div`
  display: inline-flex;
  width: 28px;
  height: 47px;
  border-left: 1px solid ${({ theme }) => theme.colourBrandPrimaryTintLight};
  justify-content: center;
  align-items: center;
`;

const OptionInfoWrapperIcon = styled(OptionPrimaryWrapperIcon)`
  border-left: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

const OptionSecondaryWrapperIcon = styled(OptionPrimaryWrapperIcon)`
  border-left: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

const OptionSuccessWrapperIcon = styled(OptionPrimaryWrapperIcon)`
  border-left: 1px solid ${({ theme }) => theme.colourStateSuccessTintLight};
`;

const OptionWarningWrapperIcon = styled(OptionPrimaryWrapperIcon)`
  border-left: 1px solid ${({ theme }) => theme.colourStateWarningTintLight};
`;

const OptionErrorWrapperIcon = styled(OptionPrimaryWrapperIcon)`
  border-left: 1px solid ${({ theme }) => theme.colourStateErrorTintLight};
`;

export default OptionPrimaryWrapperIcon;
export {
  OptionInfoWrapperIcon,
  OptionSecondaryWrapperIcon,
  OptionSuccessWrapperIcon,
  OptionWarningWrapperIcon,
  OptionErrorWrapperIcon,
};
