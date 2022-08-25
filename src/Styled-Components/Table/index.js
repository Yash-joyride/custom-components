import {
  TableHeadingWrapper,
  FilterWrapper,
  TableWrapper,
  FilterContainer,
  TableTableWrapper,
  TableBodyWrapper,
  TableBodyContentIconWrapper,
  TablePaginationWrapper,
} from "./style";

import {
  TableHeaderHeadingWrapper,
  TableBodyContentWrapper,
  TableBodySubContentWrapper,
  PaginationWrapper,
  PerPageWrapper,
} from "../Typography/Paragraph";
import { SmallTableHeader, LockedTableHeader } from "./TableHeaders";
import { SecondaryButton } from "../Button/style";
import TableDropdown from "./TableDropdown";
import { SearchField } from "../SearchField";
import {
  TableCellColour,
  TableCellLockedAction,
  TableCellLockedActiveTag,
  TableCellLockedGeoZone,
  TableCellLockedVehicleName,
  TableCellVehicleName,
} from "./TableCell";
import { TableItems, TableHeaderItems } from "./constant";
import Pagination from "@mui/material/Pagination";
import LoadingCircle from "../Icons/LoadingCircle";
import EmptyTableIcon from "../Icons/EmptyTableIcon";

const TableContainer = () => {
  return (
    <TableWrapper>
      <TableHeadingWrapper>
        <TableHeaderHeadingWrapper>Table Header</TableHeaderHeadingWrapper>
        <div>
          <SecondaryButton>Action</SecondaryButton>
          <SecondaryButton>Action</SecondaryButton>
          <SecondaryButton>Action</SecondaryButton>
        </div>
      </TableHeadingWrapper>
      <FilterContainer>
        <PaginationWrapper>Showing Results 0-5 of 5 Results</PaginationWrapper>
        <FilterWrapper>
          <TableDropdown />
          <PerPageWrapper>Results per page</PerPageWrapper>
          <SearchField placeholder="Search Table..." />
        </FilterWrapper>
      </FilterContainer>
      <TableTableWrapper>
        <table>
          {TableHeaderItems.map((TableHeaderItem) => {
            return (
              <tr>
                <th>
                  <SmallTableHeader text={TableHeaderItem.id} />
                </th>
                <th>
                  <LockedTableHeader text={TableHeaderItem.text} />
                </th>
                <th>
                  <LockedTableHeader text={TableHeaderItem.date} />
                </th>
                <th>
                  <LockedTableHeader text={TableHeaderItem.tag} />
                </th>
                <th>
                  <LockedTableHeader text={TableHeaderItem.color} />
                </th>
                <th>
                  <LockedTableHeader text={TableHeaderItem.geoZone} />
                </th>
                <th>
                  <LockedTableHeader text={TableHeaderItem.action} />
                </th>
              </tr>
            );
          })}
          {TableItems.map((TableItem) => {
            return (
              <tr>
                <td>
                  <SmallTableHeader text={TableItem.id} />
                </td>
                <td>
                  <TableCellLockedVehicleName text={TableItem.text} />
                </td>
                <td>
                  <TableCellLockedVehicleName text={TableItem.date} />
                </td>
                <td>
                  <TableCellLockedActiveTag colour={TableItem.tag}>
                    Active
                  </TableCellLockedActiveTag>
                </td>
                <td>
                  <TableCellColour text={TableItem.color} />
                </td>
                <td>
                  <TableCellLockedGeoZone text={TableItem.geoZone} />
                </td>
                <td>
                  <TableCellLockedAction text={TableItem.action} />
                </td>
              </tr>
            );
          })}
        </table>
      </TableTableWrapper>
      <TablePaginationWrapper>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </TablePaginationWrapper>
    </TableWrapper>
  );
};

const LoadingTableContainer = () => {
  return (
    <TableWrapper>
      <TableHeadingWrapper>
        <TableHeaderHeadingWrapper>Table Header</TableHeaderHeadingWrapper>
        <div>
          <SecondaryButton>Action</SecondaryButton>
          <SecondaryButton>Action</SecondaryButton>
          <SecondaryButton>Action</SecondaryButton>
        </div>
      </TableHeadingWrapper>
      <FilterContainer>
        <PaginationWrapper>Showing Results 0-5 of 5 Results</PaginationWrapper>
        <FilterWrapper>
          <TableDropdown />
          <div style={{ width: 140 }}> Results per page</div>
          <SearchField placeholder="Search Table..." />
        </FilterWrapper>
      </FilterContainer>
      <TableTableWrapper>
        <table>
          <tr>
            <th>
              <SmallTableHeader text="ID" />
            </th>
            <th>
              <LockedTableHeader text="Text" />
            </th>
            <th>
              <LockedTableHeader text="DATE" />
            </th>
            <th>
              <LockedTableHeader text="TAG" />
            </th>
            <th>
              <LockedTableHeader text="COLOUR" />
            </th>
            <th>
              <LockedTableHeader text="GEO ZONE" />
            </th>
            <th>
              <LockedTableHeader text="ACTION" />
            </th>
          </tr>
        </table>
      </TableTableWrapper>

      <TableBodyWrapper>
        <TableBodyContentWrapper>
          <TableBodyContentIconWrapper>
            <LoadingCircle />
          </TableBodyContentIconWrapper>
          Loading Next page...
        </TableBodyContentWrapper>
      </TableBodyWrapper>
      <TablePaginationWrapper>
        <Pagination count={5} variant="outlined" shape="rounded" />
      </TablePaginationWrapper>
    </TableWrapper>
  );
};

const EmptyTableContainer = () => {
  return (
    <TableWrapper>
      <TableHeadingWrapper>
        <TableHeaderHeadingWrapper>Table Header</TableHeaderHeadingWrapper>
        <div>
          <SecondaryButton>Action</SecondaryButton>
          <SecondaryButton>Action</SecondaryButton>
          <SecondaryButton>Action</SecondaryButton>
        </div>
      </TableHeadingWrapper>
      <FilterContainer>
        <PaginationWrapper>Showing Results 0-5 of 5 Results</PaginationWrapper>

        <FilterWrapper>
          <TableDropdown />
          <PerPageWrapper> Results per page </PerPageWrapper>
          <SearchField placeholder="Search Table..." />
        </FilterWrapper>
      </FilterContainer>
      <TableTableWrapper>
        <table>
          <tr>
            <th>
              <SmallTableHeader text="ID" />
            </th>
            <th>
              <LockedTableHeader text="Text" />
            </th>
            <th>
              <LockedTableHeader text="DATE" />
            </th>
            <th>
              <LockedTableHeader text="TAG" />
            </th>
            <th>
              <LockedTableHeader text="COLOUR" />
            </th>
            <th>
              <LockedTableHeader text="GEO ZONE" />
            </th>
            <th>
              <LockedTableHeader text="ACTION" />
            </th>
          </tr>
        </table>
      </TableTableWrapper>

      <TableBodyWrapper>
        <TableBodyContentWrapper>
          <TableBodyContentIconWrapper>
            <EmptyTableIcon />
          </TableBodyContentIconWrapper>
          This table is empty{" "}
          <TableBodySubContentWrapper>
            Do this action to see data
          </TableBodySubContentWrapper>
        </TableBodyContentWrapper>
      </TableBodyWrapper>
    </TableWrapper>
  );
};

export { TableContainer, LoadingTableContainer, EmptyTableContainer };
