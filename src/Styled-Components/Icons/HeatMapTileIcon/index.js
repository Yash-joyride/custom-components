import IconWrapper from "../IconWrapper";

const HeatMapTileIcon = ({ fill, fillOpacity }) => {
  return (
    <IconWrapper>
      <svg
        width="36"
        height="42"
        viewBox="0 0 36 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 1L35.3205 11V31L18 41L0.679491 31V11L18 1Z"
          fill={fill}
          fill-opacity={fillOpacity}
          stroke="#CECECE"
          stroke-opacity="0.8"
          stroke-width="0.5"
        />
      </svg>
    </IconWrapper>
  );
};

export default HeatMapTileIcon;
