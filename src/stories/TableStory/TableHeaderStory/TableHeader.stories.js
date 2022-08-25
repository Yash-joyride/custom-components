import React from "react";
import { TableHeaderBordered, SmallTableHeaderBordered, NormalTableHeader, SmallNormalTableHeader, LockedTableHeaderBordered, SmallLockedTableHeaderBordered, LockedNormalTableHeader, SmallLockedNormalTableHeader } from "../Table";

export default {
  title: "Joyride/Table/Table Header ",
  component: TableHeaderBordered,
};

export const BorderTableHeader = () => <TableHeaderBordered text="ID" />;
export const SmallBorderTableHeader = () => <SmallTableHeaderBordered text="ID" />;
export const TableHeader = () => <NormalTableHeader text="ID" />;
export const SmallTableHeader = () => <SmallNormalTableHeader text="ID" />;
export const LockedBorderTableHeader = () => <LockedTableHeaderBordered text="ID" />;
export const SmallLockedBorderTableHeader = () => <SmallLockedTableHeaderBordered text="ID" />;
export const LockedTableHeader = () => <LockedNormalTableHeader text="ID" />;
export const SmallLockedTableHeader = () => <SmallLockedNormalTableHeader text="ID" />;
