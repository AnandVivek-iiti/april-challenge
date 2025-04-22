import React, { useState } from 'react' 
export default function TextForms(props) {
    const [Text, setText] = useState("");
    const HandleOnChange = (event) =>{
        // console.log("btn was clicked");
        setText(event.target.value)
    }
    const HandleUpclick = () =>{
        // console.log("clicked"+ Text);
        let newText =   Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const HandleLoclick = () =>{
        // console.log("clicked"+ Text);
        let newText =   Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const HandleClearText =()=>{
      let newtext='';
      setText(newtext);
      props.showAlert("text cleared", "success");
    }
    const HandleExtraSpaces = ()  =>{
      const newText=Text.split(/[ ]+/);
       setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }
    const HandleCopyText = ()  =>{
      const newText=document.getElementById("Mybox")
      newText.select();
      newText.setSelectionRange(0,9999);
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Text copied to clipboard", "success");
    }
  //   const wordCount =(word)=>{
  //  newWord : word 
  //    if(newWord=""){
  //     Text.split (" ").length="0";
  //    }
  //   }
  return ( 
  <div className={`container text-${props.mode==='dark'?'black':'white'}`} style={{ backgroundColor: props.mode==='dark'?'white':'#0b1949'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className="form-control" id="Mybox" style={{ backgroundColor: props.mode==='dark'?'white':'grey'}} onChange={HandleOnChange} value={Text} rows="8"></textarea>
  </div>
   <button className="btn btn-primary mx-1" onClick={HandleUpclick}>Change to uppercase</button>
   <button className="btn btn-primary mx-1" onClick={HandleLoclick}>Change to lowercase</button>
   <button className="btn btn-primary mx-1" onClick={HandleClearText}>Clear Text</button>
   <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>Remove extra spaces</button>
   <button className="btn btn-primary mx-1" onClick={HandleCopyText}>Copy</button>
   <div className="container my-4"> 
   
    <p> {Text.split (" ").length} words  and {Text.length} </p>
  <p>{0.008*Text.split (" ").length} read time</p>
    
   </div>
   <div>
    <h3>preview</h3>
    <p>{Text.length>0? Text:"Write something here to preview" } </p>
   </div>
</div>

  )
}
