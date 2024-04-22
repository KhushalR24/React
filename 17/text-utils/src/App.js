import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mode, setMode] = useState('light');
  



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
     }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <div className="container my-3">
        <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
