import AddIcon from "../Icons/AddIcon";
import VisaIcon from "../Icons/VisaIcon";
import { AddPaymentMethodWrapper, VisaCardWrapper } from "./style";
import {
  PaymentContentWrapper,
  CardHolderNameWrapper,
  CardDetailsWrapper,
} from "../Typography/Paragraph";

export const AddPaymentMethod = () => {
  return (
    <AddPaymentMethodWrapper>
      <PaymentContentWrapper>
        <AddIcon />
        Change Payment Method
      </PaymentContentWrapper>
    </AddPaymentMethodWrapper>
  );
};

export const VisaCard = ({ cardHolderName, cardNumber, expireyDate }) => {
  return (
    <AddPaymentMethodWrapper>
      <VisaCardWrapper>
        <VisaIcon />
        <CardHolderNameWrapper>{cardHolderName}</CardHolderNameWrapper>

        <CardDetailsWrapper>
          <div>{cardNumber}</div>
          <div>{expireyDate}</div>
        </CardDetailsWrapper>
      </VisaCardWrapper>
    </AddPaymentMethodWrapper>
  );
};
