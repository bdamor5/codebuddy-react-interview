import StepperComponent from "../components/Stepper";
import Forms from "../components/Forms";
import FormsButtons from "../components/FormsButtons";
import { useMemo, useRef, useState } from "react";
import { stepsLabels } from "../components/Stepper/constants/stepsLabels";
import { setNestedObjectValues } from "formik";
import { SUCCESS_ALERT } from "../store/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  displayAlertMessage,
  submitFormDetails,
  updateSelectedForm,
} from "../store/actions/formActions";
import { omit } from "lodash";

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  //three refs for each form
  const formRefs = [useRef(), useRef(), useRef()];

  const dispatch = useDispatch();

  const { currentSelectedFormData } = useSelector((state) => state.formReducer);

  const totalSteps = stepsLabels.length;

  //calculating current form's ref
  const finalFormRef = useMemo(() => formRefs[activeStep], [activeStep]);

  //will get invoked when clicked on save & next btn
  const handleNext = () => {
    const newActiveStep =
      activeStep === totalSteps - 1 && !allStepsCompleted()
        ? stepsLabels.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  //will get invoked when clicked on back button
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  //will get invoked when clicked on the stepper labels directly
  const handleStep = (step) => {
    if (step <= activeStep || completed[step - 1]) {
      setActiveStep(step);
    }
  };

  //will get invoke when clicked on save & next btn
  const handleComplete = async () => {
    if (await checkFieldsError()) return;

    markStepCompleted();
    dispatch(displayAlertMessage(SUCCESS_ALERT, "Your response was saved successfully!"));
    handleNext();
  };

  //will get invoked when clicked on save btn
  const handleSave = async () => {
    if (await checkFieldsError()) return;

    markStepCompleted();
    dispatch(displayAlertMessage(SUCCESS_ALERT, "Your response was saved successfully!"));

    //when the stepper is at the last form step , then we will make the submit api call
    if (activeStep === totalSteps - 1) {
      submitFinalForm();
    }
  };

  //will check whether the current field has any field errors pending or not
  const checkFieldsError = async () => {
    const validationErrors = await finalFormRef.current.validateForm();

    if (Object.keys(validationErrors).length) {
      finalFormRef.current.setTouched(setNestedObjectValues(validationErrors, true));
      return true;
    }

    dispatch(updateSelectedForm({ [activeStep]: finalFormRef.current.values }));
    return false;
  };

  const markStepCompleted = () => {
    setCompleted((prevCompleted) => ({
      ...prevCompleted,
      [activeStep]: true,
    }));
  };

  //submit api to submit form fields
  const submitFinalForm = () => {
    const lastFormFields = finalFormRef.current.values;

    const payload = {
      ...currentSelectedFormData[0],
      ...currentSelectedFormData[1],
      ...lastFormFields,
      phoneNumber: lastFormFields.nationalNumber,
    };

    dispatch(submitFormDetails(omit(payload, ["acceptTermsAndCondition", "nationalNumber"])));
  };

  const allStepsCompleted = () => Object.keys(completed).length === totalSteps;

  return (
    <div className="mt-10 flex h-full justify-center">
      <div className="flex w-full scale-75 flex-col items-start justify-between gap-3 rounded-xl bg-white py-3 shadow-lg md:max-w-[900px] md:scale-90 md:p-5 lg:scale-100">
        <StepperComponent activeStep={activeStep} completed={completed} handleStep={handleStep} />
        <Forms activeStep={activeStep} formRef={finalFormRef} />
        <FormsButtons
          activeStep={activeStep}
          handleBack={handleBack}
          handleSave={handleSave}
          handleComplete={handleComplete}
        />
      </div>
    </div>
  );
};

export default Home;
