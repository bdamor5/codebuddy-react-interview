import { Button } from "@mui/material";

const BaseButton = (props) => {
  return (
    <Button {...props} sx={{ textTransform: "none", borderRadius: "15px", ...props.sx }}>
      {props?.children}
    </Button>
  );
};

export default BaseButton;
