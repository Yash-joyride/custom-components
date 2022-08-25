import Multipleicon from "../Icons/Multiplicationicon";

import {
  Crosebuttonbox,
  MessageMain,
  Messagesub,
  Selectsub,
  Messageicon,
  RiderImg,
} from "./style";
import { getCard } from "../../Globals/getAssets";
import { Messagenew, SmallButton } from "../Typography/Paragraph";

const Successmain = ({ messageNew }) => {
  return (
    <MessageMain>
      <Messagesub>
        <Messageicon>
          <RiderImg src={getCard("rider_feedback")} alt="rider" />
        </Messageicon>
        <Messagenew>{messageNew}</Messagenew>
      </Messagesub>
      <Crosebuttonbox>
        <SmallButton>
          <Multipleicon></Multipleicon>
          Close
        </SmallButton>
      </Crosebuttonbox>
    </MessageMain>
  );
};

const Selectmessagemain = ({ messageNewMain }) => {
  return (
    <MessageMain>
      <Messagesub>
        <Messageicon>
          <RiderImg src={getCard("rider_feedback")} alt="rider" />
        </Messageicon>
        <Messagenew>{messageNewMain}</Messagenew>
      </Messagesub>
      <Selectsub>
        <SmallButton>
          <Multipleicon></Multipleicon>
          Close
        </SmallButton>
        <SmallButton>Deactivate</SmallButton>
        <SmallButton>Activate</SmallButton>
      </Selectsub>
    </MessageMain>
  );
};
export { Successmain, Selectmessagemain };
