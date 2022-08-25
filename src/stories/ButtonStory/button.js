import { ThemeProvider } from "styled-components";
import ArrowButtonIcon from "../../Styled-Components/Icons/ArrowButtonIcon";
import OptionIcon from "../../Styled-Components/Icons/OptionIcon/index";
import AddIcon from "../../Styled-Components/Icons/AddIcon/index";
import theme from "../../Globals/theme";
import "../../Globals/global-styles";
import PrimaryButton, { AddOptionButtonText, OptionButtonText, InfoButton, SecondaryButton, SuccessButton, WarningButton, ErrorButton, AddPrimaryButton, AddInfoButton, AddSecondaryButton, AddSuccessButton, AddWarningButton, AddErrorButton, OptionPrimaryButton, OptionInfoButton, OptionSecondaryButton, OptionSuccessButton, OptionWarningButton, OptionErrorButton, AddOptionPrimaryButton, AddOptionSecondaryButton, AddOptionInfoButton, AddOptionSuccessButton, AddOptionWarningButton, AddOptionErrorButton, SmallPrimaryButton, SmallAddButton, ArrowButton, SmallArrowButton, PlusButton } from "../../Styled-Components/Button/style";

const ButtonPrimary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryButton>{children}</PrimaryButton>
    </ThemeProvider>
  );
};

const ButtonInfo = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <InfoButton>{children}</InfoButton>
    </ThemeProvider>
  );
};

const ButtonSecondary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SecondaryButton>{children}</SecondaryButton>
    </ThemeProvider>
  );
};

const ButtonSuccess = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SuccessButton>{children}</SuccessButton>
    </ThemeProvider>
  );
};

const ButtonWarning = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <WarningButton>{children}</WarningButton>
    </ThemeProvider>
  );
};

const ButtonError = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorButton>{children}</ErrorButton>
    </ThemeProvider>
  );
};

const ButtonAddPrimary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddPrimaryButton>
        <AddIcon /> {children}
      </AddPrimaryButton>
    </ThemeProvider>
  );
};

const ButtonAddInfo = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddInfoButton>
        <AddIcon /> {children}
      </AddInfoButton>
    </ThemeProvider>
  );
};

const ButtonAddSecondary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddSecondaryButton>
        <AddIcon /> {children}
      </AddSecondaryButton>
    </ThemeProvider>
  );
};

const ButtonAddSuccess = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddSuccessButton>
        <AddIcon /> {children}
      </AddSuccessButton>
    </ThemeProvider>
  );
};

const ButtonAddWarning = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddWarningButton>
        <AddIcon /> {children}
      </AddWarningButton>
    </ThemeProvider>
  );
};

const ButtonAddError = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddErrorButton>
        <AddIcon /> {children}
      </AddErrorButton>
    </ThemeProvider>
  );
};

const ButtonOptionPrimary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionPrimaryButton>
        <OptionButtonText>{children}</OptionButtonText>
        <OptionIcon type="primary" />
      </OptionPrimaryButton>
    </ThemeProvider>
  );
};

const ButtonOptionInfo = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionInfoButton>
        <OptionButtonText>{children}</OptionButtonText>
        <OptionIcon type="info" />
      </OptionInfoButton>
    </ThemeProvider>
  );
};

const ButtonOptionSecondary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionSecondaryButton>
        <OptionButtonText>{children}</OptionButtonText>
        <OptionIcon type="secondary" />
      </OptionSecondaryButton>
    </ThemeProvider>
  );
};

const ButtonOptionSuccess = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionSuccessButton>
        <OptionButtonText>{children}</OptionButtonText>
        <OptionIcon type="success" />
      </OptionSuccessButton>
    </ThemeProvider>
  );
};

const ButtonOptionWarning = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionWarningButton>
        <OptionButtonText>{children}</OptionButtonText>
        <OptionIcon type="warning" />
      </OptionWarningButton>
    </ThemeProvider>
  );
};

const ButtonOptionError = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <OptionErrorButton>
        <OptionButtonText>{children}</OptionButtonText>
        <OptionIcon type="error" />
      </OptionErrorButton>
    </ThemeProvider>
  );
};

const ButtonAddOptionPrimary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddOptionPrimaryButton>
        <AddOptionButtonText>
          <AddIcon />
          {children}
        </AddOptionButtonText>
        <OptionIcon type="primary" />
      </AddOptionPrimaryButton>
    </ThemeProvider>
  );
};

const ButtonAddOptionInfo = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddOptionInfoButton>
        <AddOptionButtonText>
          <AddIcon />
          {children}
        </AddOptionButtonText>
        <OptionIcon type="info" />
      </AddOptionInfoButton>
    </ThemeProvider>
  );
};

const ButtonAddOptionSecondary = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddOptionSecondaryButton>
        <AddOptionButtonText>
          <AddIcon />
          {children}
        </AddOptionButtonText>
        <OptionIcon type="secondary" />
      </AddOptionSecondaryButton>
    </ThemeProvider>
  );
};

const ButtonAddOptionSuccess = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddOptionSuccessButton>
        <AddOptionButtonText>
          <AddIcon />
          {children}
        </AddOptionButtonText>
        <OptionIcon type="success" />
      </AddOptionSuccessButton>
    </ThemeProvider>
  );
};

const ButtonAddOptionWarning = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddOptionWarningButton>
        <AddOptionButtonText>
          <AddIcon />
          {children}
        </AddOptionButtonText>
        <OptionIcon type="warning" />
      </AddOptionWarningButton>
    </ThemeProvider>
  );
};

const ButtonAddOptionError = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddOptionErrorButton>
        <AddOptionButtonText>
          <AddIcon />
          {children}
        </AddOptionButtonText>
        <OptionIcon type="error" />
      </AddOptionErrorButton>
    </ThemeProvider>
  );
};

const ButtonSmall = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallPrimaryButton>{children}</SmallPrimaryButton>
    </ThemeProvider>
  );
};

const ButtonAddSmall = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallAddButton>
        {" "}
        <AddIcon /> {children}
      </SmallAddButton>
    </ThemeProvider>
  );
};

const ButtonArrow = () => {
  return (
    <ThemeProvider theme={theme}>
      <ArrowButton>
        <ArrowButtonIcon />
      </ArrowButton>
    </ThemeProvider>
  );
};

const ButtonSmallArrow = () => {
  return (
    <ThemeProvider theme={theme}>
      <SmallArrowButton>
        <ArrowButtonIcon />
      </SmallArrowButton>
    </ThemeProvider>
  );
};

const ButtonAddition = () => {
  return (
    <ThemeProvider theme={theme}>
      <PlusButton>
        <AddIcon />
      </PlusButton>
    </ThemeProvider>
  );
};

export default ButtonPrimary;
export { ButtonInfo, ButtonSecondary, ButtonSuccess, ButtonWarning, ButtonError, ButtonAddPrimary, ButtonAddInfo, ButtonAddSecondary, ButtonAddSuccess, ButtonAddWarning, ButtonAddError, ButtonOptionPrimary, ButtonOptionInfo, ButtonOptionSecondary, ButtonOptionSuccess, ButtonOptionWarning, ButtonOptionError, ButtonAddOptionPrimary, ButtonAddOptionSecondary, ButtonAddOptionInfo, ButtonAddOptionSuccess, ButtonAddOptionWarning, ButtonAddOptionError, ButtonSmall, ButtonAddSmall, ButtonArrow, ButtonSmallArrow, ButtonAddition };
