
import './App.css';
// import { useState } from 'react';
import NavBar from './components/NavBar';
 import Texforms from './components/TextForms';
// import About1 from './components/About1';
import { useState } from 'react';
import Alert1 from './components/Alert1';
function App() {
  const [mode,setMode]=useState('dark');
   const [alert,setalert]=useState(null);
  //  const selectDarkModetype=()=>{
  //   <button className='dark mode selcter' type='button'>
  //   <select>
  //       <ul>green</ul>
  //       <ul>blue</ul>
  //       <ul>black</ul>
  //     </select>
  //     </button>
  //  }
  const showAlert =(message,type)=>{
    setalert({
msg: message,
type :type
 }) 
 setTimeout (()=>{
setalert(null);
 },2000);
}

  const toggleMode= ()=>{
    if (mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor='#0b1949';
      showAlert("dark mode has been  enabled ","successfully")
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled ","successfully")
    }
    }
  
  return (
  <>
  <NavBar title="MyNav" mode={mode} toggleMode={toggleMode}/>
  <Alert1 alert={alert} />
  <div className="container my-3">
    <Texforms showAlert={showAlert} heading="Enter text to analysis" mode={mode} toggleMode={toggleMode}/>
    
     </div>
  {/* <About1/> */}

 </> 
 );
}
export default App;
