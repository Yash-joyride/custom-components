import VehicleMarkerAgencyPickupWrapper from "../WrapperVehicleMarkerAgencyPickup";
import { AgencyPickupIcon } from "../AgencyPickupIcon";
import VehicleMarkerIcon from "../VehicleMarkerIcon";
import IconWrapper from "../IconWrapper";

const VehicleMarkerAgencyPickupIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarkerAgencyPickupWrapper>
        <VehicleMarkerIcon value={value} />
        <AgencyPickupIcon />
      </VehicleMarkerAgencyPickupWrapper>
    </IconWrapper>
  );
};

export default VehicleMarkerAgencyPickupIcon;
