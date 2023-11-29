"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, PaletteMode, styled } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
import { selectTheme } from "@/redux/selectors";
import { appTheme } from "@/utils/theme";
import { useMemo } from "react";
import Header from "@/components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle({
  MuiTooltipPopper: {
    background: "red",
  },
});

export default function App({ children }: { children: React.ReactNode }) {
  const { theme } = useAppSelector(selectTheme);

  const getTheme = useMemo(
    () => createTheme(appTheme(theme === "dark" ? "dark" : "light")),
    [theme]
  );

  return (
    <ThemeProvider theme={getTheme}>
      <StyledApp
        id="app"
        sx={{ bgcolor: "background.default", color: "text.primary" }}
      >
        <Header />
        {children}
      </StyledApp>
    </ThemeProvider>
  );
}

const StyledApp = styled(Box)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
