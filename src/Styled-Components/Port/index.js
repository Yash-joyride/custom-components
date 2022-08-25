import React from "react";
import { Port } from "./style";
import { Portboxnew, PortFree } from "../Typography/Paragraph";

const Portnew = ({ portNumber, freePort }) => {
  return (
    <Port>
      <Portboxnew>{portNumber}</Portboxnew>
      <PortFree>{freePort}</PortFree>
    </Port>
  );
};
export default Portnew;
