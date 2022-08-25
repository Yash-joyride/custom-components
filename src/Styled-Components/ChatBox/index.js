import {
  ChatSectionBodyWrapper,
  ChatContainer,
  ChatBoxWrapper,
  ChatBoxTextWrapper,
  ChatBoxSubTextWrapper,
  ChatBoxSubTextUsernameWrapper,
  ChatSectionHeaderWrapper,
  ChatbarSendButtonWrapper,
  ChatSectionContainer,
  ChatSectionUserChatWrapper,
  ChatSectionDefaultChatWrapper,
} from "./style";
import SendIcon from "../Icons/SendIcon";
import { InputField } from "../InputField";
import theme from "../../Globals/theme";
import { ChatbarWrapper } from "../Typography/Paragraph";

export const DefaultChatbox = ({ color, text, username, timings }) => {
  return (
    <ChatContainer>
      <ChatBoxWrapper color={color}>
        <ChatBoxTextWrapper> {text} </ChatBoxTextWrapper>
      </ChatBoxWrapper>
      <ChatBoxSubTextWrapper>
        <ChatBoxSubTextUsernameWrapper>
          {" "}
          {username}{" "}
        </ChatBoxSubTextUsernameWrapper>
        {timings}
      </ChatBoxSubTextWrapper>
    </ChatContainer>
  );
};

export const UserChatbox = ({ color, text, username, timings }) => {
  return (
    <ChatContainer>
      <ChatBoxWrapper color={color}>
        <ChatBoxTextWrapper> {text} </ChatBoxTextWrapper>
      </ChatBoxWrapper>
      <ChatBoxSubTextWrapper>
        <ChatBoxSubTextUsernameWrapper>
          {" "}
          {username}{" "}
        </ChatBoxSubTextUsernameWrapper>
        {timings}
      </ChatBoxSubTextWrapper>
    </ChatContainer>
  );
};

export const ChatSection = ({ messages, heading, isUser }) => {
  console.log(messages);
  return (
    <ChatSectionContainer>
      <ChatSectionHeaderWrapper> {heading} </ChatSectionHeaderWrapper>
      <ChatSectionBodyWrapper>
        {messages.map((message) => (
          <ChatSectionUserChatWrapper
            justifyContent={message.isUser ? "flex-end" : "flex-start"}
          >
            <UserChatbox
              color={
                message.isUser
                  ? theme.colourMaterialSecondary
                  : theme.colourMaterialPrimary
              }
              text={message.message}
              username={message.username}
              timings={message.date}
            />
          </ChatSectionUserChatWrapper>
        ))}
      </ChatSectionBodyWrapper>

      <ChatbarWrapper>
        <InputField placeholder="Reply to message thread" />
        <ChatbarSendButtonWrapper>
          <SendIcon />
          Send
        </ChatbarSendButtonWrapper>
      </ChatbarWrapper>
    </ChatSectionContainer>
  );
};
