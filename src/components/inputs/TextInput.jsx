function TextInput({ label, name, value, onChange, required = false }) {
  return (
    <>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        type="text"
        className="text-xs border border-gray-400 rounded-full w-full p-1 mb-2"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

/**
 * <input
        name={name}
        type='text'
        className='w-full p-2 border rounded-lg'
        value={value}
        onChange={onChange}
        required={required}
      />
 */

export default TextInput;
