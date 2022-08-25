import React from "react";

// import { Button } from './Button';
import { Toggle_Button, Labeled_Toggle_Button } from "../Toggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Toggle/Toggle",
  component: Toggle_Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const LabeledToggle = () => <Labeled_Toggle_Button />;
export const Toggle = () => <Toggle_Button />;
