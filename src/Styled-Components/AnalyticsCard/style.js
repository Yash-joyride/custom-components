import styled from "styled-components";

//Analytics Present Card

const Analytiscard = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryHover};
  }
`;

const AnalyticCardIconWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  letter-spacing: 0.75px;
  margin-top: 3px;
  margin-bottom: 3px;
  svg {
    height: 19px;
  }
`;

//Trip Heat Map

const TripHeatMap = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colourBrandPrimary};

  :hover {
    background: ${({ theme }) => theme.colourBrandPrimaryDark};
  }
`;
const MainTrip = styled.div`
  padding-bottom: 20px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  > div:nth-child(2) {
    svg {
      path {
        fill: ${({ theme }) => theme.colourTextReversePrimary};
      }
    }
  }
`;

const AnalyticCardIconWrappertrip = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  letter-spacing: 0.75px;
  margin-top: 3px;
  margin-bottom: 3px;
  svg {
    height: 19px;
  }
`;

const Statisticmain = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  Analytiscard,
  AnalyticCardIconWrapper,
  TripHeatMap,
  MainTrip,
  Statisticmain,
  AnalyticCardIconWrappertrip,
};
