import { CardCheckboxWrapper } from "./style";
import CheckboxComponent from "../../Checkbox";
import VehicleCards from "../../VehicleCard";

export const CardCheckboxComponent = () => {
  return (
    <CardCheckboxWrapper>
      <CheckboxComponent />
      <VehicleCards
        progress={80}
        vehicleName="Vehicle Name"
        status="Live"
        ticketNumber="1"
      />
    </CardCheckboxWrapper>
  );
};
