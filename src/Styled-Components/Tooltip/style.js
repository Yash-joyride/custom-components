import styled from "styled-components";

const TooltipBottomContainer = styled.div`
  display: inline-grid;
  justify-content: center;
  align-items: center;

  > div {
    div {
      display: inline-flex;
      align-items: flex-end;
    }
  }
`;

const TooltipIconWrapper = styled.div`
    display: inline-flex
    justify-content: center;
    align-items: center;
`;

const TooltipTopContainer = styled(TooltipBottomContainer)`
  > div {
    div:last-child {
      transform: rotate(180deg);
    }
  }
`;
const TooltipLeftContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > div {
    div:last-child {
      transform: rotate(90deg);
    }
  }
`;
const TooltipRightContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > div {
    div:first-child {
      transform: rotate(270deg);
    }
  }
`;

export {
  TooltipBottomContainer,
  TooltipIconWrapper,
  TooltipTopContainer,
  TooltipLeftContainer,
  TooltipRightContainer,
};
