import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ReplaceInput from "./ReplaceInput";

export default function Replace({
  text,
  setText,
  showAlert,
  replceFunc,
  setReplceFunc,
}) {
  const [word, setWord] = useState("");
  const [replaceWord, setReplaceWord] = useState("");

  const handelWord = function (e) {
    setWord(e.target.value);
  };
  const handelReplaceWord = function (e) {
    setReplaceWord(e.target.value);
  };

  // replace word function
  const replaceWordFunction = function () {
    if (word.length === 0 || replaceWord.length === 0) {
      showAlert("Please enter a word to replacement the word", "warning");
    } else {
      if (!text.includes(word)) {
        showAlert("The specified word is not in the text", "warning");
      } else {
        setText(text.replaceAll(word, replaceWord));
        showAlert("The specified word has been repleaced", "success");
        setWord("");
        setReplaceWord("");
      }
    }
  };

  // function to close the replace function
  const closeReplaceFunction = function () {
    setReplceFunc(null);
  };

  return (
    replceFunc && (
      <>
        <div className=" bg-[#BFC9CA] mx-auto px-2 py-5 rounded-md mb-8 flex flex-col justify-center items-center  w-11/12  md:w-[50%] sm:w-[70%] lg-[60%] xl:w-[30%] 2xl:w[45%]">
          <div className="w-full pl-10 py-3 space-x-3">
            <ReplaceInput inputValue={word} inputOnChange={handelWord} />
            <ReplaceInput
              inputValue={replaceWord}
              inputOnChange={handelReplaceWord}
            />
          </div>

          <div className="space-x-3 my-3 ">
            <button
              className="before:transition-all before:duration-300 mx-7 rounded-md relative before:absolute before:h-[2px] before:w-full before:bg-[#95A5A6] text-[#657172] before:bottom-[5px] cursor-pointer hover:before:bottom-[3px]"
              onClick={closeReplaceFunction}
            >
              Close
            </button>
            <button
              className="bg-[#95A5A6] py-2 px-5 rounded-md text-white border-2 border-[#95A5A6] transition-all duration-300 hover:bg-transparent hover:text-[#657172]"
              onClick={replaceWordFunction}
            >
              Replace
            </button>
          </div>
        </div>
      </>
    )
  );
}
