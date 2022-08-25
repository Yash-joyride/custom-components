import styled from "styled-components";

export const HeadWrapper = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
`;

export const Card = styled.div`
  width: ${(props) => props.width || "265px"};
  height: ${(props) => props.height || "334px"};
  margin: 10px;
  border-radius: 8px;
  padding: ${(props) => props.pedding || "0 0 28px 0"};
  border: ${(props) => props.border};
  background: ${(props) =>
    props.background || props.theme.colourMaterialPrimary};
  cursor: pointer;

  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 50%;
`;

export const CardDetails = styled.div`
  height: 50%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepHeadWrap = styled.div`
  margin: 0 0 15px 0;
`;
