import styled from "styled-components";

import { Selectsub } from "../FeedbackMessage/style";

//Modal Type

const ModelMain = styled.div`
  width: 407px;
  height: 60px;
  background: ${({ theme }) => theme.colourStateWarningTint};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 40px 22px 40px;
`;
const Warningiconwrapper = styled.div`
  display: flex;
`;
const Warningsub = styled.div`
  display: flex;
  align-items: center;
`;

const Modelerrormain = styled(ModelMain)`
  background: ${({ theme }) => theme.colourStateErrorTint};
`;
const ModelSuccessmain = styled(ModelMain)`
  background: ${({ theme }) => theme.colourStateSuccessTint};
`;
const ModelInfomain = styled(ModelMain)`
  background: ${({ theme }) => theme.colourStateInfoTint};
`;

const InfoModelnewmain = styled(ModelInfomain)`
  width: 100%;
  display: inline-flex;
  border-radius: 8px 8px 0px 0px;
`;

const ModalPanelWrapper = styled.div`
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
  border-radius: 8px;
  width: 407px;
`;

const Modelpanelmain = styled(ModelMain)`
  display: inline-grid;
  border-radius: 8px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  width: 407px;
`;
const Panelsub = styled.div`
  margin-top: 60px;
  margin-left: 40px;
  margin-right: 40px;
  align-items: center;
`;

const Cancelbutton = styled(Selectsub)`
  margin-top: 60px;
  margin-bottom: 30px;
  width: 100%;
`;

export {
  Modelpanelmain,
  ModalPanelWrapper,
  InfoModelnewmain,
  Panelsub,
  Cancelbutton,
  ModelMain,
  Warningiconwrapper,
  Warningsub,
  Modelerrormain,
  ModelSuccessmain,
  ModelInfomain,
};
