import styled from "styled-components";
import { SmallAddButton } from "../Button/style";

const MessageMain = styled.div`
  width: 100%;
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
  border-radius: 4px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const Messagesub = styled.div`
  padding: 24px;
  width: 272px;
  display: inline-flex;
  align-items: center;
`;
const Selectsub = styled(Messagesub)`
  margin-right: 24px;
  padding: 0px;
  width: 354px;
  justify-content: space-between;
`;
const Crosebuttonbox = styled(Messagesub)`
  margin-right: 24px;
  padding: 0px;
  width: 108px;
`;

const Messageicon = styled.div`
  border-radius: 4px;
`;
const Wrappercrossicon = styled.div``;

const RiderImg = styled.img`
  height: 37px;
  width: 37px;
`;

export {
  MessageMain,
  Wrappercrossicon,
  Messagesub,
  Crosebuttonbox,
  Messageicon,
  Selectsub,
  RiderImg,
};
