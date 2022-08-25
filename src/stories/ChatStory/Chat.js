import React from "react";
import {
  ChatSection,
  DefaultChatbox,
  UserChatbox,
} from "../../Styled-Components/ChatBox";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";

const Default_Chatbox = ({ color, text, username, timings }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultChatbox
        color={color}
        text={text}
        username={username}
        timings={timings}
      />
    </ThemeProvider>
  );
};

const User_Chatbox = ({ color, text, username, timings }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserChatbox
        color={color}
        text={text}
        username={username}
        timings={timings}
      />
    </ThemeProvider>
  );
};

const Chat_Section = ({ messages, heading, isUser }) => {
  return (
    <ThemeProvider theme={theme}>
      <ChatSection messages={messages} heading={heading} isUser={isUser} />
    </ThemeProvider>
  );
};

export { Default_Chatbox, User_Chatbox, Chat_Section };
