export default function TextField(props) {
  return (
    <textarea
      cols="30"
      rows="10"
      className="w-full outline-none rounded-md dark:bg-slate-500  bg-[#f1f1f1] dark:text-white text-slate-800 px-6 py-6 font-text leading-7 dark:placeholder-slate-100 text-sm placeholder-slate-800"
      placeholder="Write your text here..."
      onChange={props.handelOnChange}
      value={props.text}
    ></textarea>
  );
}
