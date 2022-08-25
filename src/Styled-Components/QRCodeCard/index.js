import { Button } from "@mui/material";
import { QRCodeCardWrapper, QRCodeCardTextWrapper } from "./style";
import QRCodeIcon from "../Icons/QRCodeIcon";
import CopyIcon from "../Icons/CopyIcon";

const QRCodeCard = ({ code }) => {
  return (
    <QRCodeCardWrapper>
      <QRCodeIcon />
      <QRCodeCardTextWrapper>{code}</QRCodeCardTextWrapper>
      <Button>
        <CopyIcon />
        Copy
      </Button>
    </QRCodeCardWrapper>
  );
};

export { QRCodeCard };
