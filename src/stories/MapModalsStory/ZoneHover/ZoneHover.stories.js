import React from "react";
import { Zone_Hover_Modal, Locked_Zone_Hover_Modal } from "../MapModals";
import theme from "../../../Globals/theme";
// import { ParkingIcon } from "../../../Styled-Components/Icons/ParkingIcon";
// import { ServiceIcon } from "../../../Styled-Components/Icons/ServiceIcon";
// import { SlowSpeedIcon } from "../../../Styled-Components/Icons/SlowSpeedIcon";
// import { RestrictedIcon } from "../../../Styled-Components/Icons/RestrictedIcon";
// import { CustomIcon } from "../../../Styled-Components/Icons/CustomIcon";
import {
  ParkingMapPin,
  ParkingLockMapPin,
  CustomMapPin,
  CustomLockMapPin,
  RestrictedMapPin,
  RestrictedLockMapPin,
  SlowSpeedMapPin,
  SlowSpeedLockMapPin,
  ServiceMapPin,
  ServiceLockMapPin,
} from "../../MapPinsStory/MapPin.stories";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Modals/ Zone Hover",
  component: Zone_Hover_Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ParkingZoneHoverModal = () => (
  <Zone_Hover_Modal
    zone={theme.Parking}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <ParkingMapPin />
  </Zone_Hover_Modal>
);
export const LockedParkingZoneHoverModal = () => (
  <Locked_Zone_Hover_Modal
    zone={theme.Parking}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <ParkingLockMapPin />
  </Locked_Zone_Hover_Modal>
);
export const RestrictedZoneHoverModal = () => (
  <Zone_Hover_Modal
    zone={theme.Restricted}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <RestrictedMapPin />
  </Zone_Hover_Modal>
);
export const LockedRestrictedZoneHoverModal = () => (
  <Locked_Zone_Hover_Modal
    zone={theme.Restricted}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <RestrictedLockMapPin />
  </Locked_Zone_Hover_Modal>
);
export const ServiceZoneHoverModal = () => (
  <Zone_Hover_Modal
    zone={theme.Service}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <ServiceMapPin />
  </Zone_Hover_Modal>
);
export const LockedServiceZoneHoverModal = () => (
  <Locked_Zone_Hover_Modal
    zone={theme.Service}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <ServiceLockMapPin />
  </Locked_Zone_Hover_Modal>
);
export const SlowSpeedZoneHoverModal = () => (
  <Zone_Hover_Modal
    zone={theme.SlowSpeed}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <SlowSpeedMapPin />
  </Zone_Hover_Modal>
);
export const LockedSlowSpeedZoneHoverModal = () => (
  <Locked_Zone_Hover_Modal
    zone={theme.SlowSpeed}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <SlowSpeedLockMapPin />
  </Locked_Zone_Hover_Modal>
);
export const CustomZoneHoverModal = () => (
  <Zone_Hover_Modal
    zone={theme.Custom}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <CustomMapPin />
  </Zone_Hover_Modal>
);
export const LockedCustomZoneHoverModal = () => (
  <Locked_Zone_Hover_Modal
    zone={theme.Custom}
    zoneName="Zone Name"
    parkingZone="Parking Zone"
    fleetName="Fleet Name"
    associatedFleet="Associated fleet"
  >
    <CustomLockMapPin />
  </Locked_Zone_Hover_Modal>
);
