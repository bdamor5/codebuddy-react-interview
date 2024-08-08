import { stepsLabels } from "../Stepper/constants/stepsLabels";
import BaseButton from "./../../Base/BaseButton";

const FormsButtons = ({ activeStep, handleBack, handleSave, handleComplete }) => {
  return (
    <div className="flex w-full scale-95 flex-col justify-center gap-4 pt-0 md:scale-100 md:flex-row md:pt-2">
      <BaseButton
        variant="contained"
        sx={{ backgroundColor: "#b4b4b4", "&:hover": { backgroundColor: "grey" } }}
        disabled={activeStep === 0}
        onClick={handleBack}
      >
        Back
      </BaseButton>

      <BaseButton variant="contained" color="success" onClick={handleSave}>
        Save
      </BaseButton>

      <BaseButton
        variant="contained"
        onClick={handleComplete}
        disabled={activeStep === stepsLabels.length - 1}
      >
        Save & Next
      </BaseButton>
    </div>
  );
};

export default FormsButtons;
