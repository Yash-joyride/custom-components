import React, { useState } from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import { Slider, Tooltip } from "@mui/material";
import { SliderWrapper } from "./style";

const marks = [
  {
    value: 0,
  },
  {
    value: 4.166,
  },
  {
    value: 8.332,
  },
  {
    value: 12.498,
  },
  {
    value: 16.664,
  },
  {
    value: 20.83,
  },
  {
    value: 24.996,
  },
  {
    value: 29.162,
  },
  {
    value: 33.328,
  },
  {
    value: 37.494,
  },
  {
    value: 41.66,
  },
  {
    value: 45.826,
  },
  {
    value: 49.992,
  },
  {
    value: 54.158,
  },
  {
    value: 58.324,
  },
  {
    value: 62.49,
  },
  {
    value: 66.656,
  },
  {
    value: 70.822,
  },
  {
    value: 74.988,
  },
  {
    value: 79.154,
  },
  {
    value: 83.32,
  },
  {
    value: 87.486,
  },
  {
    value: 91.652,
  },
  {
    value: 95.818,
  },
  {
    value: 100,
  },
];

export const SliderComponent = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;
  const [value2, setValue2] = React.useState([25, 75]);

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

  // console.log(value2);
  return (
    <SliderWrapper>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </SliderWrapper>
  );
};

export const HourScaledSliderComponent = () => {
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value);
  }

  const [value, setValue] = React.useState([20.83, 62.49]);
  // console.log(marks.findIndex((mark) => mark.value === value[1]));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SliderWrapper>
      <Slider
        aria-label="Restricted values"
        value={value}
        valueLabelFormat={valueLabelFormat}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleChange}
      />
    </SliderWrapper>
  );
};

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "2em",
          color: "yellow",
          backgroundColor: "red",
        },
      },
    },
  },
});

export const TooltipHourScaledSliderComponent = () => {
  const [value, setValue] = React.useState([20.83, 62.49]);
  const [pointer1, setPointer1] = useState(
    marks.findIndex((mark) => mark.value === value[0])
  );
  const [pointer2, setPointer2] = useState(
    marks.findIndex((mark) => mark.value === value[1])
  );

  const SliderTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#272727",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#272727",
      borderRadius: "20px",
      maxWidth: "auto",
      maxHeight: "auto",
      textAlign: "center",
      padding: "4px 10px",
      top: "15px",
    },
  }));

  // const SliderTooltip = styled(({ className, ...props }) => <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />)(`
  //     color: lightblue;
  //     background-color: green;
  //     font-size: 1.5em;
  // `);

  function valueLabelFormat(value) {
    // console.log(value);
    // setPointer2(marks.findIndex((mark) => mark.value === value));

    return marks.findIndex((mark) => mark.value === value);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPointer1(marks.findIndex((mark) => mark.value == newValue[0]));
    setPointer2(marks.findIndex((mark) => mark.value == newValue[1]));
  };

  return (
    <SliderWrapper>
      {/* <ThemeProvider theme={theme}> */}
      <SliderTooltip title={`${pointer1} - ${pointer2} hrs`} placement="top">
        <div>
          <Slider
            aria-label="Restricted values"
            value={value}
            valueLabelFormat={valueLabelFormat}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={handleChange}
          />
        </div>
      </SliderTooltip>
      {/* </ThemeProvider> */}
    </SliderWrapper>
  );
};
