import { ColorPicker, useColor } from "react-color-palette";
import { ColorPickerWrapper } from "./style";
import { ColorPickerHeadWrapper } from "../Typography/Paragraph";
import "react-color-palette/lib/css/styles.css";

import { InputField } from "../InputField";

export const ColorPickerComponent = () => {
  const [color, setColor] = useColor("#121212");
  return (
    <ColorPickerWrapper>
      <ColorPickerHeadWrapper>Pick a Colour</ColorPickerHeadWrapper>
      <ColorPicker
        width={170}
        height={170}
        color={color}
        onChange={setColor}
        hideRGB
        hideHSV
      />
      <InputField value={color.hex} />
    </ColorPickerWrapper>
  );
};
