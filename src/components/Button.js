export default function Button({ buttonText, feature }) {
  return (
    <button
      className={`bg-indigo-500 px-6 py-4 rounded-md text-white mx-3 my-2 font-text transition-all duration-300 hover:scale-110 text-sm `}
      onClick={feature}
    >
      {buttonText}
    </button>
  );
}
