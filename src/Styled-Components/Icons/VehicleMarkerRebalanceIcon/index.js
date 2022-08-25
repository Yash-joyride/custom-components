import VehicleMarkerRebalanceWrapper from "../WrapperVehicleMarkerRebalance";
import VehicleMarkerIcon from "../VehicleMarkerIcon";
import { RebalanceIcon } from "../RebalanceIcon";
import IconWrapper from "../IconWrapper";

const VehicleMarkerRebalanceIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarkerRebalanceWrapper>
        <VehicleMarkerIcon value={value} />
        <RebalanceIcon />
      </VehicleMarkerRebalanceWrapper>
    </IconWrapper>
  );
};

export default VehicleMarkerRebalanceIcon;
