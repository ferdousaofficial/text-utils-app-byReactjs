export default function ReplaceInput({ inputOnChange, inputValue }) {
  return (
    <input
      type="text"
      placeholder="Word"
      className="w-[45%] text-sm rounded-md px-4 py-2 outline-none"
      onChange={inputOnChange}
      value={inputValue}
    />
  );
}
