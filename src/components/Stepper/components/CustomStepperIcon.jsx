import React from "react";
import { CustomStyledStepperRootIcon } from "../utils/CustomStyledStepperRootIcon";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const CustomStepperIcon = (props) => {
  const { active, completed, className } = props;

  return (
    <CustomStyledStepperRootIcon ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircleIcon className="CheckCircleIcon-completedIcon" />
      ) : (
        <PanoramaFishEyeIcon className="PanoramaFishEyeIcon-circle" />
      )}
    </CustomStyledStepperRootIcon>
  );
};

export default CustomStepperIcon;
