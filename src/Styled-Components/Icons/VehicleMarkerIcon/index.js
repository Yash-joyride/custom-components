import VehicleMarksWrapper from "../WrapperVehicleMarks";
import CircularProgressIcon from "../CircularProgressIcon";
import BicycleIcon from "../BicycleIcon";
import IconWrapper from "../IconWrapper";

const VehicleMarkerIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarksWrapper>
        {/* <CircularProgressIcon value={value} /> */}
        <BicycleIcon value={value} />
      </VehicleMarksWrapper>
    </IconWrapper>
  );
};

export default VehicleMarkerIcon;
