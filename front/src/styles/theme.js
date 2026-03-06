// UI / UX 가이드에 따른 스타일 정의
const theme = {};

theme.PALETTE = {
  // 브랜드 컬러 (Turquoise)
  primary: {
    50: "#E9FCF9",
    100: "#D3F8F3",
    200: "#A6F2E8",
    300: "#7AEBDC",
    400: "#4EE4D0",
    500: "#21DEC5",
    600: "#1BB19D",
    700: "#148576",
    800: "#0D594F",
    900: "#072C27",

    main: "#21DEC5",
    hover: "#1BB19D",
    active: "#148576",
    disabled: "#D3F8F3",
  },

  // CTA 버튼 (Yellow)
  secondary: {
    100: "#FFF9E6",
    200: "#FFF2CC",
    300: "#FFE699",
    400: "#FFDB66",
    500: "#FFD159",
    600: "#E6BC50",
    700: "#CCA746",

    main: "#FFD159",
    hover: "#E6BC50",
    active: "#CCA746",
  },

  // 배지 / 강조 (Purple)
  accent: {
    100: "#F4E9FF",
    200: "#E4CCFF",
    300: "#C799FF",
    400: "#AA66FF",
    500: "#6F00FF",
    600: "#5900CC",
    700: "#430099",

    main: "#6F00FF",
    hover: "#5900CC",
    active: "#430099",
  },

  white: "#ffffff",

  gray: {
    50: "#F8F9FA",
    100: "#F1EBF5",
    200: "#AEA8B2",
    300: "#605866",
    400: "#CED4DA",
    500: "#ADB5BD",
    600: "#868E96",
    700: "#495057",
  },

  error: "#EB6144",

  background: {
    white: "#FFFFFF",
    gray: "#F1EBF5",
    main: "#F8F9FA",
  },
};

theme.FONT_SIZE = {
  h1: "55px",
  h2: "40px",
  h3: "30px",
  h4: "21px",
  h5: "18px",
  h6: "16px",
  h7: "12px",
};

theme.FONT_WEIGHT = {
  thin: "100",
  regular: "400",
  blod: "800",
};

theme.FONT_LINE = {
  h1: "75px",
  h2: "55px",
  h3: "41px",
  h4: "29px",
  h5: "25px",
  h6: "22px",
  h7: "17px",
};

theme.RADIUS = {
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "999px",
};

export default theme;
