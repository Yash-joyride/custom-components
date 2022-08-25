import styled from "styled-components";

// heat map filters

export const HeatMapFiltersWrapper = styled.div`
  width: 273px;
  background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  box-shadow: 0px -3px 20px ${({ theme }) => theme.colorBoxShadow};
  border-radius: 4px;
`;

export const HeatMapFiltersSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px;
  margin-top: 10px;
`;

export const HeatMapFiltersAccordionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  margin-top: 10px;
  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

// live map filters

export const LiveMapFiltersWrapper = styled(HeatMapFiltersWrapper)``;

export const LiveMapFiltersSectionWrapper = styled(
  HeatMapFiltersSectionWrapper
)``;
export const LiveMapFiltersAccordionWrapper = styled(
  HeatMapFiltersAccordionWrapper
)`
  :last-child {
    border-radius: 0px;
  }
`;

// live map filters - advance filters

export const LiveMapFiltersAdvanceFiltersWrapper = styled(
  HeatMapFiltersWrapper
)``;

export const LiveMapFiltersAdvanceFiltersSectionContainer = styled.div`
width: 100%
  display: inline-grid;
  gap: 10px;
`;

export const LiveMapFiltersAdvanceFiltersSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 14px 24px 24px 24px
  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const LiveMapFiltersAdvanceFiltersSectionlabelContainer = styled.div`
width: 100%
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

// Vehicle Map Filters

export const VehicleMapFiltersWrapper = styled(HeatMapFiltersWrapper)``;

export const VehicleMapFiltersSectionWrapper = styled(
  HeatMapFiltersSectionWrapper
)``;
export const VehicleMapFiltersAccordionWrapper = styled(
  HeatMapFiltersAccordionWrapper
)`
  :last-child {
    border-radius: 0px;
  }
`;

// vehicle filters

export const VehicleFiltersWrapper = styled(HeatMapFiltersWrapper)``;

export const VehicleFiltersSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 10px 24px;
  gap: 10px;

  > div:first-child {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const VehicleFiltersCardSectionWrapper = styled.div`
  height: 425px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding: 24px 24px 0px 24px;
  gap: 12px;
  display: inline-grid;

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    :last-child {
      margin-bottom: 12px;
    }
  }
`;

// fleet Filters

export const FleetFiltersWrapper = styled(HeatMapFiltersWrapper)``;

export const FleetFiltersSectionWrapper = styled(
  VehicleFiltersSectionWrapper
)``;
export const FleetFiltersCheckboxSectionWrapper = styled.div`
  height: 156px;

  margin-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};

  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const FleetFiltersCheckboxWrapper = styled.div`
  padding: 14px 24px;
  background: ${({ theme }) => theme.colourMaterialPrimary};

  :hover {
    background: ${({ theme }) => theme.colourMaterialPrimaryBackground};
  }
`;
export const FleetFiltersEndStrap = styled.div`
  height: 24px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
`;

// geafencing Filters

export const GeofencingFiltersWrapper = styled(HeatMapFiltersWrapper)`
  display: inline-grid;
  gap: 10px;
`;

export const GeofencingFiltersSectionWrapper = styled.div`
  background: ${({ theme }) => theme.colourMaterialPrimary};
  padding-bottom: 14px;

  :last-child {
    padding-bottom: 24px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const GeofencingFiltersSectionCheckboxWrapper = styled(
  FleetFiltersCheckboxWrapper
)`
  :last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
  }
`;

// add chart dropdown

export const AddChartDropdownWrapper = styled(GeofencingFiltersWrapper)`
  > div:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const AddChartDropdownContentWrapper = styled.div`
  height: 334px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const AddChartDropdownContentCardWrapper = styled.div`
  padding: 12px 24px;
  background: ${({ theme }) => theme.colourMaterialPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colourMaterialBorder};
`;
