import MapModalStationHoverGasPumpIcon from "../../Icons/MapModalStationHoverGasPumpIcon";
import MapModalStationHoverBicycleIcon from "../../Icons/MapModalStationHoverBicycleIcon";
import ChargingStationIcon from "../../Icons/Charging-station";
import { SecondaryButton } from "../../Button/style";
import {
  StationHoverMainContainer,
  StationHoverContainer,
  StationHoverHeaderWrapper,
  StationHoverSectionWrapper,
} from "./style";
import {
  StationHoverHeaderHeadingWrapper,
  StationHoverHeaderSubHeadingWrapper,
  StationHoverSectionHeadingWrapper,
  StationHoverSectionSubHeadingWrapper,
} from "../../Typography/Paragraph";

export const StationHoverModal = ({
  stationName,
  labelName,
  vehiclesAvailable,
  portsAvailable,
}) => {
  return (
    <StationHoverMainContainer>
      <StationHoverContainer>
        <StationHoverHeaderWrapper>
          <StationHoverHeaderHeadingWrapper>
            {stationName}
          </StationHoverHeaderHeadingWrapper>
          <StationHoverHeaderSubHeadingWrapper>
            {labelName}
          </StationHoverHeaderSubHeadingWrapper>
        </StationHoverHeaderWrapper>
        <StationHoverSectionWrapper>
          <StationHoverSectionHeadingWrapper>
            {vehiclesAvailable}
            <MapModalStationHoverBicycleIcon />
          </StationHoverSectionHeadingWrapper>
          <StationHoverSectionSubHeadingWrapper>
            Vehicles Available
          </StationHoverSectionSubHeadingWrapper>
        </StationHoverSectionWrapper>
        <StationHoverSectionWrapper>
          <StationHoverSectionHeadingWrapper>
            {portsAvailable}
            <MapModalStationHoverGasPumpIcon />
          </StationHoverSectionHeadingWrapper>
          <StationHoverSectionSubHeadingWrapper>
            Ports Available
          </StationHoverSectionSubHeadingWrapper>
        </StationHoverSectionWrapper>
        <StationHoverSectionWrapper>
          <SecondaryButton>Station Details</SecondaryButton>
        </StationHoverSectionWrapper>
      </StationHoverContainer>
      <ChargingStationIcon />
    </StationHoverMainContainer>
  );
};
