import React, { useState } from 'react'

export default function TextForm(props) {
  const [Text, setText] = useState("");
  const UpCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const LowCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");

  }

  const copyText = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");

  }

  const clearText = () => {
    setText("");
  }

  const Change = (e) => {  //e = event
    setText(e.target.value);
  }
  return (
    <>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={Text} onChange={Change} id="exampleFormControlTextarea1" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
        </div>
        <button disabled={Text.length === 0} className="mainBtn btn btn-primary mx-1" onClick={UpCase}>Change to UpperCase</button>
        <button disabled={Text.length === 0} className="mainBtn btn btn-primary mx-1" onClick={LowCase}>Change to LowerCase</button>
        <button disabled={Text.length === 0} className="mainBtn btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
        <button disabled={Text.length === 0} className="mainBtn btn btn-primary mx-1" onClick={handleSpace}>Remove Extra Spaces</button>
        <button disabled={Text.length === 0} className="mainBtn btn btn-primary mx-1" onClick={clearText}>Clear Text</button>

      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p> {Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {Text.length} characters</p>
        <p> It takes {0.008 * Text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>

        <h3>Text Preview</h3>
        <p> {Text.length > 0 ? Text : "Nothing to Preview!"} </p>
      </div>
    </>
  )
}
