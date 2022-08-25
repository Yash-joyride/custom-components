import React from "react";
import { Table_Container, Loading_Table_Container, Empty_Table_Container } from "../Table";

export default {
  title: "Joyride/Table/Table Container ",
  component: Table_Container,
};

export const TableContainer = () => <Table_Container />;
export const LoadingTableContainer = () => <Loading_Table_Container />;
export const EmptyTableContainer = () => <Empty_Table_Container />;
