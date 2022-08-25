import { Erroricon } from "../Icons/ErrorIcon";
import { Infoicon } from "../Icons/InfoIcon";
import { Successicon } from "../Icons/SuccessIcon";
import { Warningicon } from "../Icons/WarningIcon";
import { SmallButton } from "../Typography/Paragraph";
import {
  ModalPanelWrapper,
  InfoModelnewmain,
  Panelsub,
  Cancelbutton,
  ModelMain,
  Warningsub,
  Modelerrormain,
  ModelSuccessmain,
  ModelInfomain,
} from "./style";
import {
  Warningtext,
  PanelHeadertext,
  Paneltext,
} from "../Typography/Paragraph";

const Modelwarning = () => {
  return (
    <ModelMain>
      <Warningsub>
        <Warningicon></Warningicon>
        <Warningtext>WARNING</Warningtext>
      </Warningsub>
    </ModelMain>
  );
};
const Modelerror = () => {
  return (
    <Modelerrormain>
      <Warningsub>
        <Erroricon></Erroricon>
        <Warningtext>ERROR</Warningtext>
      </Warningsub>
    </Modelerrormain>
  );
};
const Modelsuccess = () => {
  return (
    <ModelSuccessmain>
      <Warningsub>
        <Successicon></Successicon>
        <Warningtext>SUCCESS</Warningtext>
      </Warningsub>
    </ModelSuccessmain>
  );
};
const Modelinfo = () => {
  return (
    <ModelInfomain>
      <Warningsub>
        <Infoicon></Infoicon>
        <Warningtext>INFO</Warningtext>
      </Warningsub>
    </ModelInfomain>
  );
};

const Modelpanel = () => {
  return (
    <ModalPanelWrapper>
      <InfoModelnewmain>
        <Warningsub>
          <Infoicon />
          <Warningtext>INFO</Warningtext>
        </Warningsub>
      </InfoModelnewmain>
      <Panelsub>
        <PanelHeadertext>Modal Header</PanelHeadertext>
        <Paneltext>
          This is a brief description of the action you are about to take. This
          is your final warning before proceeding with your action
        </Paneltext>
        <Cancelbutton>
          <SmallButton>Cancel</SmallButton>
          <SmallButton>Continue</SmallButton>
        </Cancelbutton>
      </Panelsub>
    </ModalPanelWrapper>
  );
};

export { Modelwarning, Modelerror, Modelsuccess, Modelinfo, Modelpanel };
