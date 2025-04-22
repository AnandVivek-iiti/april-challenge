import React, { useState } from 'react' 

export default function About1() {

const  [myStyle , setStyle ]=useState({ 
 color: '#0b1949',
  backgroundColor: 'white'
});
const  [btnText , setBtnText ]=useState("enabledark mode")
const toggleStyle =()=>{
  if ( myStyle.color === 'white' ){
    setStyle({
  
      color: 'black',
      backgroundColor: 'white',
      border :'1px solid black' 
    })
   setBtnText("enable dark mode");
  } 
  
  else {
    setStyle({
      color: 'white',
      backgroundColor: '#0b1949'
  })
  setBtnText("enable light mode")
  }
  
}
    return (
       <div className="container my-3" style={myStyle}>
        <h1 className="my-3">About Us</h1>
         <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
      <button type="button" onClick={toggleStyle} className="btn btn-primary my-3" style={myStyle}>{btnText}</button>
 
       </div>

  )
}