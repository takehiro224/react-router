import React from "react";
import { withFormik, Field, Form } from "formik";
import Yup from "yup";

const InnerForm = props => {
  const {
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  console.log(errors);
  return (
    <Form>
      <Field type="text" name="email" onBlur={handleBlur} />
      <input type="text" id="zzz" onChange={handleChange} />
      <input type="submit" disabled={!dirty} />
    </Form>
  );
}
// <form onSubmit={handleSubmit}> と <Form>は一緒
// inputタグでvaluesに値を格納するにはonChange={handleChange}が必要. Fieldタグの場合はonChangeは不要
// inputタグの場合mapPropsToValuesにマップする場合id属性を設定する.Fieldはname属性
const FormikTest = withFormik({
  mapPropsToValues: props => {
    // Formikのデータとして扱うにはname属性をオブジェクトとして返す必要がある
    return (
      {
        email: '',
        zzz: ''
      }
    )
  },
  validationSchema: Yup.object().shape({
      zzz: Yup.string()
        .required('必須')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    // console.log(values);
    setSubmitting(false);
  }
})(InnerForm);

export default FormikTest;
