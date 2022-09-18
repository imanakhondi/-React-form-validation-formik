const BooleanCheckBox = ({formik,name,label}) => {
  return (
    <div className="formControl">
      <input
        type="checkbox"
        id={name}
        name={name}
        value={true}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        checked={formik.values[name]}
      />
      <label htmlFor={name}> {label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default BooleanCheckBox;
