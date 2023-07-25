import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    header: `‘Noto Sans KR’, sans-serif`,
    body: `‘Noto Sans KR’, sans-serif`,
  },
  colors: {
    primary: " rgba(38, 142, 255, 1)",
    secondary: "rgba(0, 0, 0, 0.5)",
    tertiary: "rgba(67, 67, 67, 1)",
    quaternary: "rgba(191, 191, 191, 1)",
    customRed: "rgba(215, 0, 21, 1)",
  },
  components: {
    Checkbox: {
      variants: {
        test: {
          control: {
            borderRadius: 0,
            background: "red",
          },
        },
      },
    },
  },
});

export default theme;
