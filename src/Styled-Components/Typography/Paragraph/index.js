import styled from "styled-components";
import { SmallAddButton } from "../../Button/style";
import { LabelContentWrapper } from "../../labels/style";

export const Paragraph = styled.span`
  display: inline-block;
  line-height: ${(props) => props.lineHeight || "24px"};
  font-size: ${({ theme }) => theme.fontSize_24};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  color: ${({ theme }) => theme.colourTextPrimary};
  margin: ${({ margin }) => margin};
`;

export const OnBoradCardHead = styled(Paragraph)`
  line-height: 12px;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize_12};
  margin: ${({ margin }) => margin};
`;

export const OnBoradCardCenterLabel = styled(Paragraph)`
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  letter-spacing: 0.75px;
  font-size: ${({ theme }) => theme.fontSize_18};
  font-family: ${({ theme }) => theme.fontWorkSansMedium};

  &.disabled {
    opacity: 0.2;
  }
  &.on-board-step {
    height: unset;
    width: unset;
    display: unset;
    margin: 24px 0 0 0;
  }
`;

export const OnBoardDefaultLable = styled(Paragraph)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize_14};
  font-weight: ${({ theme }) => theme.fontWeight_400};
`;

export const TableHeaderHeadingWrapper = styled.div`
    color: ${({ theme }) => theme.colourTextPrimary};
    font-family : ${({ theme }) => theme.fontWorkSansMedium}
    font-size : ${({ theme }) => theme.fontSize_18}
`;

export const AnalyticPresent = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-style: "normal";
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const AnalyticPresenttrip = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-style: "normal";
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const StatisticName = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-style: "normal";
  font-size: 10px;
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const Statistic = styled(StatisticName)`
  letter-spacing: 0.75px;
  text-align: right;
`;

export const Chargingslotdetail = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colourTextPrimary};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
`;

export const ChatbarWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  position: sticky;
  bottom: 0px;
  left: 0px;
  padding: 0px 10px;

  > div:first-child {
    width: 85%;
  }
`;

export const ColorPickerHeadWrapper = styled.div`

    background: ${({ theme }) => theme.colourMaterialReversePrimary};
    padding:  14px 24px;
    font-family: ${({ theme }) => theme.fontWorkSansRegular}
    font-size: ${({ theme }) => theme.fontSize_14} 
    color: ${({ theme }) => theme.colourTextReversePrimary};
    border-radius : 8px;
`;

export const HeatMapFiltersHeaderWrapper = styled.div`
width: 100%
background: ${({ theme }) => theme.colourMaterialPrimary};
padding: 36px 24px 16px 24px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
display: inline-flex;
justify-content: space-between;
align-items: center;
font-family: ${({ theme }) => theme.fontWorkSansMedium};
font-size: ${({ theme }) => theme.fontSize_18};
color: ${({ theme }) => theme.colourTextPrimary};
border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export const LiveMapFiltersHeaderWrapper = styled(HeatMapFiltersHeaderWrapper)``;

export const LiveMapFiltersAdvanceFiltersHeaderWrapper = styled(HeatMapFiltersHeaderWrapper)`
  border: none;
  color: ${({ theme }) => theme.colourTextReversePrimary};
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
`;

export const VehicleMapFiltersHeaderWrapper = styled(HeatMapFiltersHeaderWrapper)``;

export const VehicleFiltersHeaderWrapper = styled(HeatMapFiltersHeaderWrapper)``;

export const FleetFiltersHeaderWrapper = styled(HeatMapFiltersHeaderWrapper)``;

export const GeofencingFiltersHeaderWrapper = styled(HeatMapFiltersHeaderWrapper)``;

export const AddChartDropdownHeaderWrapper = styled(GeofencingFiltersHeaderWrapper)``;

export const HeatMapFiltersSectionHeaderWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
  margin-bottom: 10px;
`;

export const LiveMapFiltersSectionHeaderWrapper = styled(HeatMapFiltersSectionHeaderWrapper)``;

export const LiveMapFiltersAdvanceFiltersSectionHeaderWrapper = styled(HeatMapFiltersSectionHeaderWrapper)`
  margin-bottom: 24px;
`;

export const VehicleMapFiltersSectionHeaderWrapper = styled(HeatMapFiltersSectionHeaderWrapper)``;

export const LiveMapFiltersAdvanceFiltersSectionlabelWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const LiveMapFiltersAdvanceFiltersSettingsSectionWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  color: ${({ theme }) => theme.colourTextReversePrimary};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  padding: 10px 24px;
  font-size: ${({ theme }) => theme.fontSize_14};
  font-weight: ${({ theme }) => theme.fontWeight_500};
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  > svg {
    cursor: pointer;
  }
`;

export const GeofencingFiltersSectionHeaderWrapper = styled.div`
  padding: 14px 24px;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_14};
  color-text: ${({ theme }) => theme.colourTextPrimary};
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export const Messagenew = styled.div`
  padding-left: 24px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const SmallButton = styled(SmallAddButton)`
  width: 108px;
  height: 47px;
  :hover {
    background: none;
  }
`;

export const RequiredTextWrapper = styled.div`
  color: ${({ theme }) => theme.colourTextSecondary};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
`;

export const HeatmapCellHoverHeaderHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const HeatmapCellHoverHeaderSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const HeatmapCellHoverSectionContentWrapper = styled(HeatmapCellHoverHeaderSubHeadingWrapper)`
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const StationHoverHeaderHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const StationHoverHeaderSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const StationHoverSectionHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextPrimary};
  display: inline-flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const StationHoverSectionSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const TripHoverHeaderHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const TripHoverHeaderSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const TripHoverSectionHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextPrimary};
  display: inline-flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
`;

export const TripHoverSectionSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const VehicleMarkerRiderDetailsHeaderHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const VehicleMarkerCompletedRideHeaderHeadingWrapper = styled(VehicleMarkerRiderDetailsHeaderHeadingWrapper)`
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const VehicleMarkerRiderDetailsHeaderSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextReversePrimary};
  margin-left: 5px;
`;

export const VehicleMarkerCompletedRideHeaderSubHeadingWrapper = styled(VehicleMarkerRiderDetailsHeaderSubHeadingWrapper)`
  color: ${({ theme }) => theme.colourTextSecondary};
  margin: 0px;
`;

export const VehicleMarkerRiderDetailsFlagContentHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const VehicleMarkerRiderDetailsTimingsHeadingWrapper = styled(VehicleMarkerRiderDetailsFlagContentHeadingWrapper)``;

export const VehicleMarkerVehicleDetailsFlagContentHeadingWrapper = styled(VehicleMarkerRiderDetailsFlagContentHeadingWrapper)``;

export const VehicleMarkerRiderDetailsTimingsTimeWrapper = styled(VehicleMarkerRiderDetailsTimingsHeadingWrapper)`
  margin-top: 5px;
  font-weight: ${({ theme }) => theme.fontWeight_400};
`;

export const VehicleMarkerRiderDetailsCurrentUserSectionHeadingWrapper = styled(VehicleMarkerRiderDetailsTimingsHeadingWrapper)``;

export const VehicleMarkerRiderDetailsCurrentUserSectionUsernameWrapper = styled(VehicleMarkerRiderDetailsTimingsTimeWrapper)``;

export const VehicleMarkerRiderDetailsVehicleCardSectionHeadingWrapper = styled(VehicleMarkerRiderDetailsTimingsHeadingWrapper)`
  margin-bottom: 5px;
`;

export const VehicleMarkerCompletedRideVehicleCardSectionHeadingWrapper = styled(VehicleMarkerRiderDetailsVehicleCardSectionHeadingWrapper)``;

export const VehicleMarkerCompletedRideRatingsHeadingWrapper = styled(VehicleMarkerCompletedRideVehicleCardSectionHeadingWrapper)``;

export const VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextPrimary};
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

export const VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const VehicleMarkerVehicleDetailsVehicleNumberSectionHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextPrimary};
  display: inline-flex;
  align-items: center;

  > div:last-child {
    margin-left: 10px;
    >span{
        width: 32px;
        height : 16px;
        margin-top: 0px;
    }
    >div{
        font-size: ${({ theme }) => theme.fontSize_10}
        top: 1px;
    }
  }
`;

export const ProgressPer = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize7_5};
  color: ${({ theme }) => theme.colourTextPrimary};
  letter-spacing: 0.075px;
  top: 5px;
`;

export const VehicleMarkerVehicleDetailsVehicleNumberSectionSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const VehicleMarkerVehicleDetailsTicketSectionHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const VehicleMarkerVehicleDetailsTicketSectionSubHeadingWrapper = styled(VehicleMarkerVehicleDetailsTicketSectionHeadingWrapper)`
  font-weight: ${({ theme }) => theme.fontWeight_400};
`;

export const VehicleMarkerVehicleDetailsConnectionSectionHeadingWrapper = styled(VehicleMarkerVehicleDetailsTicketSectionHeadingWrapper)``;

export const VehicleMarkerVehicleDetailsDetailsSectionHeadingWrapper = styled(VehicleMarkerVehicleDetailsConnectionSectionHeadingWrapper)``;

export const VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper = styled(VehicleMarkerVehicleDetailsTicketSectionSubHeadingWrapper)`
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const VehicleMarkerVehicleDetailsDetailsSectionContentWrapper = styled(VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper)``;

export const VehicleMarkerVehicleDetailsConnectionSectionTimingsContentWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const ZoneHoverHeaderHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const ZoneHoverHeaderSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextReversePrimary};
`;

export const ZoneHoverSectionHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_18};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const ZoneHoverSectionSubHeadingWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const MapDataLabel = styled.div`
  position: absolute;
  width: 66px;
  height: 19px;
  left: 70px;
  top: 15px;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_14};
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const LiveStatus = styled.div`
  position: absolute;
  width: 79px;
  height: 12px;
  left: 83px;
  top: 38px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const Warningtext = styled.div`
  letter-spacing: 0.75px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_12};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const PanelHeadertext = styled.div`
  letter-spacing: -0.25px;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_24};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const Paneltext = styled(Warningtext)`
  padding-left: 0px;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.fontSize_14};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const PaymentContentWrapper = styled.div`
    width: 296px;
    height: 172px;
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

export const CardHolderNameWrapper = styled.div`
    color: ${({ theme }) => theme.colourTextPrimary};
    font-family : ${({ theme }) => theme.fontWorkSansMedium}
    font-size : ${({ theme }) => theme.fontSize_18}
    margin-top : 60px;
`;

export const CardDetailsWrapper = styled.div`
width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_10}
    color: ${({ theme }) => theme.colourTextSecondary}
`;

export const Portboxnew = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-style: normal;
  width: 36px;
  font-size: ${({ theme }) => theme.fontSize_10};
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextDisabled};
`;

export const PortFree = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSons};
  font-size: ${({ theme }) => theme.fontSize_14};
  font-style: "normal";
  letter-spacing: 0.1px;
  font-weight: ${({ theme }) => theme.fontWeight_400};
  color: ${({ theme }) => theme.colourTextDisabled};
`;

export const Port1 = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-style: normal;
  width: 36px;
  font-size: ${({ theme }) => theme.fontSize_10};
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const PortVehicleName = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-style: "normal";
  font-size: ${({ theme }) => theme.fontSize_18};
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const ProgressPercent = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: -12px;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize7_5};
  font-style: "normal";
  color: ${({ theme }) => theme.colourTextPrimary};
  letter-spacing: ${({ theme }) => theme.letterSpacing_0dot075};
`;

export const Dockedat = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  font-style: "normal";
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const Dockedate = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_14};
  font-style: "normal";
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const Dockedby = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  font-style: "normal";
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const DockedbyName = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  font-style: "normal";
  letter-spacing: 0.1px;
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const RangeSliderMarkers = styled.div`
    color: ${({ theme }) => theme.colourTextSecondary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_10}
`;

export const RangeSliderLabelWrapper = styled(RangeSliderMarkers)`
  color: ${({ theme }) => theme.colourTextPrimary};
  font-size: ${({ theme }) => theme.fontSize14};
`;

export const HeatmapRangeSliderLabelWrapper = styled(RangeSliderLabelWrapper)`
  margin-bottom: 10px;

  font-size: ${({ theme }) => theme.fontSize_10};
`;

export const RichTextEditorHeaderWrapper = styled.div`
    font-family: ${({ theme }) => theme.fontWorkSansMedium}
    font-size: ${({ theme }) => theme.fontSize_18};
    color: ${({ theme }) => theme.colourTextPrimary};
`;

export const RichTextEditorComponentSubHeadingWrapper = styled.div`
font-family: ${({ theme }) => theme.fontWorkSansRegular}
font-size: ${({ theme }) => theme.fontSize_10};
color: ${({ theme }) => theme.colourTextPrimary};
`;

export const SectionHeaderHeadingWrapper = styled.div`
    color: ${({ theme }) => theme.colourTextPrimary}
    font-family : ${({ theme }) => theme.fontWorkSansMedium}
    font-size : ${({ theme }) => theme.fontSize_24}
    padding-top : 30px;
`;

export const SectionHeaderSubHeadingWrapper = styled.div`
    color: ${({ theme }) => theme.colourTextSecondary}
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_14}
    padding-top : 10px;
`;

export const HelpCenterMenuHeaderWrapper = styled.div`
  padding: 50px 20px 30px 20px;
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  color: ${({ theme }) => theme.colourTextReversePrimary};
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_24};
`;

export const HelpCenterMenuNavHeaderWrapper = styled(HelpCenterMenuHeaderWrapper)`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  color: ${({ theme }) => theme.colourTextPrimary};
  padding: 12px 20px;
  font-size: ${({ theme }) => theme.fontSize_12};
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export const HelpCenterMenuVersionWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
  padding: 20px;
  opacity: 0.5;
`;

export const TotalTripText = styled.div`
  gap: 0.75px;
  letter-spacing: 0.75px;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_12};
  color: ${({ theme }) => theme.colourTextSecondary};
  padding-right: 10px;
`;

export const TextNumber = styled.div`
  letter-spacing: -0.5px;
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  font-size: ${({ theme }) => theme.fontSize_30};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const TextLabel = styled(LabelContentWrapper)`
  svg {
    path {
      fill: ${({ theme }) => theme.colourTextSecondary};
    }
  }
`;

export const TableProgressPer = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextPrimary};
  letter-spacing: 0.75px;
`;

export const TableBodyContentWrapper = styled.div`   
color: ${({ theme }) => theme.colourTextPrimary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_14}
    display: inline-grid;
    Text-align : center;
    `;

export const TableBodySubContentWrapper = styled(TableBodyContentWrapper)`
  font-size: ${({ theme }) => theme.fontSize_10};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const TooltipWrapper = styled.div`
    padding: 10px 15px;
    background: ${({ theme }) => theme.colourMaterialReversePrimary};
    color: ${({ theme }) => theme.colourTextReversePrimary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize14}
    border-radius : 8px;
`;

export const UserTaskNotificationBannerHeadingWrapper = styled.div`
    color: ${({ theme }) => theme.colourTextPrimary};
    font-family : ${({ theme }) => theme.fontWorkSansMedium}
    font-size : ${({ theme }) => theme.fontSize_18}
    padding-top : 10px;
    padding-left : 10px;
`;

export const UserTaskNotificationBannerSubHeadingWrapper = styled.div`
    color: ${({ theme }) => theme.colourTextSecondary};
    font-family : ${({ theme }) => theme.fontWorkSansRegular}
    font-size : ${({ theme }) => theme.fontSize_14}
    padding-top : 10px;
    padding-left : 10px;
`;

export const TaskNumberWrapper = styled.div`
    font-family: ${({ theme }) => theme.fontWorkSansMedium}
    font-size: ${({ theme }) => theme.fontSize_18}
    color : ${({ theme }) => theme.colourTextReversePrimary}
`;

export const TaskTextWrapper = styled(TaskNumberWrapper)`
font-size: ${({ theme }) => theme.fontSize14}
font-weight : ${({ theme }) => theme.fontWeight_400}
`;

export const Live = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_10};
  font-style: "normal";
  color: ${({ theme }) => theme.colourTextSecondary};
  word-spacing: 5px;
  letter-spacing: 0.1px;
`;

// New statistic component

export const StatisticComponentHeadingTextWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize_12};
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  color: ${({ theme }) => theme.colourTextSecondary};
`;
export const StatisticComponentDetailsTextWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize_30};
  font-family: ${({ theme }) => theme.fontWorkSansMedium};
  color: ${({ theme }) => theme.colourTextPrimary};
`;

export const StatisticComponentCaptionTextWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize_10};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  color: ${({ theme }) => theme.colourTextSecondary};
`;

export const PaginationWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize_10};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
`;

export const PerPageWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize_10};
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  margin-left: 10px;
  line-height: 12px;
  width: 140px;
  height: 12px;
`;

// vehicle cards

export const VehicleName = styled.div`
  font-family: ${({ theme }) => theme.fontWorkSansRegular};
  font-size: ${({ theme }) => theme.fontSize_14};
  font-style: "normal";
  color: ${({ theme }) => theme.colourTextPrimary};
  letter-spacing: 0.1px;
`;
