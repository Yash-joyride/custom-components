import IconWrapper from "../IconWrapper";

const VisaIcon = () => {
  return (
    <IconWrapper>
      <svg
        width="45"
        height="25"
        viewBox="0 0 45 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="45" height="25" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_275_1152"
              transform="translate(0 -0.4) scale(0.00666667 0.012)"
            />
          </pattern>
          <image
            id="image0_275_1152"
            width="150"
            height="150"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </IconWrapper>
  );
};

export default VisaIcon;