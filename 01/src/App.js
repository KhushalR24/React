import './App.css';

import Header from './components/Header';
import User from './components/User';
import About from './components/About';
import { useState } from 'react';


function App() {
const [mode, setmode] = useState(false)
  return (
    <>
      <Header mode={mode}/>
      <User heading="Enter The Text Below" />
      <About/>
    </>
  );
}
export default App;
