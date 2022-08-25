import { Fragment, useState } from "react";
import { LinearProgress } from "@mui/material";
import { indexOf } from "lodash";
import VehicleCards from "../../VehicleCard";
import { SecondaryButton } from "../../Button/style";
import MapModalVehicleMarkerCrossIcon from "../../Icons/MapModalVehicleMarkerCrossIcon";
import MapModalVehicleMarkerKeyIcon from "../../Icons/MapModalVehicleMarkerFlagKeyIcon";
import MapModalVehicleMarkerLockOpenIcon from "../../Icons/MapModalVehicleMarkerLockOpenIcon";
import MapModalVehicleMarkerUserIcon from "../../Icons/MapModalVehicleMarkerUserIcon";
import MapModalVehicleMarkerFlagIcon from "../../Icons/MapModalVehicleMarkerFlagIcon";
import MapModalVehicleMarkerDollarIcon from "../../Icons/MapModalVehicleMarkerDollarIcon";
import MapModalVehicleMarkerRouteIcon from "../../Icons/MapModalVehicleMarkerRouteIcon";
import MapModalVehicleMarkerRatingStarIcon from "../../Icons/MapModalVehicleMarkerRatingStarIcon";
import MapModalVehicleMarkerFilledRatingStarIcon from "../../Icons/MapModalVehicleMarkerFilledRatingStarIcon";
import TripLiveIcon from "../../Icons/TripLiveIcon";
import QRCodeIcon from "../../Icons/QRCodeIcon";
import { BatteryPercent } from "../../VehicleCard/style";
import {
  VehicleMarkerRiderDetailsWrapper,
  VehicleMarkerRiderDetailsHeaderContainer,
  VehicleMarkerRiderDetailsHeaderWrapper,
  VehicleMarkerRiderDetailsHeaderSubHeadingConatainer,
  VehicleMarkerRiderDetailFlagSectionContainer,
  VehicleMarkerRiderDetailsFlagContentWrapper,
  VehicleMarkerRiderDetailsFlagContentFlagIconsContainer,
  VehicleMarkerRiderDetailsFlagContentFlagIconsWrapper,
  VehicleMarkerRiderDetailsFlagContentQRWrapper,
  VehicleMarkerRiderDetailsTimingsWrapper,
  VehicleMarkerRiderDetailsVehicleCardSectionWrapper,
  VehicleMarkerRiderDetailsCurrentUserSectionWrapper,
  VehicleMarkerRiderDetailsCurrentEndSectionWrapper,
  VehicleMarkerCompletedRideWrapper,
  VehicleMarkerCompletedRideHeaderContainer,
  VehicleMarkerCompletedRideHeaderWrapper,
  VehicleMarkerCompletedRideStatisticsSectionContainer,
  VehicleMarkerCompletedRideStatisticsSectionWrapper,
  VehicleMarkerCompletedRideStatisticsSectionContentWrapper,
  VehicleMarkerCompletedRideVehicleCardSectionWrapper,
  VehicleMarkerCompletedRideRatingsWrapper,
  VehicleMarkerCompletedRideRatingsStarWrapper,
  VehicleMarkerVehicleDetailsWrapper,
  VehicleMarkerVehicleDetailsHeaderContainer,
  VehicleMarkerVehicleDetailsHeaderWrapper,
  VehicleMarkerVehicleDetailsVehicleNumberSectionWrapper,
  VehicleMarkerVehicleDetailsFlagSectionContainer,
  VehicleMarkerVehicleDetailsFlagContentWrapper,
  VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer,
  VehicleMarkerVehicleDetailsFlagContentFlagIconsWrapper,
  VehicleMarkerVehicleDetailsFlagContentQRWrapper,
  VehicleMarkerVehicleDetailsTicketSectionWrapper,
  VehicleMarkerVehicleDetailsConnectionSectionWrapper,
  VehicleMarkerVehicleDetailsConnectionSectionTimingsContainer,
  VehicleMarkerVehicleDetailsConnectionSectionTimingsWrapper,
  VehicleMarkerVehicleDetailsDetailsSectionWrapper,
  VehicleMarkerVehicleDetailsDetailsSectionDetailsWrapper,
  VehicleMarkerVehicleDetailsDetailsSectionContentContainer,
  VehicleMarkerVehicleDetailsEditVehicleSectionWrapper,
} from "./style";
import {
  VehicleMarkerRiderDetailsHeaderHeadingWrapper,
  VehicleMarkerCompletedRideHeaderHeadingWrapper,
  VehicleMarkerRiderDetailsHeaderSubHeadingWrapper,
  VehicleMarkerCompletedRideHeaderSubHeadingWrapper,
  VehicleMarkerRiderDetailsFlagContentHeadingWrapper,
  VehicleMarkerRiderDetailsTimingsHeadingWrapper,
  VehicleMarkerVehicleDetailsFlagContentHeadingWrapper,
  VehicleMarkerRiderDetailsTimingsTimeWrapper,
  VehicleMarkerRiderDetailsCurrentUserSectionHeadingWrapper,
  VehicleMarkerRiderDetailsCurrentUserSectionUsernameWrapper,
  VehicleMarkerRiderDetailsVehicleCardSectionHeadingWrapper,
  VehicleMarkerCompletedRideVehicleCardSectionHeadingWrapper,
  VehicleMarkerCompletedRideRatingsHeadingWrapper,
  VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper,
  VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper,
  VehicleMarkerVehicleDetailsVehicleNumberSectionHeadingWrapper,
  VehicleMarkerVehicleDetailsVehicleNumberSectionSubHeadingWrapper,
  VehicleMarkerVehicleDetailsTicketSectionHeadingWrapper,
  VehicleMarkerVehicleDetailsTicketSectionSubHeadingWrapper,
  VehicleMarkerVehicleDetailsConnectionSectionHeadingWrapper,
  VehicleMarkerVehicleDetailsDetailsSectionHeadingWrapper,
  VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper,
  VehicleMarkerVehicleDetailsDetailsSectionContentWrapper,
  VehicleMarkerVehicleDetailsConnectionSectionTimingsContentWrapper,
  ProgressPer,
} from "../../Typography/Paragraph";

const ratingArray = [1, 2, 3, 4, 5];

export const VehicleMarkerRiderDetails = ({
  riderNameTrip,
  status,
  startTime,
  name,
}) => {
  return (
    <VehicleMarkerRiderDetailsWrapper>
      <VehicleMarkerRiderDetailsHeaderContainer>
        <VehicleMarkerRiderDetailsHeaderWrapper>
          <VehicleMarkerRiderDetailsHeaderHeadingWrapper>
            {riderNameTrip}
          </VehicleMarkerRiderDetailsHeaderHeadingWrapper>
          <VehicleMarkerRiderDetailsHeaderSubHeadingConatainer>
            <TripLiveIcon />
            <VehicleMarkerRiderDetailsHeaderSubHeadingWrapper>
              {status}
            </VehicleMarkerRiderDetailsHeaderSubHeadingWrapper>
          </VehicleMarkerRiderDetailsHeaderSubHeadingConatainer>
        </VehicleMarkerRiderDetailsHeaderWrapper>
        <MapModalVehicleMarkerCrossIcon />
      </VehicleMarkerRiderDetailsHeaderContainer>
      <VehicleMarkerRiderDetailFlagSectionContainer>
        <VehicleMarkerRiderDetailsFlagContentWrapper>
          <VehicleMarkerRiderDetailsFlagContentHeadingWrapper>
            Flags
          </VehicleMarkerRiderDetailsFlagContentHeadingWrapper>
          <VehicleMarkerRiderDetailsFlagContentFlagIconsWrapper>
            <VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerKeyIcon />
            </VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
            <VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerLockOpenIcon />
            </VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
            <VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerUserIcon />
            </VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
            <VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerFlagIcon />
            </VehicleMarkerRiderDetailsFlagContentFlagIconsContainer>
          </VehicleMarkerRiderDetailsFlagContentFlagIconsWrapper>
        </VehicleMarkerRiderDetailsFlagContentWrapper>
        <VehicleMarkerRiderDetailsFlagContentQRWrapper>
          <QRCodeIcon />
        </VehicleMarkerRiderDetailsFlagContentQRWrapper>
      </VehicleMarkerRiderDetailFlagSectionContainer>
      <VehicleMarkerRiderDetailsTimingsWrapper>
        <VehicleMarkerRiderDetailsTimingsHeadingWrapper>
          Start Time
        </VehicleMarkerRiderDetailsTimingsHeadingWrapper>
        <VehicleMarkerRiderDetailsTimingsTimeWrapper>
          {startTime}
        </VehicleMarkerRiderDetailsTimingsTimeWrapper>
      </VehicleMarkerRiderDetailsTimingsWrapper>
      <VehicleMarkerRiderDetailsVehicleCardSectionWrapper>
        <VehicleMarkerRiderDetailsVehicleCardSectionHeadingWrapper>
          Vehicle
        </VehicleMarkerRiderDetailsVehicleCardSectionHeadingWrapper>
        <VehicleCards
          progress={80}
          vehicleName="Vehicle Name"
          status="Live"
          ticketNumber="1"
        />
      </VehicleMarkerRiderDetailsVehicleCardSectionWrapper>
      <VehicleMarkerRiderDetailsCurrentUserSectionWrapper>
        <VehicleMarkerRiderDetailsCurrentUserSectionHeadingWrapper>
          Current Rider
        </VehicleMarkerRiderDetailsCurrentUserSectionHeadingWrapper>
        <VehicleMarkerRiderDetailsCurrentUserSectionUsernameWrapper>
          {name}
        </VehicleMarkerRiderDetailsCurrentUserSectionUsernameWrapper>
      </VehicleMarkerRiderDetailsCurrentUserSectionWrapper>
      <VehicleMarkerRiderDetailsCurrentEndSectionWrapper>
        <SecondaryButton>End Trip</SecondaryButton>
      </VehicleMarkerRiderDetailsCurrentEndSectionWrapper>
    </VehicleMarkerRiderDetailsWrapper>
  );
};

export const VehicleMarkerCompletedRide = ({
  riderNameTrip,
  status,
  price,
  distance,
  pause,
  name,
}) => {
  const [starFilled, setStarFilled] = useState([]);

  const isSelected = (ids, id) => indexOf(ids, id) >= 0;

  const onRate = (r) => () => {
    const starRate = [];
    for (let index = r; index > 0; index--) {
      starRate.push(index);
    }
    setStarFilled(starRate);
  };

  return (
    <VehicleMarkerCompletedRideWrapper>
      <VehicleMarkerCompletedRideHeaderContainer>
        <VehicleMarkerCompletedRideHeaderWrapper>
          <VehicleMarkerCompletedRideHeaderHeadingWrapper>
            {riderNameTrip}
          </VehicleMarkerCompletedRideHeaderHeadingWrapper>
          <VehicleMarkerCompletedRideHeaderSubHeadingWrapper>
            {status}
          </VehicleMarkerCompletedRideHeaderSubHeadingWrapper>
        </VehicleMarkerCompletedRideHeaderWrapper>
        <MapModalVehicleMarkerCrossIcon />
      </VehicleMarkerCompletedRideHeaderContainer>
      <VehicleMarkerCompletedRideStatisticsSectionContainer>
        <VehicleMarkerCompletedRideStatisticsSectionWrapper>
          <VehicleMarkerCompletedRideStatisticsSectionContentWrapper>
            <VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper>
              {price}
              <MapModalVehicleMarkerDollarIcon />
            </VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper>
            <VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper>
              (CAD)
            </VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper>
          </VehicleMarkerCompletedRideStatisticsSectionContentWrapper>
          <VehicleMarkerCompletedRideStatisticsSectionContentWrapper>
            <VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper>
              {distance}
              <MapModalVehicleMarkerRouteIcon />
            </VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper>
            <VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper>
              Dist. (KM)
            </VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper>
          </VehicleMarkerCompletedRideStatisticsSectionContentWrapper>
          <VehicleMarkerCompletedRideStatisticsSectionContentWrapper>
            <VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper>
              {pause}
              <MapModalVehicleMarkerRouteIcon />
            </VehicleMarkerCompletedRideStatisticsSectionContentValueWrapper>
            <VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper>
              Pause (KM)
            </VehicleMarkerCompletedRideStatisticsSectionContentTextWrapper>
          </VehicleMarkerCompletedRideStatisticsSectionContentWrapper>
        </VehicleMarkerCompletedRideStatisticsSectionWrapper>
      </VehicleMarkerCompletedRideStatisticsSectionContainer>
      <VehicleMarkerCompletedRideVehicleCardSectionWrapper>
        <VehicleMarkerCompletedRideVehicleCardSectionHeadingWrapper>
          Vehicle
        </VehicleMarkerCompletedRideVehicleCardSectionHeadingWrapper>
        <VehicleCards
          progress={80}
          vehicleName="Vehicle Name"
          status="Live"
          ticketNumber="1"
        />
      </VehicleMarkerCompletedRideVehicleCardSectionWrapper>
      <VehicleMarkerCompletedRideRatingsWrapper>
        <VehicleMarkerCompletedRideRatingsHeadingWrapper>
          Rating
        </VehicleMarkerCompletedRideRatingsHeadingWrapper>
        <VehicleMarkerCompletedRideRatingsStarWrapper>
          {ratingArray.map((r) => (
            <Fragment>
              {isSelected(starFilled, r) ? (
                <MapModalVehicleMarkerFilledRatingStarIcon
                  onClick={onRate(r)}
                />
              ) : (
                <MapModalVehicleMarkerRatingStarIcon onClick={onRate(r)} />
              )}
            </Fragment>
          ))}
        </VehicleMarkerCompletedRideRatingsStarWrapper>
      </VehicleMarkerCompletedRideRatingsWrapper>
      <VehicleMarkerRiderDetailsCurrentUserSectionWrapper>
        <VehicleMarkerRiderDetailsCurrentUserSectionHeadingWrapper>
          Rider
        </VehicleMarkerRiderDetailsCurrentUserSectionHeadingWrapper>
        <VehicleMarkerRiderDetailsCurrentUserSectionUsernameWrapper>
          {name}
        </VehicleMarkerRiderDetailsCurrentUserSectionUsernameWrapper>
      </VehicleMarkerRiderDetailsCurrentUserSectionWrapper>
    </VehicleMarkerCompletedRideWrapper>
  );
};

export const VehicleMarkerVehicleDetails = ({
  vehicleNumber,
  tickets,
  status,
  lastRideTime,
  lastLockStatus,
  imei,
  vehicleNum,
  distance,
  kilometer,
  qrCode,
  registeredDate,
  battery,
}) => {
  return (
    <VehicleMarkerVehicleDetailsWrapper>
      <VehicleMarkerVehicleDetailsHeaderContainer>
        <VehicleMarkerVehicleDetailsHeaderWrapper />
        <MapModalVehicleMarkerCrossIcon />
      </VehicleMarkerVehicleDetailsHeaderContainer>
      <VehicleMarkerVehicleDetailsVehicleNumberSectionWrapper>
        <VehicleMarkerVehicleDetailsVehicleNumberSectionHeadingWrapper>
          {vehicleNumber}
          <BatteryPercent>
            <LinearProgress variant="determinate" value={battery} />
            <ProgressPer>{battery}%</ProgressPer>
          </BatteryPercent>
        </VehicleMarkerVehicleDetailsVehicleNumberSectionHeadingWrapper>
        <VehicleMarkerVehicleDetailsVehicleNumberSectionSubHeadingWrapper>
          ogb1-iot
        </VehicleMarkerVehicleDetailsVehicleNumberSectionSubHeadingWrapper>
      </VehicleMarkerVehicleDetailsVehicleNumberSectionWrapper>
      <VehicleMarkerVehicleDetailsFlagSectionContainer>
        <VehicleMarkerVehicleDetailsFlagContentWrapper>
          <VehicleMarkerVehicleDetailsFlagContentHeadingWrapper>
            Flags
          </VehicleMarkerVehicleDetailsFlagContentHeadingWrapper>
          <VehicleMarkerVehicleDetailsFlagContentFlagIconsWrapper>
            <VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerKeyIcon />
            </VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
            <VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerLockOpenIcon />
            </VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
            <VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerUserIcon />
            </VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
            <VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
              <MapModalVehicleMarkerFlagIcon />
            </VehicleMarkerVehicleDetailsFlagContentFlagIconsContainer>
          </VehicleMarkerVehicleDetailsFlagContentFlagIconsWrapper>
        </VehicleMarkerVehicleDetailsFlagContentWrapper>
        <VehicleMarkerVehicleDetailsFlagContentQRWrapper>
          <QRCodeIcon />
        </VehicleMarkerVehicleDetailsFlagContentQRWrapper>
      </VehicleMarkerVehicleDetailsFlagSectionContainer>
      <VehicleMarkerVehicleDetailsTicketSectionWrapper>
        <VehicleMarkerVehicleDetailsTicketSectionHeadingWrapper>
          Open Tickets
        </VehicleMarkerVehicleDetailsTicketSectionHeadingWrapper>
        <VehicleMarkerVehicleDetailsTicketSectionSubHeadingWrapper>
          {tickets}
        </VehicleMarkerVehicleDetailsTicketSectionSubHeadingWrapper>
      </VehicleMarkerVehicleDetailsTicketSectionWrapper>
      <VehicleMarkerVehicleDetailsConnectionSectionWrapper>
        <VehicleMarkerVehicleDetailsConnectionSectionHeadingWrapper>
          {status}
        </VehicleMarkerVehicleDetailsConnectionSectionHeadingWrapper>
        <VehicleMarkerVehicleDetailsConnectionSectionTimingsContainer>
          <VehicleMarkerVehicleDetailsConnectionSectionTimingsWrapper>
            <VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper>
              Last Ride Time
            </VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper>
            <VehicleMarkerVehicleDetailsConnectionSectionTimingsContentWrapper>
              {lastRideTime}
            </VehicleMarkerVehicleDetailsConnectionSectionTimingsContentWrapper>
          </VehicleMarkerVehicleDetailsConnectionSectionTimingsWrapper>
          <VehicleMarkerVehicleDetailsConnectionSectionTimingsWrapper>
            <VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper>
              Last Lock Status
            </VehicleMarkerVehicleDetailsConnectionSectionTimingsHeadingWrapper>
            <VehicleMarkerVehicleDetailsConnectionSectionTimingsContentWrapper>
              {lastLockStatus}
            </VehicleMarkerVehicleDetailsConnectionSectionTimingsContentWrapper>
          </VehicleMarkerVehicleDetailsConnectionSectionTimingsWrapper>
        </VehicleMarkerVehicleDetailsConnectionSectionTimingsContainer>
      </VehicleMarkerVehicleDetailsConnectionSectionWrapper>
      <VehicleMarkerVehicleDetailsDetailsSectionWrapper>
        <VehicleMarkerVehicleDetailsDetailsSectionHeadingWrapper>
          Details
        </VehicleMarkerVehicleDetailsDetailsSectionHeadingWrapper>
        <VehicleMarkerVehicleDetailsDetailsSectionDetailsWrapper>
          <VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              Vehicle SN
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              {vehicleNum}
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
          </VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
          <VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              IMEI
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              {imei}
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
          </VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
          <VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              {distance}
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              {kilometer}
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
          </VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
          <VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              QR Code
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              {qrCode}
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
          </VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
          <VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              Registered Date
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
            <VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
              {registeredDate}
            </VehicleMarkerVehicleDetailsDetailsSectionContentWrapper>
          </VehicleMarkerVehicleDetailsDetailsSectionContentContainer>
        </VehicleMarkerVehicleDetailsDetailsSectionDetailsWrapper>
      </VehicleMarkerVehicleDetailsDetailsSectionWrapper>
      <VehicleMarkerVehicleDetailsEditVehicleSectionWrapper>
        <SecondaryButton>Edit Vehicle</SecondaryButton>
      </VehicleMarkerVehicleDetailsEditVehicleSectionWrapper>
    </VehicleMarkerVehicleDetailsWrapper>
  );
};
