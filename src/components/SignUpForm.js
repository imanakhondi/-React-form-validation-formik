import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema=Yup.object({
    name:Yup.string().required("name is required").min(6,"at least 6 characters"),
    email:Yup.string().email().required("email is required"),
    password:Yup.string().required("password is required")
})

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
          <div className="formControl">
            <label>name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>
          <div className="formControl">
            <label>email</label>
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="formControl">
            <label>password</label>
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <button type="submit">add</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
