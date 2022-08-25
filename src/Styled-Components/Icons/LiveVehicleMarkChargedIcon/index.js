import VehicleMarksWrapper from "../WrapperVehicleMarks";
import CircularProgressIcon from "../CircularProgressIcon";
import BikeIcon from "../BikeIcon";
import IconWrapper from "../IconWrapper";

const LiveVehicleMarkIcon = ({ value }) => {
  return (
    <IconWrapper>
      <VehicleMarksWrapper>
        <BikeIcon value={value} />
      </VehicleMarksWrapper>
    </IconWrapper>
  );
};

export default LiveVehicleMarkIcon;
