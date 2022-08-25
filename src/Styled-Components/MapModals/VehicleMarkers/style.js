import styled from "styled-components";

export const VehicleMarkerRiderDetailsWrapper = styled.div`
  width: 273px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
`;

export const VehicleMarkerRiderDetailsHeaderContainer = styled.div`
  position: relative;

  > div {
    > svg {
      position: absolute;
      top: 15px;
      right: 20px;
      cursor: pointer;
    }
  }
`;

export const VehicleMarkerRiderDetailsHeaderWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialReversePrimary};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding: 24px 20px 16px 24px;
`;

export const VehicleMarkerRiderDetailsHeaderSubHeadingConatainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

export const VehicleMarkerRiderDetailFlagSectionContainer = styled.div`
  display: flex;
`;

export const VehicleMarkerRiderDetailsFlagContentWrapper = styled.div`
  padding: 14px 39px 14px 24px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
`;

export const VehicleMarkerRiderDetailsFlagContentFlagIconsContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-radius: 4px;
`;

export const VehicleMarkerRiderDetailsFlagContentFlagIconsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px
  margin-top: 5px;

`;

export const VehicleMarkerRiderDetailsFlagContentQRWrapper = styled(
  VehicleMarkerRiderDetailsFlagContentWrapper
)`
  border-left: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  padding: 14px 24px;
  svg {
    width: 50px;
    height: 50px;
  }
`;

export const VehicleMarkerRiderDetailsTimingsWrapper = styled(
  VehicleMarkerRiderDetailsFlagContentWrapper
)`
  margin-top: 10px
  padding: 14px 24px;
`;

export const VehicleMarkerRiderDetailsVehicleCardSectionWrapper = styled(
  VehicleMarkerRiderDetailsTimingsWrapper
)`
  margin-top: 10px;

  > div:last-child {
    width: auto;
  }
`;

export const VehicleMarkerRiderDetailsCurrentUserSectionWrapper = styled(
  VehicleMarkerRiderDetailsTimingsWrapper
)``;

export const VehicleMarkerRiderDetailsCurrentEndSectionWrapper = styled(
  VehicleMarkerRiderDetailsTimingsWrapper
)`
  button {
    width: 100%;
    height: auto;
    padding: 9px 0px 9px;
  }
`;

// completed ride stylings

export const VehicleMarkerCompletedRideWrapper = styled(
  VehicleMarkerRiderDetailsWrapper
)``;

export const VehicleMarkerCompletedRideHeaderContainer = styled(
  VehicleMarkerRiderDetailsHeaderContainer
)`
  svg {
    path {
      fill: ${({ theme }) => theme.colourTextPrimary};
    }
  }
`;

export const VehicleMarkerCompletedRideHeaderWrapper = styled(
  VehicleMarkerRiderDetailsHeaderWrapper
)`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export const VehicleMarkerCompletedRideStatisticsSectionContainer = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px;
`;
export const VehicleMarkerCompletedRideStatisticsSectionWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 30px;
`;

export const VehicleMarkerCompletedRideStatisticsSectionContentWrapper = styled.div`
  display: inline-grid;
  gap: 5px;
`;

export const VehicleMarkerCompletedRideVehicleCardSectionWrapper = styled(
  VehicleMarkerRiderDetailsVehicleCardSectionWrapper
)``;

export const VehicleMarkerCompletedRideRatingsWrapper = styled.div`
  margin-top: 10px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px;
`;

export const VehicleMarkerCompletedRideRatingsStarWrapper = styled.div`
  svg {
    cursor: pointer;
  }
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

// vehicle details stylings

export const VehicleMarkerVehicleDetailsWrapper = styled(
  VehicleMarkerRiderDetailsWrapper
)``;

export const VehicleMarkerVehicleDetailsHeaderContainer = styled(
  VehicleMarkerRiderDetailsHeaderContainer
)``;
export const VehicleMarkerVehicleDetailsHeaderWrapper = styled(
  VehicleMarkerRiderDetailsHeaderWrapper
)``;

export const VehicleMarkerVehicleDetailsVehicleNumberSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 24px 16px 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;

export const VehicleMarkerVehicleDetailsFlagSectionContainer = styled(
  VehicleMarkerRiderDetailFlagSectionContainer
)``;

export const VehicleMarkerVehicleDetailsFlagContentWrapper = styled(
  VehicleMarkerRiderDetailsFlagContentWrapper
)``;

export const VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer = styled(
  VehicleMarkerRiderDetailsFlagContentFlagIconsContainer
)`
  border: none;
  background: ${({ theme }) => theme.colourBrandPrimary};
  > div {
    svg {
      > path {
        fill: ${({ theme }) => theme.colourTextReversePrimary};
        fill-opacity: 1;
      }
    }
  }
`;

export const VehicleMarkerVehicleDetailsFlagContentFlagIconsWrapper = styled(
  VehicleMarkerRiderDetailsFlagContentFlagIconsWrapper
)``;

export const VehicleMarkerVehicleDetailsFlagContentQRWrapper = styled(
  VehicleMarkerRiderDetailsFlagContentQRWrapper
)``;

export const VehicleMarkerVehicleDetailsTicketSectionWrapper = styled(
  VehicleMarkerCompletedRideRatingsWrapper
)``;

export const VehicleMarkerVehicleDetailsConnectionSectionWrapper = styled(
  VehicleMarkerVehicleDetailsTicketSectionWrapper
)``;

export const VehicleMarkerVehicleDetailsConnectionSectionTimingsContainer = styled.div`
  margin-top: 14px;
  display: inline-flex;
  gap: 14px;
`;

export const VehicleMarkerVehicleDetailsConnectionSectionTimingsWrapper = styled.div`
  display: inline-grid;
  gap: 5px;
`;

export const VehicleMarkerVehicleDetailsDetailsSectionWrapper = styled(
  VehicleMarkerVehicleDetailsConnectionSectionWrapper
)``;

export const VehicleMarkerVehicleDetailsDetailsSectionDetailsWrapper = styled.div`
  display: inline-grid;
  gap: 14px;
`;
export const VehicleMarkerVehicleDetailsDetailsSectionContentContainer = styled.div`
  display: inline-grid;
  gap: 5px;
`;

export const VehicleMarkerVehicleDetailsEditVehicleSectionWrapper = styled(
  VehicleMarkerRiderDetailsCurrentEndSectionWrapper
)``;
