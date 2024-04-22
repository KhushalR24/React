import { useState } from 'react';
import './App.css';

function App() {
  const [color, setcolor] = useState("lightgreen")
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap n justify-center bottom-12 inset-x-0 px-2 text-2xl'>
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-xl px-2 py-2">
            <button onClick={() => setcolor("red")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ backgroundColor:"red"}}>Red</button>
            <button onClick={() => setcolor("green")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ backgroundColor:"green"}}>Green</button>
            <button onClick={() => setcolor("blue")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setcolor("yellow")} className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{ backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() => setcolor("cyan")} className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{ backgroundColor:"cyan"}}>Cyan</button>
            <button onClick={() => setcolor("gray")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ backgroundColor:"gray"}}>Gray</button>
            <button onClick={() => setcolor("black")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{ backgroundColor:"black"}}>Black</button>
            <button onClick={() => setcolor("white")} className='outline-none px-4 py-2 rounded-full text-black shadow-lg' style={{ backgroundColor:"white"}}>White</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
