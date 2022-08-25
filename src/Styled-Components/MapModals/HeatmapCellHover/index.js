import MapModalVehicleMarkerCrossIcon from "../../Icons/MapModalVehicleMarkerCrossIcon";
import {
  HeatmapCellHoverContainer,
  HeatmapCellHoverHeaderContainer,
  HeatmapCellHoverHeaderWrapper,
  HeatmapCellHoverSectionContainer,
  HeatmapCellHoverSectionWrapper,
} from "./style";
import {
  HeatmapCellHoverHeaderHeadingWrapper,
  HeatmapCellHoverHeaderSubHeadingWrapper,
  HeatmapCellHoverSectionContentWrapper,
} from "../../Typography/Paragraph";

export const HeatmapCellHoverModal = ({
  heatmapCellHoverModal,
  heatmapCellHoverSectionContentWrapper,
  heatmapCellHoverSectionContent,
}) => {
  return (
    <HeatmapCellHoverContainer>
      <HeatmapCellHoverHeaderContainer>
        <HeatmapCellHoverHeaderWrapper>
          <HeatmapCellHoverHeaderHeadingWrapper>
            {heatmapCellHoverModal}
          </HeatmapCellHoverHeaderHeadingWrapper>
          <HeatmapCellHoverHeaderSubHeadingWrapper>
            User Activity
          </HeatmapCellHoverHeaderSubHeadingWrapper>
        </HeatmapCellHoverHeaderWrapper>
        <MapModalVehicleMarkerCrossIcon />
      </HeatmapCellHoverHeaderContainer>
      <HeatmapCellHoverSectionContainer>
        <HeatmapCellHoverSectionWrapper>
          <HeatmapCellHoverSectionContentWrapper>
            {heatmapCellHoverSectionContentWrapper}
          </HeatmapCellHoverSectionContentWrapper>
          <HeatmapCellHoverSectionContentWrapper>
            {heatmapCellHoverSectionContent}
          </HeatmapCellHoverSectionContentWrapper>
        </HeatmapCellHoverSectionWrapper>
      </HeatmapCellHoverSectionContainer>
      <HeatmapCellHoverSectionContainer>
        <HeatmapCellHoverSectionWrapper>
          <HeatmapCellHoverSectionContentWrapper>
            {heatmapCellHoverSectionContentWrapper}
          </HeatmapCellHoverSectionContentWrapper>
          <HeatmapCellHoverSectionContentWrapper>
            {heatmapCellHoverSectionContent}
          </HeatmapCellHoverSectionContentWrapper>
        </HeatmapCellHoverSectionWrapper>
      </HeatmapCellHoverSectionContainer>
      <HeatmapCellHoverSectionContainer>
        <HeatmapCellHoverSectionWrapper>
          <HeatmapCellHoverSectionContentWrapper>
            {heatmapCellHoverSectionContentWrapper}
          </HeatmapCellHoverSectionContentWrapper>
          <HeatmapCellHoverSectionContentWrapper>
            {heatmapCellHoverSectionContent}
          </HeatmapCellHoverSectionContentWrapper>
        </HeatmapCellHoverSectionWrapper>
      </HeatmapCellHoverSectionContainer>
    </HeatmapCellHoverContainer>
  );
};
