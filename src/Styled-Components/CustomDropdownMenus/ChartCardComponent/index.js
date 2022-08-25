import {
  ChartCardWrapper,
  ChartCardContentHeaderWrapper,
  ChartCardContentSubHeaderWrapper,
  ChartCardContentWrapper,
  ChartCardIconWrapper,
} from "./style";

export const ChartCardComponent = ({ title, caption, icon }) => {
  return (
    <ChartCardWrapper>
      <ChartCardIconWrapper>{icon}</ChartCardIconWrapper>
      <ChartCardContentWrapper>
        <ChartCardContentHeaderWrapper>{title}</ChartCardContentHeaderWrapper>
        <ChartCardContentSubHeaderWrapper>
          {caption}
        </ChartCardContentSubHeaderWrapper>
      </ChartCardContentWrapper>
    </ChartCardWrapper>
  );
};
