import { Person, Lightbulb, Favorite, Computer } from "@mui/icons-material";
import {
  styled,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { useState } from "react";

const actions = [
  { icon: <Person />, name: "Introduction" },
  { icon: <Lightbulb />, name: "Skills" },
  { icon: <Favorite />, name: "Passion" },
  { icon: <Computer />, name: "Project" },
];

export default function ButtonNavigation() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledSpeedDial
      ariaLabel="SpeedDial basic example"
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="down"
      icon={<SpeedDialIcon />}
      FabProps={{
        sx: {
          bgcolor: "secondary.main",
          color: "primary.main",
          "&:hover": {
            bgcolor: "secondary.main",
          },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          slotProps={{
            tooltip: {
              sx: { bgcolor: "secondary.main", color: "primary.main" },
            },
          }}
          FabProps={{
            sx: {
              bgcolor: "secondary.main",
              color: "primary.main",
              "&:hover": {
                bgcolor: "secondary.main",
              },
            },
          }}
        />
      ))}
    </StyledSpeedDial>
  );
}

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "fixed",
  right: 20,
  top: 110,
  bottom: 110,
}));
