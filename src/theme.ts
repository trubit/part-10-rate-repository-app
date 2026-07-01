import { Platform } from "react-native";

const theme = {
  colors: {
    primary: "#0366d6",
    textPrimary: "#24292e",
    textSecondary: "#586069",
    appBarBackground: "#24292e", // ← Added as requested
    background: "#e1e4e8",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
};

export default theme;
