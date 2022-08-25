import React from "react";

// import { Button } from './Button';
import ButtonPrimary, { ButtonInfo, ButtonSecondary, ButtonSuccess, ButtonWarning, ButtonError } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Basic Buttons",
  component: ButtonPrimary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = () => <ButtonPrimary>Button</ButtonPrimary>;

export const Info = () => <ButtonInfo>Button</ButtonInfo>;

export const Secondary = () => <ButtonSecondary>Button</ButtonSecondary>;

export const Success = () => <ButtonSuccess>Button</ButtonSuccess>;

export const Warning = () => <ButtonWarning>Button</ButtonWarning>;

export const Error = () => <ButtonError>Button</ButtonError>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <ButtonPrimary {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
