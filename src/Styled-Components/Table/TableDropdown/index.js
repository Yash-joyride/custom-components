import { Dropdown } from "react-bootstrap";
import { TableDropdownWrapper } from "./style";
import TableDropdownArrowIcon from "../../Icons/TableDropdownArrowIcon";

const TableDropdown = () => {
  return (
    <TableDropdownWrapper>
      <Dropdown id="dropdown-basic-button">
        <Dropdown.Toggle>
          5
          <TableDropdownArrowIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </TableDropdownWrapper>
  );
};

export default TableDropdown;
