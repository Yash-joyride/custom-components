import styled from "styled-components";

const ChatContainer = styled.div`
  width: fit-content;
`;

const ChatBoxWrapper = styled.div`
  padding: 14px 24px;
  background: ${(props) => props.color};
  margin-bottom: 14px;
  margin-top: 28px;
  border-radius: 4px;
`;
const ChatBoxTextWrapper = styled.div`
    width: 354px;
    height : 25px;
    font-family: ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize14}
    color: ${({ theme }) => theme.colourTextPrimary}
`;

const ChatBoxSubTextWrapper = styled.div`
display: inline-flex
font-family: ${({ theme }) => theme.fontWorkSansRegular}
font-size : ${({ theme }) => theme.fontSize_10}
color: ${({ theme }) => theme.colourTextSecondary}
`;

const ChatBoxSubTextUsernameWrapper = styled.div`
  color: ${({ theme }) => theme.colourTextPrimary};
  font-weight: 500px;
  margin-right: 5px;
`;

// chat section

const ChatSectionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 95vh;
`;

const ChatSectionHeaderWrapper = styled.div`
  width: 100%;
  height : 47px
  display: inline-flex;
  justify-content: start;
  align-items: flex-start;
  font-family : ${({ theme }) => theme.fontWorkSansMedium}
  font-size : ${({ theme }) => theme.fontSize_18}
  border-bottom : 1px solid ${({ theme }) => theme.colourMaterialBorder};
  background: ${({ theme }) => theme.colourMaterialPrimary};
`;

const ChatSectionUserChatWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: ${(props) => props.justifyContent};
`;

const ChatSectionDefaultChatWrapper = styled(ChatSectionUserChatWrapper)`
  justify-content: flex-start;
`;

const ChatSectionBodyWrapper = styled.div`
  height: calc(100vh - 17vh);
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ChatbarSendButtonWrapper = styled.div`
height: 100%
background: ${({ theme }) => theme.colourBrandPrimaryTintLight};
padding: 14px 24px;
color: ${({ theme }) => theme.colourTextPrimary};
font-family: ${({ theme }) => theme.fontWorkSansRegular}
font-size : ${({ theme }) => theme.fontSize14}
border-radius : 4px;
cursor: pointer;
display: flex;

svg{
  margin-right : 10px;
}
`;

export {
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
};
