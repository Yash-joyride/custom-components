import { RichTextEditorComponent } from "./RichTextEditorComponent";
import { RichTextEditorInputField } from "../InputField";
import {
  RichTextEditorContainer,
  RichTextEditorLabelSectionWrapper,
  RichTextEditorComponentContainer,
  RichTextEditorComponentSubHeadingContainer,
} from "./style";
import {
  RichTextEditorHeaderWrapper,
  RichTextEditorComponentSubHeadingWrapper,
} from "../Typography/Paragraph";

export const RichTextEditor = () => {
  return (
    <RichTextEditorContainer>
      <RichTextEditorHeaderWrapper>Email Message</RichTextEditorHeaderWrapper>
      <RichTextEditorLabelSectionWrapper>
        <RichTextEditorInputField />
      </RichTextEditorLabelSectionWrapper>
      <RichTextEditorComponentContainer>
        <RichTextEditorComponentSubHeadingContainer>
          <RichTextEditorComponentSubHeadingWrapper>
            Email Preview
          </RichTextEditorComponentSubHeadingWrapper>
          <RichTextEditorComponentSubHeadingWrapper>
            Required
          </RichTextEditorComponentSubHeadingWrapper>
        </RichTextEditorComponentSubHeadingContainer>
        <RichTextEditorComponent />
      </RichTextEditorComponentContainer>
    </RichTextEditorContainer>
  );
};
