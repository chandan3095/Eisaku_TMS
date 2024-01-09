import Select from "react-dropdown-select";

const CustomDropdown = (props) => {
  const { label, optionData, onChange, name, values,disabled } = props;

  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>}
      <Select
        options={optionData}
        labelField="label"
        valueField="value"
        name={name}
        values={values}
        onChange={onChange}
        disabled={disabled}
        style={{ backgroundColor: disabled ? '#e9ecef' : '#fff' }}
      />
    </div>
  );
};

export default CustomDropdown;
