import { styled } from "@mui/material";

export const CustomStyledStepperRootIcon = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "darkgray",
  }),
  "& .CheckCircleIcon-completedIcon": {
    color: "green",
    zIndex: 1,
    fontSize: 18,
  },
  "& .PanoramaFishEyeIcon-circle": {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));
