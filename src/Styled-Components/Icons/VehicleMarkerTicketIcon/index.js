import VehicleMarkerTicketWrapper from "../WrapperVehicleMarkerTicket";
import VehicleMarkerIcon from "../VehicleMarkerIcon";
import TicketIcon from "../TicketIcon";
import IconWrapper from "../IconWrapper";

const VehicleMarkerTicketIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarkerTicketWrapper>
        <VehicleMarkerIcon value={value} />
        <TicketIcon />
      </VehicleMarkerTicketWrapper>
    </IconWrapper>
  );
};

export default VehicleMarkerTicketIcon;
