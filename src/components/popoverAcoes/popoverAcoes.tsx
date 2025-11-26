import { Button, Divider, Popover, Typography } from "@mui/material";
import { colorPalette } from "../../theme";
import type { PopoverAcoesProps } from "./popoverAcoes.types";

const PopoverAcoes = ({
  id,
  open,
  anchorEl,
  handleFecharPopoverAcoes,
  actions,
}: PopoverAcoesProps) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleFecharPopoverAcoes}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      slotProps={{
        paper: {
          elevation: 1,
        },
      }}
    >
      {actions.map((a, i) => (
        <div key={a.label}>
          <Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: ".5rem",
              }}
            >
              {a.icon}
              <Typography
                color={colorPalette.neutral[500]}
                textTransform={"none"}
              >
                {a.label}
              </Typography>
            </div>
          </Button>
          {i < actions.length - 1 && <Divider />}
        </div>
      ))}
    </Popover>
  );
};

export default PopoverAcoes;
