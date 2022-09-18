import { useFormik } from "formik";
import * as Yup from "yup";
import CheckBoxInput from "./common/CheckBoxInput";
import Input from "./common/Input";
import RadioInput from "./common/RadioInput";
import SelectInput from "./common/SelectInput";

const radioOptions = [
  { value: "0", label: "male" },
  { value: "1", label: "female" },
];
const checkBoxOptions = [
  { value: "frontend", label: "frontend" },
  { value: "backend", label: "backend" },
];

const selectOptions = [
  { value: "", label: "selest nationality..." },
  { value: "IR", label: "Iran" },
  { value: "US", label: "USA" },
];

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  passwordConfirm: "",
  gender: "",
  intrests: [],
  nationality: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(6, "at least 6 characters"),
  phoneNumber: Yup.string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "invalid phone number"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .required("password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirm: Yup.string()
    .required("password confirmation is required")
    .oneOf([Yup.ref("password"), null], "password must match"),
  gender: Yup.string().required("gender is required"),
  intrests: Yup.array().required("intrests is required").min(1),
  nationality: Yup.string().required("nationality is required"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  console.log(formik.touched);

  return (
    <div className="u-section">
      <div className="u-container-layout">
        <form onSubmit={formik.handleSubmit}>
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="phoneNumber" label="Phone Number" />
          <Input formik={formik} name="email" label="Email" />
          <Input formik={formik} name="password" label="Password" />
          <Input
            formik={formik}
            name="passwordConfirm"
            label="Password confirmation"
          />
          <RadioInput
            formik={formik}
            name="gender"
            radioOptions={radioOptions}
          />
          <CheckBoxInput
            formik={formik}
            name="intrests"
            checkBoxOptions={checkBoxOptions}
          />
          <SelectInput
            formik={formik}
            name="nationality"
            selectOptions={selectOptions}
          />

          <button type="submit" disabled={!formik.isValid}>
            add
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
