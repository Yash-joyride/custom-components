import { SecondaryButton } from "../../Button/style";
import { ZoneHoverMainContainer, ZoneHoverContainer, ZoneHoverHeaderWrapper, ZoneHoverSectionWrapper } from "./style";
import { ZoneHoverHeaderHeadingWrapper, ZoneHoverHeaderSubHeadingWrapper, ZoneHoverSectionHeadingWrapper, ZoneHoverSectionSubHeadingWrapper } from "../../Typography/Paragraph";


export const ZoneHoverModal = ({
  children,
  zone,
  zoneName,
  parkingZone,
  fleetName,
  associatedFleet,
}) => {
  return (
    <ZoneHoverMainContainer>
      <ZoneHoverContainer>
        <ZoneHoverHeaderWrapper zone={zone}>
          <ZoneHoverHeaderHeadingWrapper>{zoneName}</ZoneHoverHeaderHeadingWrapper>
          <ZoneHoverHeaderSubHeadingWrapper>{parkingZone}</ZoneHoverHeaderSubHeadingWrapper>
        </ZoneHoverHeaderWrapper>
        <ZoneHoverSectionWrapper>
          <ZoneHoverSectionHeadingWrapper>{fleetName}</ZoneHoverSectionHeadingWrapper>
          <ZoneHoverSectionSubHeadingWrapper>{associatedFleet}</ZoneHoverSectionSubHeadingWrapper>
        </ZoneHoverSectionWrapper>
        <ZoneHoverSectionWrapper>
          <SecondaryButton>Edit Zone</SecondaryButton>
        </ZoneHoverSectionWrapper>
      </ZoneHoverContainer>
      {children}
    </ZoneHoverMainContainer>
  );
};

export const LockedZoneHoverModal = ({ children, zone, zoneName, parkingZone, fleetName, associatedFleet }) => {
  return (
    <ZoneHoverMainContainer>
      <ZoneHoverContainer>
        <ZoneHoverHeaderWrapper zone={zone}>
          <ZoneHoverHeaderHeadingWrapper>{zoneName}</ZoneHoverHeaderHeadingWrapper>
          <ZoneHoverHeaderSubHeadingWrapper>{parkingZone}</ZoneHoverHeaderSubHeadingWrapper>
        </ZoneHoverHeaderWrapper>
        <ZoneHoverSectionWrapper>
          <ZoneHoverSectionHeadingWrapper>{fleetName}</ZoneHoverSectionHeadingWrapper>
          <ZoneHoverSectionSubHeadingWrapper>{associatedFleet}</ZoneHoverSectionSubHeadingWrapper>
        </ZoneHoverSectionWrapper>
        <ZoneHoverSectionWrapper>
          <SecondaryButton>Details</SecondaryButton>
        </ZoneHoverSectionWrapper>
      </ZoneHoverContainer>
      {children}
    </ZoneHoverMainContainer>
  );
};
