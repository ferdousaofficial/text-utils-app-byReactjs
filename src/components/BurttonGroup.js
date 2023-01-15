import Button from "./Button";

export default function BurttonGroup(props) {
  return (
    <div className="my-5 xl:mr-40">
      <Button
        buttonText="Convert to Uppercase"
        feature={props.convertToUppercase}
      />
      <Button
        buttonText="Convert to Lowercase"
        feature={props.convertToLowercase}
      />
      <Button buttonText="Copy Texts" feature={props.copyText} />
      <Button
        buttonText="Remove Extra Spaces"
        feature={props.removeExtraSpaces}
      />
      <Button buttonText="Speak" feature={props.speak} />
      <Button buttonText="Clear" feature={props.clearClipboard} />
      <Button buttonText="Repleace Word" feature={props.showReplceFunc} />
    </div>
  );
}
