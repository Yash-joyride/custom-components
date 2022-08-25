import styled from "styled-components";

export const RichTextEditorContainer = styled.div`
  padding: 48px 40px 40px 40px;
  background: ${({ theme }) => theme.colourMaterialPrimary};

  .tox-notifications-container {
    display: none;
  }
`;

export const RichTextEditorLabelSectionWrapper = styled.div`
  margin-top: 28px;
  > div {
    width: 100%;
  }
`;

export const RichTextEditorComponentContainer = styled(
  RichTextEditorLabelSectionWrapper
)`
  display: grid;
  gap: 10px;
`;

export const RichTextEditorComponentSubHeadingContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;
