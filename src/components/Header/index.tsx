import { Box, Typography, styled, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();

  return (
    <StyledHeader
      sx={{
        borderBottom: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "border.primary",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.text.primary})`,
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        Ilyas boukhechem
      </Typography>
    </StyledHeader>
  );
}

const StyledHeader = styled(Box)`
  padding: 24px 96px;
  display: flex;
  justify-content: end;
`;
