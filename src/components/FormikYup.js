import React from "react";
import { render } from "react-dom";
import { withFormik } from "formik";
import Yup from "yup";

// Formikで覆う関数
// Destructuringで各値にpropsを代入
const MyInnerForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
// 表示するコンポーネントを定義
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: "block" }}>Email</label>
      <input id="email" placeholder="Enter your email" type="text"
        value={values.email} onChange={handleChange} onBlur={handleBlur}
        className={ errors.email && touched.email ? "text-input error" : "text-input" } />
      {
        errors.email &&
        touched.email &&
        <div className="input-feedback">{errors.email}</div>
      }
      <button type="button" className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  );
};

const EnhancedForm = withFormik({
  mapPropsToValues: () => (
    { email: "" }
  ),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
})(MyInnerForm);

const FormikYup = () => (
  <div className="app">
    <EnhancedForm />
  </div>
);


export default FormikYup;
