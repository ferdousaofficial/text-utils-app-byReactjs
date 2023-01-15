export default function WordACha(props) {
  return (
    <div className="space-x-3 text-slate-800 dark:text-white flex items-center justify-center ml-3">
      <span>
        Word:{" "}
        {
          props.text.split(" ").filter((element) => {
            return element.length != 0;
          }).length
        }
      </span>
      <span>Characters: {props.text.length}</span>
    </div>
  );
}
