import VehicleGroupContainer from "./VehicleGroupContainer";
import VehicleGroupNumberWrapper from "../WrapperVehicleGroupNumber/index";
import VehicleGroupWrapperIcon from "../WrapperVehicleGroupIcon";

const VehicleGroupIcon = () => {
  return (
    <VehicleGroupWrapperIcon>
      <VehicleGroupNumberWrapper>00</VehicleGroupNumberWrapper>
      <VehicleGroupContainer />
    </VehicleGroupWrapperIcon>
  );
};

export default VehicleGroupIcon;
