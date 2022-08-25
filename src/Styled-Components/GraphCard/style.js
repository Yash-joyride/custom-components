import styled from "styled-components";

export const AddReportCardWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  padding: 20px;
`;

export const AddReportContentWrapper = styled.div`
display: inline-grid;
align-content: center;
justify-items: center;
font-family : ${({ theme }) => theme.fontWorkSansRegular}
font-size : ${({ theme }) => theme.fontSize14}
color: ${({ theme }) => theme.colourTextSecondary};
gap: 14px;

div{
    svg{
        path{
            fill: ${({ theme }) => theme.colourTextSecondary}
        }
    }
}
`;

export const DailyTripRidersChartWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
  padding: 20px;
`;

export const ExtraLargeDailyTripRidersChartSubHeadingWrapper = styled.div`
display: flex;
align-items: center;
gap:10px;
    width: 100%;
    color: ${({ theme }) => theme.colourTextSecondary};
    font-family: ${({ theme }) => theme.fontWorkSansMedium}
    font-size: ${({ theme }) => theme.fontSize_12}
`;

export const ExtraLargeDailyTripRidersChartHeadingWrapper = styled(
  ExtraLargeDailyTripRidersChartSubHeadingWrapper
)`
  color: ${({ theme }) => theme.colourTextPrimary};
  font-size: ${({ theme }) => theme.fontSize_18};
  margin-top: 30px;
`;

export const LargeDailyTripRidersChartRidersWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const LargeDailyTripRidersChartRidersNumberWrapper = styled.div`
font-family: ${({ theme }) => theme.fontWorkSansMedium}
font-size : ${({ theme }) => theme.fontSize_18}
color: ${({ theme }) => theme.colourTextPrimary};
`;

export const LargeDailyTripRidersChartRidersContainer = styled.div`
    font-family: ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize14}
    color: ${({ theme }) => theme.colourTextPrimary};
    display : inline-grid;
`;

export const LargeDailyTripRidersChartChartHeaderWrapper = styled.div`
font-family: ${({ theme }) => theme.fontWorkSansRegular}
font-size : ${({ theme }) => theme.fontSize14}
color: ${({ theme }) => theme.colourTextPrimary};
margin-top : 30px;

`;

export const LargeDailyTripRidersChartChartTimelineWrapper = styled.div`
width: 100%;
font-family: ${({ theme }) => theme.fontWorkSansRegular}
font-size : ${({ theme }) => theme.fontSize_10}
color: ${({ theme }) => theme.colourTextSecondary};
display : inline-flex;
align-items: center;
justify-content: center;
`;

export const LargeDailyTripRidersChartChartWrapper = styled.div`
  > div:nth-child(2) {
    > div {
      > div {
        > div {
          > div {
            > svg {
              > g {
                > path {
                  stroke: none;
                  stroke-width: 0;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const LargeDailyTripRidersChartBarChartWrapper = styled.div``;
export const LargeDailyTripRidersChartSubHeadingWrapper = styled(
  ExtraLargeDailyTripRidersChartSubHeadingWrapper
)``;

export const LargeDailyTripRidersChartChartLegendContainer = styled.div`
  display: inline-grid;
  gap: 10px;
  margin-top: 30px;
`;

export const LargeDailyTripRidersChartChartLegendWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const LargeDailyTripRidersChartChartLegendIconWrapper = styled.div`
  width: 10px;
  height: 10px;
  background: ${(props) => props.color};
  border-radius: 50px;
  margin-right: 5px;
`;

export const EditCardContainer = styled.div`
  > div:first-child {
    position: relative;
  }
  > div:last-child {
    position: absolute;
    top: 16px;
  }
`;

export const EditCardWrapper = styled(AddReportCardWrapper)`
  display: inline-block;

  background: ${({ theme }) => theme.colourMaterialPrimary};
  opacity: 0.95;
`;

export const EditCardHeaderWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_12};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const EditCardBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const EditCardBodyContentWrapper = styled.div`
  display: inline-grid;
  align-content: center;
  justify-items: center;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize14};
  color: ${({ theme }) => theme.colourTextSecondary};
  gap: 14px;

  div {
    svg {
      path {
        fill: ${({ theme }) => theme.colourTextSecondary};
      }
    }
  }
`;

export const LineGraphContainer = styled.div`
  margin-top: 50px;
`;

export const PieGraphContainer = styled.div`
  margin-top: 20px;
  > div {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${({ theme }) => theme.fontWorkSansMedium};
    font-size: ${({ theme }) => theme.fontSize_10};
    color: ${({ theme }) => theme.colourTextSecondary};
    margin-bottom: 20px;
  }
`;

export const BarGraphContainer = styled.div`
  margin-top: 20px;
`;
