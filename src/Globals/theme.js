const colors = {
  // ---------------------------
  // Typography colours
  colourTextPrimary: "rgba(31, 31, 31, 1)",
  colourTextSecondary: "rgba(120, 120, 120, 1)",
  colourTextDisabled: "rgba(210, 210, 210, 1)",
  colourTextReversePrimary: "rgba(252, 252, 252, 1)",
  colourTextReverseSecondary: "rgba(253, 253, 253, 1)",
  colourTextReverseDisabled: "rgba(254, 254, 254, 1)",

  // -----------------------------
  // Brand colours
  colourBrandPrimary: "rgba(253, 81, 81, 1)",
  colourBrandPrimaryDark: "rgba(152, 49, 49, 1)",
  colourBrandPrimaryLight: "rgba(254, 151, 151, 1)",
  colourBrandPrimaryTint: "rgba(255, 203, 203, 1)",
  colourBrandPrimaryTintLight: "rgba(254, 234, 234, 1)",
  colourBrandPrimaryTintExtraLight: "rgba(255, 248, 248, 1)",
  // -----------------------------
  // Material colours
  colourMaterialPrimary: "rgba(255, 255, 255, 1)",
  colourMaterialPrimaryHover: "rgba(248, 248, 248, 1)",
  colourMaterialSecondary: "rgba(255, 246, 246, 1)",
  colourMaterialSecondaryHover: "rgba(249, 223, 223, 1)",
  colourMaterialReversePrimary: "rgba(39, 39, 39, 1)",
  colourMaterialReversePrimaryHover: "rgba(0, 0, 0, 1)",
  colourMaterialPrimaryBackground: "rgba(251, 251, 251, 1)",
  colourMaterialBorder: "rgba(232, 232, 232, 1)",
  // -----------------------------
  // state colours
  colourStategreyLight: "rgba(209, 241, 222, 1)",
  colourStateSuccess: "rgba(6, 216, 90, 1)",
  colourStateSuccessDark: "rgba(6, 216, 90, 1)",
  colourStateSuccessLight: "rgba(106, 232, 156, 1)",
  colourStateSuccessTint: "rgba(181, 244, 206, 1)",
  colourStateSuccessTintLight: "rgba(225, 250, 235, 1)",
  colourStateSuccessTintExtraLight: "rgba(245, 254, 249, 1)",
  colourStateError: "rgba(255, 57, 93, 1)",
  colourStateErrorDark: "rgba(153, 34, 56, 1)",
  colourStateErrorLight: "rgba(255, 136, 158, 1)",
  colourStateErrorTint: "rgba(255, 196, 207, 1)",
  colourStateErrorTintLight: "rgba(255, 231, 235, 1)",
  colourStateErrorTintExtraLight: "rgba(255, 247, 249, 1)",
  colourStateWarning: "rgba(255, 180, 35, 1)",
  colourStateWarningDark: "rgba(153, 108, 21, 1)",
  colourStateWarningLight: "rgba(255, 210, 123, 1)",
  colourStateWarningTint: "rgba(255, 233, 190, 1)",
  colourStateWarningTintLight: "rgba(255, 246, 228, 1)",
  colourStateWarningTintExtraLight: "rgba(255, 252, 246, 1)",
  colourStateInfo: "rgba(149, 149, 149, 1)",
  colourStateInfoDark: "rgba(89, 89, 89, 1)",
  colourStateInfoLight: "rgba(191, 191, 191, 1)",
  colourStateInfoTint: "rgba(224, 224, 224, 1)",
  colourStateInfoTintLight: "rgba(242, 242, 242, 1)",
  colourStateInfoTintExtraLight: "rgba(251, 251, 251, 1)",

  // -----------------------------
  // Data colours
  colourData1: "rgba(253, 81, 81, 1)",
  colourData1Tint: "rgba(254, 234, 234, 1)",
  colourData2: "rgba(255, 164, 27, 1)",
  colourData2Tint: "rgba(255, 244, 227, 1)",
  colourData3: "rgba(155, 27, 255, 1)",
  colourData3Tint: "rgba(243, 227, 255, 1)",
  hexColourData1: "#FD5151",
  hexColourData2: "#FFA41B",
  hexColourData3: "#9B1BFF",
  // ---------------------------
  // Map Pin Colors
  Parking: "rgba(6, 132, 64, 1)",
  Restricted: "rgba(172, 46, 46, 1)",
  Service: "rgba(143, 100, 17, 1)",
  SlowSpeed: "rgba(56, 56, 56, 1)",
  Custom: "rgba(103, 17, 143, 1)",

  //Color Box Shadow
  colorBoxShadow: "rgba(0, 0, 0, 0.1)",
};

const fontFamily = {
  fontWorkSansThin: "WorkSansThin",
  fontWorkSansRegular: "WorkSansRegular",
  fontWorkSansLight: "WorkSansLight",
  fontWorkSansMedium: "WorkSansMedium",
  fontWorkSansBold: "WorkSansBold",
};

const fontWeight = {
  fontWeight_400: "400",
  fontWeight_500: "500",
  fontWeight_900: "900",
};

const fontSize = {
  fontSize7_5: "7.5px",
  fontSize14: "14px",
  fontSize_10: "10px",
  fontSize_14: "14px",
  fontSize_16: "16px",
  fontSize_12: "12px",
  fontSize_18: "18px",
  fontSize_24: "24px",
  fontSize_30: "30px",
};

export default {
  ...colors,
  ...fontFamily,
  ...fontSize,
  ...fontWeight,
};
