import CheckboxComponent from "../../Checkbox";
import {
  BorderTableHeaderWrapper,
  TableHeaderWrapper,
  SmallBorderTableHeaderWrapper,
  SmallTableHeaderWrapper,
  TableHeaderTextWrapper,
} from "../style";
import InfoCircle from "../../Icons/InfoCircle";

const BorderTableHeader = ({ text }) => {
  return (
    <BorderTableHeaderWrapper>
      <CheckboxComponent />
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </BorderTableHeaderWrapper>
  );
};

const SmallBorderTableHeader = ({ text }) => {
  return (
    <SmallBorderTableHeaderWrapper>
      <CheckboxComponent />
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </SmallBorderTableHeaderWrapper>
  );
};

const TableHeader = ({ text }) => {
  return (
    <TableHeaderWrapper>
      <CheckboxComponent />
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </TableHeaderWrapper>
  );
};

const SmallTableHeader = ({ text }) => {
  return (
    <SmallTableHeaderWrapper>
      <CheckboxComponent />
      <TableHeaderTextWrapper>{text}</TableHeaderTextWrapper>
    </SmallTableHeaderWrapper>
  );
};

const BorderLockedTableHeader = ({ text }) => {
  return (
    <BorderTableHeaderWrapper>
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </BorderTableHeaderWrapper>
  );
};

const SmallLockedBorderTableHeader = ({ text }) => {
  return (
    <SmallBorderTableHeaderWrapper>
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </SmallBorderTableHeaderWrapper>
  );
};

const LockedTableHeader = ({ text }) => {
  return (
    <TableHeaderWrapper>
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </TableHeaderWrapper>
  );
};

const SmallLockedTableHeader = ({ text }) => {
  return (
    <SmallTableHeaderWrapper>
      <TableHeaderTextWrapper>
        {text}
        <InfoCircle />
      </TableHeaderTextWrapper>
    </SmallTableHeaderWrapper>
  );
};

export {
  BorderTableHeader,
  SmallBorderTableHeader,
  TableHeader,
  SmallTableHeader,
  BorderLockedTableHeader,
  SmallLockedBorderTableHeader,
  LockedTableHeader,
  SmallLockedTableHeader,
};
