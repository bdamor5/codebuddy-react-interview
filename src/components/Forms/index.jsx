import FormLayout from "../../Layout/FormLayout";
import { FormTextData } from "./contants/FormTextData";
import { Form, Formik } from "formik";
import { Fragment, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  firstFormInitialValues,
  secondFormInitialValues,
  thirdFormInitialValues,
} from "./helpers/initialValues";
import { firstFormSchema, secondFormSchema, thirdFormSchema } from "./helpers/schema";
import { firstFormFields, secondFormFields, thirdFormFields } from "./helpers/formFields";

const FormContainer = ({ activeStep, formRef }) => {
  const { currentSelectedFormData } = useSelector((state) => state.formReducer);

  //this memo will calculcate current step form's data
  let { heading, subHeading, finalFormInitialValues, finalFormSchema, finalFormFieldsArr } =
    useMemo(() => {
      const { heading, subHeading } = FormTextData[activeStep];

      let finalFormInitialValues, finalFormSchema, finalFormFieldsArr;

      switch (activeStep) {
        case 0:
          finalFormInitialValues = firstFormInitialValues;
          finalFormSchema = firstFormSchema;
          finalFormFieldsArr = firstFormFields;
          break;
        case 1:
          finalFormInitialValues = secondFormInitialValues;
          finalFormSchema = secondFormSchema;
          finalFormFieldsArr = secondFormFields;
          break;
        case 2:
        default:
          finalFormInitialValues = thirdFormInitialValues;
          finalFormSchema = thirdFormSchema;
          finalFormFieldsArr = thirdFormFields;
          break;
      }

      return { heading, subHeading, finalFormInitialValues, finalFormSchema, finalFormFieldsArr };
    }, [activeStep]);

  return (
    <FormLayout heading={heading} subHeading={subHeading}>
      <Formik
        initialValues={finalFormInitialValues(
          Object.keys(currentSelectedFormData || {})?.length
            ? currentSelectedFormData[activeStep]
            : "",
        )}
        validationSchema={finalFormSchema}
        enableReinitialize
        innerRef={formRef}
      >
        {(form) => (
          <Form>
            <div className="my-5 flex flex-col gap-6">
              {finalFormFieldsArr?.map((fieldComponent, index) => (
                <Fragment key={index}>{fieldComponent(form)}</Fragment>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </FormLayout>
  );
};

export default FormContainer;
