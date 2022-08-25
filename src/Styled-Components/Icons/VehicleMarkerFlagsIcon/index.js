import VehicleMarkerFlagsWrapper from "../WrapperVehicleMarkerFlags";
import VehicleMarkerIcon from "../VehicleMarkerIcon";
import FlagIcon from "../FlagIcon";
import IconWrapper from "../IconWrapper";

const VehicleMarkerFlagsIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarkerFlagsWrapper>
        <VehicleMarkerIcon value={value} />
        <FlagIcon />
      </VehicleMarkerFlagsWrapper>
    </IconWrapper>
  );
};

export default VehicleMarkerFlagsIcon;
