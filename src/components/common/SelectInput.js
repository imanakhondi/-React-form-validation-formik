const SelectInput = ({ formik, selectOptions ,name}) => {
  return (
    <div className="formControl">
      <select name={name} {...formik.getFieldProps("nationality")}>
        {selectOptions.map((item) => (
          <option value={item.value} key={item.value}>{item.label}</option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
            <div className="error">{formik.errors[name]}</div>
          )}
    </div>
  );
};

export default SelectInput;
