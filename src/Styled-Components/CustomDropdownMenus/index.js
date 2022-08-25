import {
  HeatMapFiltersWrapper,
  HeatMapFiltersSectionWrapper,
  HeatMapFiltersAccordionWrapper,
  LiveMapFiltersWrapper,
  LiveMapFiltersSectionWrapper,
  LiveMapFiltersAccordionWrapper,
  LiveMapFiltersAdvanceFiltersWrapper,
  LiveMapFiltersAdvanceFiltersSectionContainer,
  LiveMapFiltersAdvanceFiltersSectionWrapper,
  LiveMapFiltersAdvanceFiltersSectionlabelContainer,
  VehicleMapFiltersWrapper,
  VehicleMapFiltersSectionWrapper,
  VehicleMapFiltersAccordionWrapper,
  VehicleFiltersWrapper,
  VehicleFiltersSectionWrapper,
  VehicleFiltersCardSectionWrapper,
  FleetFiltersWrapper,
  FleetFiltersSectionWrapper,
  FleetFiltersCheckboxSectionWrapper,
  FleetFiltersCheckboxWrapper,
  FleetFiltersEndStrap,
  GeofencingFiltersWrapper,
  GeofencingFiltersSectionWrapper,
  GeofencingFiltersSectionCheckboxWrapper,
  AddChartDropdownWrapper,
  AddChartDropdownContentWrapper,
  AddChartDropdownContentCardWrapper,
} from "./style";
import {
  HeatMapFiltersHeaderWrapper,
  LiveMapFiltersHeaderWrapper,
  LiveMapFiltersAdvanceFiltersHeaderWrapper,
  VehicleMapFiltersHeaderWrapper,
  VehicleFiltersHeaderWrapper,
  FleetFiltersHeaderWrapper,
  GeofencingFiltersHeaderWrapper,
  AddChartDropdownHeaderWrapper,
  HeatMapFiltersSectionHeaderWrapper,
  LiveMapFiltersSectionHeaderWrapper,
  LiveMapFiltersAdvanceFiltersSectionHeaderWrapper,
  VehicleMapFiltersSectionHeaderWrapper,
  LiveMapFiltersAdvanceFiltersSectionlabelWrapper,
  LiveMapFiltersAdvanceFiltersSettingsSectionWrapper,
  GeofencingFiltersSectionHeaderWrapper,
} from "../Typography/Paragraph";
import {
  SliderComponent,
  HourScaledSliderComponent,
  TooltipHourScaledSliderComponent,
} from "./SliderComponent";
import { AccordionComponent } from "./AccordionComponent";
import { SearchField } from "../SearchField";
import { CardCheckboxComponent } from "./CardCheckboxComponent";
import { TooltipTop } from "../Tooltip";
import { useState } from "react";
import CustomDropdownCrossIcon from "../Icons/CustomDropdownCrossIcon";
import CustomDropdownSettingsIcon from "../Icons/CustomDropdownSettingsIcon";
import ActiveCheckbox from "../Checkbox/ActiveCheckbox";

export const HeatMapFilter = () => {
  return (
    <HeatMapFiltersWrapper>
      <HeatMapFiltersHeaderWrapper>Filters</HeatMapFiltersHeaderWrapper>
      <HeatMapFiltersSectionWrapper>
        <HeatMapFiltersSectionHeaderWrapper>
          Zones
        </HeatMapFiltersSectionHeaderWrapper>
        <ActiveCheckbox label="Hide Zones" />
      </HeatMapFiltersSectionWrapper>
      <HeatMapFiltersAccordionWrapper>
        <AccordionComponent
          head="Pins"
          arr={[
            {
              label: "Pick Up",
              inactive: false,
            },
            {
              label: "Drop Off",
              inactive: false,
            },
          ]}
        />
      </HeatMapFiltersAccordionWrapper>
      <HeatMapFiltersAccordionWrapper>
        <AccordionComponent
          head="Users"
          arr={[
            {
              label: "item-1",
              inactive: false,
            },
            {
              label: "item-2",
              inactive: false,
            },
            {
              label: "item-3",
              inactive: false,
            },
          ]}
        />
      </HeatMapFiltersAccordionWrapper>
    </HeatMapFiltersWrapper>
  );
};

export const LiveMapFiltersAdvanceFilters = () => {
  return (
    <LiveMapFiltersAdvanceFiltersWrapper>
      <LiveMapFiltersAdvanceFiltersHeaderWrapper>
        Advanced Filters
        <CustomDropdownCrossIcon />
      </LiveMapFiltersAdvanceFiltersHeaderWrapper>
      <LiveMapFiltersAdvanceFiltersSectionContainer>
        <LiveMapFiltersAdvanceFiltersSectionWrapper>
          <LiveMapFiltersAdvanceFiltersSectionHeaderWrapper>
            Battery
          </LiveMapFiltersAdvanceFiltersSectionHeaderWrapper>
          <SliderComponent />
          <LiveMapFiltersAdvanceFiltersSectionlabelContainer>
            <LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
              0%
            </LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
            <LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
              100%
            </LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
          </LiveMapFiltersAdvanceFiltersSectionlabelContainer>
        </LiveMapFiltersAdvanceFiltersSectionWrapper>
        <LiveMapFiltersAdvanceFiltersSectionWrapper>
          <LiveMapFiltersAdvanceFiltersSectionHeaderWrapper>
            Last GPS Signal
          </LiveMapFiltersAdvanceFiltersSectionHeaderWrapper>
          <TooltipHourScaledSliderComponent />
          <LiveMapFiltersAdvanceFiltersSectionlabelContainer>
            <LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
              0 Hours
            </LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
            <LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
              +24 Hours
            </LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
          </LiveMapFiltersAdvanceFiltersSectionlabelContainer>
        </LiveMapFiltersAdvanceFiltersSectionWrapper>
        <LiveMapFiltersAdvanceFiltersSectionWrapper>
          <LiveMapFiltersAdvanceFiltersSectionHeaderWrapper>
            Last Used
          </LiveMapFiltersAdvanceFiltersSectionHeaderWrapper>
          <HourScaledSliderComponent />
          <LiveMapFiltersAdvanceFiltersSectionlabelContainer>
            <LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
              0 Hours
            </LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
            <LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
              +24 Hours
            </LiveMapFiltersAdvanceFiltersSectionlabelWrapper>
          </LiveMapFiltersAdvanceFiltersSectionlabelContainer>
        </LiveMapFiltersAdvanceFiltersSectionWrapper>
      </LiveMapFiltersAdvanceFiltersSectionContainer>
    </LiveMapFiltersAdvanceFiltersWrapper>
  );
};

export const LiveMapFilters = () => {
  return (
    <LiveMapFiltersWrapper>
      <LiveMapFiltersHeaderWrapper>Filters</LiveMapFiltersHeaderWrapper>
      <LiveMapFiltersSectionWrapper>
        <LiveMapFiltersSectionHeaderWrapper>
          Zones
        </LiveMapFiltersSectionHeaderWrapper>
        <ActiveCheckbox label="Hide Zones" />
      </LiveMapFiltersSectionWrapper>
      <LiveMapFiltersAccordionWrapper>
        <AccordionComponent
          head="Flags"
          arr={[
            {
              label: "Pick Up",
              inactive: false,
            },
            {
              label: "Drop Off",
              inactive: false,
            },
          ]}
        />
      </LiveMapFiltersAccordionWrapper>
      <LiveMapFiltersAccordionWrapper>
        <AccordionComponent
          head="States"
          arr={[
            {
              label: "item-1",
              inactive: false,
            },
            {
              label: "item-2",
              inactive: false,
            },
            {
              label: "item-3",
              inactive: false,
            },
          ]}
        />
      </LiveMapFiltersAccordionWrapper>
      <LiveMapFiltersAccordionWrapper>
        <AccordionComponent
          head="Vehicle Type"
          arr={[
            {
              label: "Only Vehicles with Tickets",
              inactive: false,
            },
            {
              label: "Bike",
              inactive: true,
            },
            {
              label: "Scooter",
              inactive: true,
            },
            {
              label: "Electric Bike",
              inactive: true,
            },
          ]}
        />
      </LiveMapFiltersAccordionWrapper>
      <LiveMapFiltersAdvanceFiltersSettingsSectionWrapper>
        Advanced Filters
        <CustomDropdownSettingsIcon />
      </LiveMapFiltersAdvanceFiltersSettingsSectionWrapper>
    </LiveMapFiltersWrapper>
  );
};

export const VehicleMapFilters = () => {
  return (
    <VehicleMapFiltersWrapper>
      <VehicleMapFiltersHeaderWrapper>Filters</VehicleMapFiltersHeaderWrapper>
      <VehicleMapFiltersSectionWrapper>
        <VehicleMapFiltersSectionHeaderWrapper>
          Reserved
        </VehicleMapFiltersSectionHeaderWrapper>
        <ActiveCheckbox label="Reserved" />
      </VehicleMapFiltersSectionWrapper>
      <VehicleMapFiltersAccordionWrapper>
        <AccordionComponent
          head="Flags"
          arr={[
            {
              label: "Pick Up",
              inactive: false,
            },
            {
              label: "Drop Off",
              inactive: false,
            },
          ]}
        />
      </VehicleMapFiltersAccordionWrapper>
      <VehicleMapFiltersAccordionWrapper>
        <AccordionComponent
          head="States"
          arr={[
            {
              label: "item-1",
              inactive: false,
            },
            {
              label: "item-2",
              inactive: false,
            },
            {
              label: "item-3",
              inactive: false,
            },
          ]}
        />
      </VehicleMapFiltersAccordionWrapper>
      <VehicleMapFiltersAccordionWrapper>
        <AccordionComponent
          head="No. Records"
          arr={[
            {
              label: "Filter Item",
              inactive: false,
            },
            {
              label: "Filter Item",
              inactive: true,
            },
            {
              label: "Filter Item",
              inactive: true,
            },
            {
              label: "Filter Item",
              inactive: true,
            },
          ]}
        />
      </VehicleMapFiltersAccordionWrapper>
    </VehicleMapFiltersWrapper>
  );
};

export const VehicleFilters = ({ arr }) => {
  return (
    <VehicleFiltersWrapper>
      <VehicleFiltersHeaderWrapper>Filter Vehicles</VehicleFiltersHeaderWrapper>
      <VehicleFiltersSectionWrapper>
        <SearchField placeholder="Search Vehicles" />
        <ActiveCheckbox label="Only Live Rides" />
      </VehicleFiltersSectionWrapper>
      <VehicleFiltersCardSectionWrapper>
        {arr.map((item) => {
          return item.component;
        })}
      </VehicleFiltersCardSectionWrapper>
    </VehicleFiltersWrapper>
  );
};

export const FleetFilters = ({ arr }) => {
  return (
    <FleetFiltersWrapper>
      <FleetFiltersHeaderWrapper>Fleets</FleetFiltersHeaderWrapper>
      <FleetFiltersSectionWrapper>
        <SearchField placeholder="Search Fleets" />
      </FleetFiltersSectionWrapper>
      <FleetFiltersCheckboxSectionWrapper>
        {arr.map((item) => {
          return (
            <FleetFiltersCheckboxWrapper>
              <ActiveCheckbox label={item.label} inactive={item.inactive} />
            </FleetFiltersCheckboxWrapper>
          );
        })}
      </FleetFiltersCheckboxSectionWrapper>
      <FleetFiltersEndStrap />
    </FleetFiltersWrapper>
  );
};

export const GeofencingFilters = () => {
  return (
    <GeofencingFiltersWrapper>
      <GeofencingFiltersHeaderWrapper>Filters</GeofencingFiltersHeaderWrapper>
      <GeofencingFiltersSectionWrapper>
        <GeofencingFiltersSectionHeaderWrapper>
          Status
        </GeofencingFiltersSectionHeaderWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Active" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Non-active" inactive={true} />
        </GeofencingFiltersSectionCheckboxWrapper>
      </GeofencingFiltersSectionWrapper>
      <GeofencingFiltersSectionWrapper>
        <GeofencingFiltersSectionHeaderWrapper>
          Zone Type
        </GeofencingFiltersSectionHeaderWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Parking" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Restricted" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Service" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Slow Speed" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Custom" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
        <GeofencingFiltersSectionCheckboxWrapper>
          <ActiveCheckbox label="Stations" inactive={false} />
        </GeofencingFiltersSectionCheckboxWrapper>
      </GeofencingFiltersSectionWrapper>
    </GeofencingFiltersWrapper>
  );
};

export const AddChartDropdown = ({ arr }) => {
  return (
    <AddChartDropdownWrapper>
      <AddChartDropdownHeaderWrapper>
        Choose a Chart Type
      </AddChartDropdownHeaderWrapper>
      <AddChartDropdownContentWrapper>
        {arr.map((item) => {
          return (
            <AddChartDropdownContentCardWrapper>
              {item.component}
            </AddChartDropdownContentCardWrapper>
          );
        })}
      </AddChartDropdownContentWrapper>
    </AddChartDropdownWrapper>
  );
};
