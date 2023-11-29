import Kingthings_Foundation from "@/assets/font/KingthingsFoundation.ttf";

import { PaletteMode } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      primary: string;
    };
    accent: {
      primary: string;
    };
  }
  interface PaletteOptions {
    border?: {
      primary?: string;
    };
    accent?: {
      primary?: string;
    };
  }
}

export const appTheme = (mode: PaletteMode) => ({
  components: {
    // Name of the component
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: "8px 24px",
          fontSize: "14px",
          fontFamily: "inherit",
          fontWeight: "bold",
        },
      },
    },
  },

  typography: {
    allVariants: {
      fontFamily: "inherit",
    },
    p: {
      fontSize: "26px",
    },
    h1: {
      fontSize: "36px",
    },
    h2: {
      fontSize: "32px",
    },
  },

  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1261a5",
          },
          secondary: {
            main: "#bfe0f8",
          },
          background: {
            default: "#edf6fd",
          },
          text: {
            primary: "#051b2e",
          },
          border: {
            primary: "rgba(0, 0, 0, 0.1)",
          },
          accent: {
            primary: "#177cd3",
          },
        }
      : mode === "dark" && {
          primary: {
            main: "#5aa8ed",
          },
          secondary: {
            main: "#072840",
          },
          background: {
            default: "#020b12",
          },
          text: {
            primary: "#d1e7fa",
          },
          border: {
            primary: "rgba(255, 255, 255, 0.1)",
          },
          accent: {
            primary: "#2c90e8",
          },
        }),
  },
});
