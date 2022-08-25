import React from "react";
import { Rich_Text_Editor } from "./RichTextEditor";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Rich Text Editor/Rich Text Editor",
  component: Rich_Text_Editor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const RichTextEditor = () => <Rich_Text_Editor />;
