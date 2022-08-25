import VehicleMarkerMaintananceWrapper from "../WrapperVehicleMarkerMaintainance";
import { MaintainanceIcon } from "../MaintananceIcon";
import VehicleMarkerIcon from "../VehicleMarkerIcon";
import IconWrapper from "../IconWrapper";

const VehicleMarkerMaintananceIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarkerMaintananceWrapper>
        <VehicleMarkerIcon value={value} />
        <MaintainanceIcon />
      </VehicleMarkerMaintananceWrapper>
    </IconWrapper>
  );
};

export default VehicleMarkerMaintananceIcon;
