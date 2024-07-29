// import s from './ContactForm.module.css'
import { Form, Formik, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = () => {
  //
  const initialValues = {
    name: "",
    number: "",
  };

  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string("It`s should be name, baby")
      .min(3, "Too Short, sugar ( . _.)")
      .max(50, "Too long, sugar (O _ O)")
      .required("Required"),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameField}>Name</label>
        <Field name="name" type="text" id={nameField} />
        <label htmlFor={numberField}>Number</label>
        <Field name="number" type="number" id={numberField} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
