import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { SectionHeaderWrapper } from "./style";
import PaginationIcon from "../Icons/PaginationIcon";
import {
  SectionHeaderHeadingWrapper,
  SectionHeaderSubHeadingWrapper,
} from "../Typography/Paragraph";

const SectionHeader = ({ fleet, fleetDetail, fleetName, manageFleet }) => {
  const breadcrumbs = [
    <Link underline="none" key="1" href="/">
      {fleet}
    </Link>,
    <Typography underline="none" aria-current="page">
      {fleetDetail}
    </Typography>,
  ];
  return (
    <SectionHeaderWrapper>
      <Stack spacing={2}>
        <Breadcrumbs separator={<PaginationIcon />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <SectionHeaderHeadingWrapper>{fleetName}</SectionHeaderHeadingWrapper>
      <SectionHeaderSubHeadingWrapper>
        {manageFleet}
      </SectionHeaderSubHeadingWrapper>
    </SectionHeaderWrapper>
  );
};
export default SectionHeader;
