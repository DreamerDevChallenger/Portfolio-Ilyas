"use client";

import { Button } from "@mui/material";
import { useAppDispatch } from "@/redux/hooks";
import { toggleTheme } from "@/redux/reducers/theme";
import styled from "styled-components";
import ButtonNavigation from "@/components/ButtonNavigation";
import Introduction from "@/components/Introduction";

export default function Home() {
  const dispatch = useAppDispatch();

  return (
    <StyledMain className="main">
      {/* <Button onClick={() => dispatch(toggleTheme())}>click</Button> */}
      <ButtonNavigation />
      <Introduction />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;

  section {
    padding: 36px 24px;
  }
`;
