import { ThemeProvider } from "styled-components";

// on board card
import { NewOnBoardingCards } from "../../Styled-Components/NewOnBoardingCard";
import { DefaultCard } from "../../Styled-Components/NewOnBoardingCard/DefaultCard";
import { DisabledCard } from "../../Styled-Components/NewOnBoardingCard/DisabledCard";
import { CompleteCard } from "../../Styled-Components/NewOnBoardingCard/CompleteCard";
// on board step
import { NewOnBoardingStep } from "../../Styled-Components/NewOnBoardingCard/NewOnBoardingStep";
import { DefaultStep } from "../../Styled-Components/NewOnBoardingCard/NewOnBoardingStep/DefaultStep";
import { CompletedStep } from "../../Styled-Components/NewOnBoardingCard/NewOnBoardingStep/CompletedStep";
import { DisableStep } from "../../Styled-Components/NewOnBoardingCard/NewOnBoardingStep/DisableStep";

import theme from "../../Globals/theme";
import {
  cardArray,
  stepArray,
} from "../../Styled-Components/NewOnBoardingCard/Constants";

const handleChange = (value) => {
  console.log("card value:-", value);
};

// on board card
export const NewOnBoardingStepStory = () => {
  return (
    <ThemeProvider theme={theme}>
      <NewOnBoardingStep />
    </ThemeProvider>
  );
};
export const NewDefaultStep = () => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultStep step={stepArray[0]} onChange={handleChange} />
    </ThemeProvider>
  );
};
export const NewCompleteStep = () => {
  return (
    <ThemeProvider theme={theme}>
      <CompletedStep step={stepArray[2]} onChange={handleChange} />
    </ThemeProvider>
  );
};
export const NewDisableStep = () => {
  return (
    <ThemeProvider theme={theme}>
      <DisableStep step={stepArray[1]} onChange={handleChange} />
    </ThemeProvider>
  );
};

// on board card
export const NewOnBoardingCardStory = () => {
  return (
    <ThemeProvider theme={theme}>
      <NewOnBoardingCards />
    </ThemeProvider>
  );
};
export const NewDefaultCard = () => {
  console.log(`NewDefaultCard :-`, cardArray[1]);
  return (
    <ThemeProvider theme={theme}>
      <DefaultCard card={cardArray[1]} onChange={handleChange} />
    </ThemeProvider>
  );
};
export const NewDisabledCard = () => {
  console.log(`NewDisabledCard :-`, cardArray[2]);
  return (
    <ThemeProvider theme={theme}>
      <DisabledCard
        card={cardArray[2]}
        onChange={handleChange}
        disabled={true}
      />
    </ThemeProvider>
  );
};
export const NewCompleteCard = () => {
  console.log(`NewCompleteCard :-`, cardArray[0]);
  return (
    <ThemeProvider theme={theme}>
      <CompleteCard card={cardArray[0]} onChange={handleChange} />
    </ThemeProvider>
  );
};
