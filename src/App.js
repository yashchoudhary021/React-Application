import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react'
import Alert from './Components/Alert'
import About from './Components/About'
import React from "react";

 
export default function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  let showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggalmode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = '#062a5e'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Unicorn-Dark-mode'   // Change the title after enable in dark mode.
      // PopUp message on title
       setInterval(()=>{
         document.title = 'Unicorn is Amazing website'    
       },2000)
       setInterval(()=>{
        document.title = 'This is Yash website'
      },1500)   
    }
    else {
      setmode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'Unicorn-ligth-mode'
    }
  }

  return (
    <>
        <Navbar title="Unicone" mode={mode} toggalmode={toggalmode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Textform showAlert={showAlert} heading="Text Area" mode={mode} /> */}
        </div>
        <About/>
    </>
  );
}

