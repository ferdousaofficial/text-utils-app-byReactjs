import { useState } from "react";
import Alert from "./Alert";
import BurttonGroup from "./BurttonGroup";
import Replace from "./Replace";
import TextField from "./TextField";
import WordACha from "./WordACha";

export default function TextForm() {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);
  const [replceFunc, setReplceFunc] = useState(null);

  // Handel the onChange event
  const handelOnChange = function (e) {
    setText(e.target.value);
  };

  // function for show the alert
  const showAlert = function (alertText, type) {
    setAlert({ alertText: alertText, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // function for show the replace function
  const showReplceFunc = function () {
    setReplceFunc(true);
  };

  // Conver the text to uppercase
  const convertToUppercase = function () {
    if (text.length === 0) {
      showAlert("Please write something", "warning");
    } else {
      if (text === text.toUpperCase()) {
        showAlert("Your texts is alrady in uppercase", "warning");
      } else {
        showAlert("Your texts has been converted into uppercase", "success");
        setText(text.toUpperCase());
      }
    }
  };

  // Conver the text to lowercase
  const convertToLowercase = function () {
    if (text.length === 0) {
      showAlert("Please write something", "warning");
    } else {
      if (text === text.toLowerCase()) {
        showAlert("Your texts is alrady in lowercase", "warning");
      } else {
        setText(text.toLowerCase());
        showAlert("Your texts has been converted into lowercase", "success");
      }
    }
  };

  // Cleat all texts
  const clearClipboard = function () {
    if (text.length === 0) {
      showAlert("The text field is alresy empty", "warning");
    } else {
      setText("");
      showAlert("The text field has been cleared", "success");
    }
  };

  // speak the texts
  const speak = function () {
    if (text.length === 0) {
      showAlert("Please write something", "warning");
    } else {
      const texts = new SpeechSynthesisUtterance();
      texts.text = text;
      window.speechSynthesis.speak(texts);
    }
  };

  // Remove extra spaces from the text
  const removeExtraSpaces = function () {
    const newText = text.split(/[ ]+/);
    if (text.length === newText.length) {
      showAlert("There are no extra spaces in the text", "warning");
    } else {
      setText(newText.join(" "));
      showAlert("Extra spaces has been removed from the texts", "success");
    }
  };

  // Copy the texts
  const copyText = function () {
    if (text.length === 0) {
      showAlert("Please write something", "warning");
    } else {
      navigator.clipboard.writeText(text);
      showAlert("The texts has been copied", "success");
    }
  };
  return (
    <>
      <div className=" h-28 grid place-content-center">
        <Alert alert={alert} />
      </div>
      <Replace
        text={text}
        setText={setText}
        showAlert={showAlert}
        replceFunc={replceFunc}
        setReplceFunc={setReplceFunc}
      />
      <div className=" w-[85%] mx-auto py-5">
        <h1 className="dark:font-medium font-bold dark:text-white text-slate-800 sm:text-3xl text-2xl pb-5 font-noto">
          Customize your texts
        </h1>
        {/* Text Area */}
        <TextField handelOnChange={handelOnChange} text={text} />
        {/* Buttons */}
        <div className="flex flex-wrap items-center">
          <BurttonGroup
            convertToUppercase={convertToUppercase}
            convertToLowercase={convertToLowercase}
            clearClipboard={clearClipboard}
            speak={speak}
            removeExtraSpaces={removeExtraSpaces}
            copyText={copyText}
            showReplceFunc={showReplceFunc}
            
          />
          {/* Show word and characters */}
          <WordACha text={text} />
        </div>
      </div>
    </>
  );
}
