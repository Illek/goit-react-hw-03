import s from "./ContactForm.module.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import clsx from "clsx";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string("It`s should be name, baby")
    .matches(
      /^[A-Za-zА-Яа-яЁё\s\-']+$/,
      "If your dad isn't Elon Musk, there's a mistake, sweetie 🤨"
    )
    .min(3, "Too Short, sugar 😯")
    .max(15, "Too long, sugar 😩")
    .required("Tell... Me... Your... Name! 😡"),

  number: Yup.string()
    .matches(
      /^\+?[0-9-]+$/,
      "Phone numbers are spelled with numbers, Pumpkin 😘 "
    )
    .min(3, "Too Short, sugar 😯")
    .max(50, "Too long, sugar 😩")
    .required("Give... Me... Your... Number! 😡"),
});

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

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        const validPass =
          !errors.name && touched.name && !errors.number && touched.number;
        return (
          <Form className={s.form}>
            <label className={clsx(s.label)} htmlFor={nameField}>
              Name
            </label>
            <span className={s.errMsg}>
              <ErrorMessage
                className={s.errMsgTxt}
                name="name"
                component="span"
              />
            </span>
            <Field
              className={clsx(s.field, {
                [s.notValid]: errors.name && touched.name,
              })}
              name="name"
              type="text"
              id={nameField}
            />

            <label className={s.label} htmlFor={numberField}>
              Number
            </label>
            <span className={s.errMsg}>
              <ErrorMessage
                className={s.errMsgTxt}
                name="number"
                component="span"
              />
            </span>
            <Field
              className={clsx(s.field, {
                [s.notValid]: errors.number && touched.number,
              })}
              name="number"
              type="tel"
              id={numberField}
            />

            <button
              className={s.btn}
              type="submit"
              disabled={
                (!validPass && errors.name && touched.name) ||
                (errors.number && touched.number)
              }
            >
              Add contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
