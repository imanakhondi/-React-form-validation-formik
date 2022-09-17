import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./common/Input";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(6, "at least 6 characters"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string().required("password is required"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log(formik.touched);

  return (
    <div className="u-section">
      <div className="u-container-layout">
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="email" label="Email" />
          <Input formik={formik} name="password" label="Password" />
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
