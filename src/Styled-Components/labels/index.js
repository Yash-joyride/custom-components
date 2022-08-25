import {
  LabelContentWrapper,
  LabelWrapper,
  RequiredLabelWrapper,
} from "./style";
import LabelIcon from "../Icons/labelIcon";
import { RequiredTextWrapper } from "../Typography/Paragraph";

const RequiredLabel = ({ label }) => {
  return (
    <RequiredLabelWrapper>
      <LabelContentWrapper>
        {label}
        <LabelIcon />
      </LabelContentWrapper>
      <RequiredTextWrapper>Required</RequiredTextWrapper>
    </RequiredLabelWrapper>
  );
};

const Label = ({ label }) => {
  return (
    <LabelWrapper>
      <LabelContentWrapper>
        {label}
        <LabelIcon />
      </LabelContentWrapper>
    </LabelWrapper>
  );
};

export { RequiredLabel, Label };
