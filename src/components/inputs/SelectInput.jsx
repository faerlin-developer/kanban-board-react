function SelectInput({ label, name, value, onChange, options }) {
  return (
    <>
      {label !== "" && <label className="block text-sm font-semibold mb-1">{label}</label>}
      <select className="border border-gray-400 w-full p-1 mb-2 text-xs rounded-full" name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectInput;
