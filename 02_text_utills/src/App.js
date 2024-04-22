import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');


  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
