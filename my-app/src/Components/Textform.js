import React, {useState} from 'react'


export default function Textform(props){
 const handleUpClick =()=>{
  // console.log("Uppercase was clicked"+ text);
  let newText =text.toUpperCase();
  setText(newText);
 }
 const handleLoClick =()=>{
  // console.log("Uppercase was clicked"+ text);
  let newText =text.toLowerCase();
  setText(newText);
 }
  const handleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('enter your text');
  // setText("detail");
  return (
    <>
    <div className="container">
   <h1>{props.heading} </h1>
<div class="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>


    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );

}