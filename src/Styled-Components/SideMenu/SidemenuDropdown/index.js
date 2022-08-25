import React from "react";
import { Dropdown } from "react-bootstrap";
import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { SidemenuDropdownWrapper, SidemenuDropdownContainer, SidemenuModalWrapper } from "./style";
import SidemenuDropdownArrowIcon from "../../Icons/SidemenuDropdownArrowIcon";
import IconAnalytics from "../../Icons/AnalyticsIcon/analyticsIcon.js";
import NotificationIcon from "../../Icons/NotificationIcon/index.js";
import { SidemenuDropdownItems } from "./constant";
import GeofencingIcon from "../../Icons/GeofencingIcon";
import StatusIcon from "../../Icons/StatusIcon";
import RidersIcon from "../../Icons/RidersIcon";
import { CustomTooltip } from "../../Tooltip";

const SidemenuDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  const SidemenuDialog = styled(Dialog)(({ theme }) => ({
    "& .css-q4ib0v-MuiPaper-root-MuiDialog-paper": {
      boxShadow: "none",
      background: "none",
      borderRadius: "0px",
      transition: "none",
      margin: "0px",
    },
    "& .css-hz1bth-MuiDialog-container": {
      height: "auto",
      display: "inline-block",
      marginLeft: "90px",
    },
    "& .css-1am3qag-MuiBackdrop-root-MuiDialog-backdrop": {
      background: "rgba(0, 0, 0, 0.25)",
    },
  }));
  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   bgcolor: "transparent",
  //   border: "none",
  //   boxSizing: "unset",
  // };
  // console.log("open :-", isOpen);
  return (
    <SidemenuDropdownContainer>
      <NotificationIcon />
      <SidemenuDropdownWrapper>
        <IconAnalytics />
        <SidemenuDropdownArrowIcon onClick={handleChange} />
      </SidemenuDropdownWrapper>
      <SidemenuDialog open={isOpen} onClose={handleChange}>
        {/* <div style={style}> */}
        <SidemenuModalWrapper>
          {/* <GeofencingIcon />
          <RidersIcon />
          <StatusIcon /> */}
          {SidemenuDropdownItems.map((SidemenuDropdownItem) => {
            return (
              <CustomTooltip title={SidemenuDropdownItem.name} placement="right">
                <div>{SidemenuDropdownItem.icon}</div>
              </CustomTooltip>
            );
          })}
        </SidemenuModalWrapper>
        {/* </div> */}
      </SidemenuDialog>
    </SidemenuDropdownContainer>
  );
};

export default SidemenuDropdown;
