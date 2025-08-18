function TextAreaInput({ label, name, value, onChange, required = false }) {
  return (
    <>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <textarea
        className="border border-gray-400 rounded-lg w-full p-1 mb-2 text-xs"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </>
  );
}

export default TextAreaInput;
