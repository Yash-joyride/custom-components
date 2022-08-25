import React from "react";
import { Default_Chatbox, User_Chatbox, Chat_Section } from "./Chat";
import theme from "../../Globals/theme";
import { messages } from "./constant";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Chats/Default Chatbox",
  component: Default_Chatbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const DefaultChatbox = () => (
  <Default_Chatbox
    color={theme.colourMaterialPrimary}
    text="This vehicle has been giving many issues."
    username="Username"
    timings="AUG 12, 00:00PM"
  />
);
export const UserChatbox = () => (
  <User_Chatbox
    color={theme.colourMaterialSecondary}
    text="This vehicle has been giving many issues."
    username="Username"
    timings="AUG 12, 00:00PM"
  />
);
export const ChatSection = () => (
  <Chat_Section messages={messages} heading="Notes Section" isUser={true} />
);
