import styled from "styled-components";

const RequiredLabelWrapper = styled.div`
  width: 100%;
  height: 12px;
  color: ${({ theme }) => theme.colourTextPrimary};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelContentWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  svg {
    margin-left: 5px;
  }
`;

const LabelWrapper = styled(RequiredLabelWrapper)`
  width: auto;
  height: auto;
`;

export { RequiredLabelWrapper, LabelContentWrapper, LabelWrapper };
