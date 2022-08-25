import React, { useEffect, useState } from "react";
import { Slider, IconButton, TextField, Button } from "@mui/material";
import { DateRangePicker } from "../DatePicker";
import LockIcon from "../Icons/LockIcon";
import { ParkingIcon } from "../../Styled-Components/Icons/ParkingIcon/index";
import { RestrictedIcon } from "../../Styled-Components/Icons/RestrictedIcon/index";
import { ServiceIcon } from "../../Styled-Components/Icons/ServiceIcon/index";
import { SlowSpeedIcon } from "../../Styled-Components/Icons/SlowSpeedIcon/index";
import { CustomIcon } from "../../Styled-Components/Icons/CustomIcon/index";
import BannerIcon from "../../Styled-Components/Icons/BannerIcon/index";
import OfferIcon from "../../Styled-Components/Icons/OfferIcon/index";
import LockSignIcons from "../../Styled-Components/Icons/LockSignIcons/index";
import VehicleGroupIcon from "../../Styled-Components/Icons/VehicleGroupIcon/index";
import VehicleMarkerIcon from "../../Styled-Components/Icons/VehicleMarkerIcon";
import LiveVehicleMarkIcon from "../../Styled-Components/Icons/LiveVehicleMarkChargedIcon";
import VehicleMarkerTicketIcon from "../../Styled-Components/Icons/VehicleMarkerTicketIcon";
import VehicleMarkerFlagsIcon from "../../Styled-Components/Icons/VehicleMarkerFlagsIcon";
import VehicleMarkerMaintananceIcon from "../Icons/VehicleMarkerMaintananceIcon";
import VehicleMarkerAgencyPickupIcon from "../Icons/VehicleMarkerAgencyPickupIcon";
import VehicleMarkerRebalanceIcon from "../Icons/VehicleMarkerRebalanceIcon";
import ChargingStationIcon from "../Icons/Charging-station";
import HeatMapTileIcon from "../Icons/HeatMapTileIcon/index";
import LiveStatusIcon from "../Icons/LiveStatusIcon/index";
import PauseIcon from "../Icons/PauseIcon";
import PlayIcon from "../Icons/PlayIcon";
import BackwardArrowIcon from "../Icons/BackwardArrowIcon";
import ForwardArrowIcon from "../Icons/ForwardArrowIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import {
  LargeMapPinSliderWrapper,
  MapPinFlagWrapper,
  MediumMapPinSliderWrapper,
  SmallMapPinSliderWrapper,
  PlaybackContainer,
  PlaybackIconContainer,
  PlaybackIconWrapper,
  LiveStatusIconWrapper,
  IconButtonContainer,
  PlaybackPlayContainer,
  PlaybackPlayIconWrapper,
  PlaybackDatePickerContainer,
  PlaybackIconButtonContainer,
  PlaybackDatePickerWrapper,
  PlaybackMediaContainer,
  PlayPauseIconContainer,
  PrettoSliderWrapper,
} from "./style";
import { MapDataLabel, LiveStatus } from "../Typography/Paragraph";

export const ChargingMapPin = () => {
  return <ChargingStationIcon />;
};

export const MapPinLock = () => {
  return (
    <MapPinFlagWrapper>
      <LockIcon />
    </MapPinFlagWrapper>
  );
};

export const ParkingMapPin = () => {
  return (
    <>
      <ParkingIcon />
    </>
  );
};

export const RestrictedMapPin = () => {
  return (
    <>
      <RestrictedIcon />
    </>
  );
};

export const ServiceMapPin = () => {
  return (
    <>
      <ServiceIcon />
    </>
  );
};

export const SlowSpeedMapPin = () => {
  return (
    <>
      <SlowSpeedIcon />
    </>
  );
};

export const CustomMapPin = () => {
  return (
    <>
      <CustomIcon />
    </>
  );
};

export const BannerMapPin = () => {
  return (
    <>
      <BannerIcon />
    </>
  );
};

export const OfferMapPin = () => {
  return (
    <>
      <OfferIcon />
    </>
  );
};

// vehicle pins

export const VehicleGroupMapPin = () => {
  return (
    <>
      <VehicleGroupIcon />
    </>
  );
};

export const LockSignIconMapPin = ({ children }) => {
  return (
    <>
      <LockSignIcons> {children}</LockSignIcons>
    </>
  );
};

export const VehiclePin = ({ value }) => {
  return (
    <>
      <VehicleMarkerIcon value={value} />
    </>
  );
};

export const LiveVehiclePin = ({ value }) => {
  return (
    <>
      <LiveVehicleMarkIcon value={value} />
    </>
  );
};

export const VehiclePinTicket = ({ value }) => {
  return (
    <>
      <VehicleMarkerTicketIcon value={value} />
    </>
  );
};

export const VehiclePinFlags = ({ value }) => {
  return (
    <>
      <VehicleMarkerFlagsIcon value={value} />
    </>
  );
};

export const VehiclePinMaintainance = ({ value }) => {
  return (
    <>
      <VehicleMarkerMaintananceIcon value={value} />
    </>
  );
};

export const VehiclePinAgencyPickup = ({ value }) => {
  return (
    <>
      <VehicleMarkerAgencyPickupIcon value={value} />
    </>
  );
};

export const VehiclePinRebalance = ({ value }) => {
  return (
    <>
      <VehicleMarkerRebalanceIcon value={value} />
    </>
  );
};

export const SmallMapPinSlider = () => {
  function valuetext(value) {
    return `${value}`;
  }

  const minDistance = 10;
  const [value2, setValue2] = React.useState([0, 100]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  return (
    <SmallMapPinSliderWrapper>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </SmallMapPinSliderWrapper>
  );
};

export const MediumMapPinSlider = () => {
  function valuetext(value) {
    return `${value}`;
  }

  const minDistance = 10;
  const [value2, setValue2] = React.useState([0, 100]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  return (
    <MediumMapPinSliderWrapper>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </MediumMapPinSliderWrapper>
  );
};

export const LargeMapPinSlider = () => {
  function valuetext(value) {
    return `${value}`;
  }

  const minDistance = 10;
  const [value2, setValue2] = React.useState([0, 100]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  return (
    <LargeMapPinSliderWrapper>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </LargeMapPinSliderWrapper>
  );
};

export const HeatMapTileCool = () => {
  return (
    <>
      <HeatMapTileIcon fill="#1BFFAD" fillOpacity="0.05" />
    </>
  );
};

export const HeatMapTileWarm = () => {
  return (
    <>
      <HeatMapTileIcon fill="#FFA41B" fillOpacity="0.15" />
    </>
  );
};

export const HeatMapTileHot = () => {
  return (
    <>
      <HeatMapTileIcon fill="#FD5151" fillOpacity="0.25" />
    </>
  );
};

export const HeatMapTileNeutral = () => {
  return (
    <>
      <HeatMapTileIcon fill="none" fillOpacity="none" />
    </>
  );
};

export const HeatMapTileHover = () => {
  return (
    <>
      <HeatMapTileIcon fill="white" fillOpacity="0.6" />
    </>
  );
};

export const HeatMapData = () => {
  const [value, setValue] = React.useState(null);
  const [show, setShow] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showIcon, setShowIcon] = useState(true);
  const [showPlay, setShowPlay] = useState(false);

  const onClick = () => {
    setShowPlay(!showPlay);
  };

  const onDateSelect = (date) => {
    const {
      selectedDate: { startDate: start, endDate: end },
    } = date;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      {!showPlay ? (
        <PlaybackContainer>
          <PlaybackIconContainer>
            <PlaybackIconWrapper>
              <IconButtonContainer>
                <IconButton className="IconButtons" onClick={onClick}>
                  <PauseIcon />
                </IconButton>
              </IconButtonContainer>
            </PlaybackIconWrapper>
          </PlaybackIconContainer>
          <MapDataLabel>Map Data</MapDataLabel>
          <LiveStatusIconWrapper>
            <LiveStatusIcon />
          </LiveStatusIconWrapper>
          <LiveStatus>Currently Live</LiveStatus>
        </PlaybackContainer>
      ) : null}
      {showPlay ? (
        <PlaybackPlayContainer>
          <PlaybackPlayIconWrapper>
            <PlaybackIconButtonContainer>
              <IconButton className="PlayIconButtons" onClick={() => onClick()}>
                <PlayIcon />
              </IconButton>
            </PlaybackIconButtonContainer>
          </PlaybackPlayIconWrapper>

          <PlaybackDatePickerContainer
            className={[
              endDate && endDate !== "" ? "DatePickerContainerWithDate" : "",
            ]}
          >
            <PlaybackDatePickerWrapper
              className={[
                startDate && startDate !== "" && endDate && endDate !== ""
                  ? "DatePickerWrapperWithDate"
                  : "",
              ]}
            >
              <DateRangePicker
                onDateSelected={onDateSelect}
                buttonStyle={[
                  startDate && startDate !== "" && endDate && endDate !== ""
                    ? "PlaybackDatePickerButton"
                    : "",
                ]}
              />
            </PlaybackDatePickerWrapper>

            <PlaybackMediaContainer
              className={[
                endDate && endDate !== ""
                  ? "PlaybackMediaContainerWithDate"
                  : "",
              ]}
            >
              <BackwardArrowIcon />
              <PlayPauseIconContainer onClick={() => setShowIcon(!showIcon)}>
                {showIcon ? <PlayIcon /> : <PauseIcon />}
              </PlayPauseIconContainer>
              <ForwardArrowIcon />

              <PrettoSliderWrapper>
                <Slider defaultValue={30} />
              </PrettoSliderWrapper>
            </PlaybackMediaContainer>
          </PlaybackDatePickerContainer>
        </PlaybackPlayContainer>
      ) : null}
    </>
  );
};
