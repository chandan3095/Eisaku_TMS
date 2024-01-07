import Select from "react-dropdown-select";

const CustomDropdown = (props) => {
  const { label, optionData, onChange, onBlur, name, value } = props;

  // console.log({ value });
  return (
    <div className="form-group">
      {label && <label className="text-capitalize">{label}</label>}
      <Select
        options={optionData}
        labelField="label"
        valueField="value"
        onChange={(values) => onChange(values)}
      />
    </div>
  );
};

export default CustomDropdown;
