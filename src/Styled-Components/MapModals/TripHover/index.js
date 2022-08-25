import MapModalVehicleMarkerCrossIcon from "../../Icons/MapModalVehicleMarkerCrossIcon";
import MapModalTripHoverMapIcon from "../../Icons/MapModalTripHoverMapIcon";
import MapModalTripHoverWalletIcon from "../../Icons/MapModalTripHoverWalletIcon";
import { SecondaryButton } from "../../Button/style";
import {
  TripHoverContainer,
  TripHoverHeaderContainer,
  TripHoverHeaderWrapper,
  TripHoverSectionWrapper,
} from "./style";
import {
  TripHoverHeaderHeadingWrapper,
  TripHoverHeaderSubHeadingWrapper,
  TripHoverSectionHeadingWrapper,
  TripHoverSectionSubHeadingWrapper,
} from "../../Typography/Paragraph";

export const TripHoverModal = ({
  tripId,
  date,
  riderName,
  tripDistance,
  tripPayment,
}) => {
  return (
    <TripHoverContainer>
      <TripHoverHeaderContainer>
        <TripHoverHeaderWrapper>
          <TripHoverHeaderHeadingWrapper>
            Trip ID: {tripId}
          </TripHoverHeaderHeadingWrapper>
          <TripHoverHeaderSubHeadingWrapper>
            {date}
          </TripHoverHeaderSubHeadingWrapper>
        </TripHoverHeaderWrapper>
        <MapModalVehicleMarkerCrossIcon />
      </TripHoverHeaderContainer>
      <TripHoverSectionWrapper>
        <TripHoverSectionHeadingWrapper>
          {riderName}
        </TripHoverSectionHeadingWrapper>
        <TripHoverSectionSubHeadingWrapper>
          Rider
        </TripHoverSectionSubHeadingWrapper>
      </TripHoverSectionWrapper>
      <TripHoverSectionWrapper>
        <TripHoverSectionHeadingWrapper>
          {tripDistance}
          <MapModalTripHoverMapIcon />
        </TripHoverSectionHeadingWrapper>
        <TripHoverSectionSubHeadingWrapper>
          Trip Distance
        </TripHoverSectionSubHeadingWrapper>
      </TripHoverSectionWrapper>
      <TripHoverSectionWrapper>
        <TripHoverSectionHeadingWrapper>
          {tripPayment}
          <MapModalTripHoverWalletIcon />
        </TripHoverSectionHeadingWrapper>
        <TripHoverSectionSubHeadingWrapper>
          Trip Payment
        </TripHoverSectionSubHeadingWrapper>
      </TripHoverSectionWrapper>
      <TripHoverSectionWrapper>
        <SecondaryButton>Trip Details</SecondaryButton>
      </TripHoverSectionWrapper>
    </TripHoverContainer>
  );
};
