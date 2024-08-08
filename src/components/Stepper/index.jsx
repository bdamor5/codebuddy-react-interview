import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { stepsLabels } from "./constants/stepsLabels";
import { CustomStyledStepperConnector } from "./utils/CustomStyledStepperConnector";
import CustomStepperIcon from "./components/CustomStepperIcon";

const StepperComponent = ({ activeStep, completed, handleStep }) => {
  return (
    <div className="hidden w-full md:block">
      <Stepper nonLinear activeStep={activeStep} connector={<CustomStyledStepperConnector />}>
        {stepsLabels.map((label, index) => (
          <Step
            key={index}
            completed={completed[index]}
            onClick={() => handleStep(index)}
            sx={{
              border:
                (completed[index - 1] && index >= activeStep) ||
                completed[index] ||
                activeStep === index
                  ? `2px solid #c4c4c4`
                  : "none",
              cursor:
                activeStep === index ||
                (completed[index - 1] && index > activeStep) ||
                completed[index]
                  ? "pointer"
                  : "default",
              background: activeStep === index ? "#eaeaf0" : "none",
              padding: 1,
              borderRadius: 10,
              margin: "0 10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <StepLabel
              StepIconComponent={CustomStepperIcon}
              sx={{
                color:
                  (completed[index - 1] && index > activeStep) || completed[index]
                    ? "inherit"
                    : "grey",
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperComponent;
