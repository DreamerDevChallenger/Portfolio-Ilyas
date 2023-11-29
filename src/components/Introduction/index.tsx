import { Typography } from "@mui/material";
import styled from "styled-components";

export default function Introduction() {
  return (
    <StyledIntroduction>
      <Typography variant="h1">
        Hello, i&apos;m <br /> Ilyas Boukhechem
      </Typography>
      <br />
      <Typography fontStyle={"italic"}>
        FullStack React - NodeJS Developer
      </Typography>
      <Typography>
        I create the website of your dream that highlights your project
      </Typography>
    </StyledIntroduction>
  );
}

const StyledIntroduction = styled.section`
  padding: 36px 24px;
  text-align: center;
`;
