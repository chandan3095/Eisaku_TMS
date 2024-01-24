import Select from "react-dropdown-select";

const CustomDropdown = ({
  label,
  optionData,
  onChange,
  name,
  values,
  disabled,
  errors,
  message,
  multiple = false,
}) => {
  // console.log('name', name, 'value', values);
  return (
    <div className="form-group">
      {label && (
        <label className="text-capitalize">
          {label}
          <span className="text-danger">*</span>
        </label>
      )}
      <Select
        options={optionData}
        labelField="label"
        valueField="value"
        name={name}
        values={values}
        onChange={onChange}
        multi={multiple}
        disabled={disabled}
        style={{ backgroundColor: disabled ? "#e9ecef" : "#fff" }}
      />
      {errors && (
        <div className="text-danger" style={{ fontSize: ".8rem" }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
