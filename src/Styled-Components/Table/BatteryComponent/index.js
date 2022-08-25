import { LinearProgress } from "@mui/material";
import { BatteryPercent } from "./Style";
import { TableProgressPer } from "../../Typography/Paragraph";

export const BatteryComponent = ({ battery }) => {
  return (
    <BatteryPercent>
      <LinearProgress variant="determinate" value={80} />
      <TableProgressPer>{battery}%</TableProgressPer>
    </BatteryPercent>
  );
};
