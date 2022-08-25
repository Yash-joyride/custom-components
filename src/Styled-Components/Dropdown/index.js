import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import {
  DropdownMultiSelect,
  DropdownWrapper,
  DropdownSmallSelect,
  DropdownSmallDisableSelect,
  DropdownFormRequiredSelect,
  DropdownFormNotRequiredSelect,
  DropdownFormMultiSelect,
  DropdownMenuItemSelect,
  DropdownMenuItemCheckboxSelect,
  DropdownStationSelect,
} from "./style";
import { RequiredLabel } from "../labels";
import DropdownArrowIconSmall from "../Icons/DropdownArrowIconSmall";
import DropdownArrowIcon from "../Icons/DropdownArrowIcon";
import CloseDropdownIcon from "../Icons/CloseDropdownIcon";
import { ParkingSmallIcon } from "../Icons/ParkingIcon";
import { RestrictedSmallIcon } from "../Icons/RestrictedIcon";
import { ServiceSmallIcon } from "../Icons/ServiceIcon";
import { SlowSpeedSmallIcon } from "../Icons/SlowSpeedIcon";
import { CustomSmallIcon } from "../Icons/CustomIcon";
import StationIcon from "../Icons/StationIcon";

const DropdownComponent = () => {
  const data = [
    { options: "Analytics", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [option] = useState(data);

  return (
    <DropdownWrapper>
      <div className="DropdownContainer">
        <Multiselect
          options={option}
          displayValue="options"
          showArrow
          customArrow={
            <>
              <DropdownArrowIconSmall />
            </>
          }
          singleSelect
          id="DropdownSelect"
          placeholder="Choose"
          avoidHighlightFirstOption="true"
          customCloseIcon={
            <>
              <CloseDropdownIcon />
            </>
          }
        />
      </div>
    </DropdownWrapper>
  );
};

const ComponentDropdownMultiSelect = () => {
  const data = [
    { options: "Selection", id: 1 },
    { options: "Selection 1", id: 2 },
    { options: "Selection 2", id: 3 },
  ];

  const [placeholder, setPlaceHolder] = useState("Select");
  const [options] = useState(data);

  const onSelect = () => {
    setPlaceHolder("");
  };

  const onRemove = (selectedList) => {
    if (selectedList.length === 0) {
      setPlaceHolder("Select");
    }
  };

  return (
    <DropdownMultiSelect>
      <Multiselect
        options={options}
        onSelect={onSelect}
        onRemove={onRemove}
        placeholder={placeholder}
        displayValue="options"
        customCloseIcon={
          <>
            <CloseDropdownIcon />
          </>
        }
        customArrow={
          <>
            <DropdownArrowIcon />
          </>
        }
        showArrow
        id="DropdownMultiSelect"
      />
    </DropdownMultiSelect>
  );
};

const ComponentDropdownSmallSelect = () => {
  const data = [
    { options: "Analytics", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [option] = useState(data);

  return (
    <DropdownSmallSelect>
      <Multiselect
        options={option}
        displayValue="options"
        selectedValues={[
          {
            options: "Analytics",
            id: 1,
          },
        ]}
        showArrow
        customArrow={
          <>
            <DropdownArrowIconSmall />
          </>
        }
        singleSelect
        id="DropdownSmall"
        avoidHighlightFirstOption="true"
        customCloseIcon={
          <>
            <CloseDropdownIcon />
          </>
        }
      />
    </DropdownSmallSelect>
  );
};

const ComponentDropdownSmallDisableSelect = () => {
  const data = [
    { options: "Analytics", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [option] = useState(data);

  return (
    <DropdownSmallDisableSelect>
      <Multiselect
        options={option}
        displayValue="options"
        selectedValues={[
          {
            options: "Analytics",
            id: 1,
          },
        ]}
        disable
        singleSelect
        customArrow={
          <>
            <DropdownArrowIconSmall />
          </>
        }
        id="DropdownSmallDisable"
      />
    </DropdownSmallDisableSelect>
  );
};

const ComponentDropdownFormRequiredSelect = () => {
  const data = [
    { options: "Analytics", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [option] = useState(data);

  return (
    <DropdownFormRequiredSelect>
      <RequiredLabel label={"Label"} />

      <div className="DropdownContainer">
        <Multiselect
          options={option}
          displayValue="options"
          showArrow
          customArrow={
            <>
              <DropdownArrowIconSmall />
            </>
          }
          singleSelect
          id="DropdownFormRequiredSelect"
          customCloseIcon={
            <>
              <CloseDropdownIcon />
            </>
          }
          placeholder="Choose"
          avoidHighlightFirstOption="true"
        />
      </div>
    </DropdownFormRequiredSelect>
  );
};

const ComponentDropdownFormNotRequiredSelect = () => {
  const data = [
    { options: "Analytics", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [option] = useState(data);

  return (
    <DropdownFormNotRequiredSelect>
      <div className="DropdownContainerSecond">
        <Multiselect
          options={option}
          displayValue="options"
          showArrow
          customArrow={
            <>
              <DropdownArrowIconSmall />
            </>
          }
          singleSelect
          id="DropdownSelectNotRequired"
          placeholder="Choose"
          avoidHighlightFirstOption="true"
          customCloseIcon={
            <>
              <CloseDropdownIcon />
            </>
          }
        />
      </div>
    </DropdownFormNotRequiredSelect>
  );
};

const ComponentDropdownFormMultiSelect = () => {
  const data = [
    { options: "Selection", id: 1 },
    { options: "Selection 1", id: 2 },
    { options: "Selection 2", id: 3 },
  ];

  const [placeholder, setPlaceHolder] = useState("Select");
  const [options] = useState(data);

  const onSelect = () => {
    setPlaceHolder("");
  };

  const onRemove = (selectedList) => {
    if (selectedList.length === 0) {
      setPlaceHolder("Select");
    }
  };

  return (
    <DropdownFormMultiSelect>
      <RequiredLabel label={"Label"} />
      <Multiselect
        onSelect={onSelect}
        onRemove={onRemove}
        options={options}
        displayValue="options"
        customCloseIcon={
          <>
            <CloseDropdownIcon />
          </>
        }
        customArrow={
          <>
            <DropdownArrowIcon />
          </>
        }
        showArrow
        placeholder={placeholder}
        id="DropdownFormMultiSelect"
        avoidHighlightFirstOption="true"
      />
    </DropdownFormMultiSelect>
  );
};

const ComponentDropdownMenuItemSelect = () => {
  const data = [
    { options: "Menu Item", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [option] = useState(data);

  return (
    <DropdownMenuItemSelect>
      <Multiselect
        options={option}
        displayValue="options"
        showArrow
        customArrow={<DropdownArrowIcon />}
        id="DropdownMenuItem"
        singleSelect
        avoidHighlightFirstOption="true"
        customCloseIcon={<CloseDropdownIcon />}
        placeholder="Choose"
      />
    </DropdownMenuItemSelect>
  );
};

const ComponentDropdownMenuItemCheckboxSelect = () => {
  const data = [
    { options: "Menu Item", id: 1 },
    { options: "Action", id: 2 },
    { options: "Selection", id: 3 },
  ];

  const [placeholder, setPlaceHolder] = useState("Select");
  const [options] = useState(data);

  const onSelect = () => {
    setPlaceHolder("");
  };

  const onRemove = (selectedList) => {
    if (selectedList.length === 0) {
      setPlaceHolder("Select");
    }
  };

  return (
    <DropdownMenuItemCheckboxSelect>
      <Multiselect
        options={options}
        onSelect={onSelect}
        onRemove={onRemove}
        placeholder={placeholder}
        displayValue="options"
        showArrow
        customArrow={<DropdownArrowIcon />}
        id="DropdownMenuItemCheckbox"
        showCheckbox
        avoidHighlightFirstOption="true"
        customCloseIcon={<CloseDropdownIcon />}
      />
    </DropdownMenuItemCheckboxSelect>
  );
};

const ComponentDropdownStationSelect = () => {
  const options = [
    { id: 1, title: "Parking Zone", href: "#", icon: <ParkingSmallIcon /> },
    {
      id: 2,
      title: "Restricted Zone",
      href: "#",
      icon: <RestrictedSmallIcon />,
    },
    { id: 3, title: "Service Zone", href: "#", icon: <ServiceSmallIcon /> },
    {
      id: 4,
      title: "Slow Speed Zone",
      href: "#",
      icon: <SlowSpeedSmallIcon />,
    },
    { id: 5, title: "Custom Zone", href: "#", icon: <CustomSmallIcon /> },
    { id: 6, title: "Station", href: "#", icon: <StationIcon /> },
  ];
  const [option, setOption] = useState(null);

  const onChange = (key) => {
    setOption(options[key]);
  };
  return (
    <DropdownStationSelect>
      <Dropdown onSelect={onChange} id="DropdownStationSelect">
        <Dropdown.Toggle>
          {option ? (
            <>
              {option.icon}
              <span>{option.title}</span>
            </>
          ) : (
            "Select"
          )}
          <DropdownArrowIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((e, idx) => (
            <Dropdown.Item eventKey={idx} href={e.href}>
              {e.icon}
              {e.title}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </DropdownStationSelect>
  );
};

export {
  DropdownComponent,
  ComponentDropdownMultiSelect,
  ComponentDropdownSmallSelect,
  ComponentDropdownSmallDisableSelect,
  ComponentDropdownFormRequiredSelect,
  ComponentDropdownFormNotRequiredSelect,
  ComponentDropdownFormMultiSelect,
  ComponentDropdownMenuItemSelect,
  ComponentDropdownMenuItemCheckboxSelect,
  ComponentDropdownStationSelect,
};
