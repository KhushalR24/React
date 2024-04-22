import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  const passGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword]
  )

  const passRef = useRef(null)
 
  const copyPasswordToClipboard = useCallback(
    () => {
      passRef.current?.select()
      passRef.current?.setSelectionRange(0,101)
      window.navigator.clipboard.writeText(password)
    },
    [password]
  )

  useEffect(() => {
    passGenrator()
  }, [length, numAllow, charAllow, passGenrator])


  return (
    <>

      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 text-center bg-sky-700 ">
        <h1 className="text-white text-center py-4">Password Genrator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text"
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='Password'
            ref={passRef}
            readOnly />

          <button onClick={copyPasswordToClipboard} className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>

        <div className="felx text-sm gap-x-2">

          <div className="felx text-sm gap-x-1 px-2 py-2">

            <input type="range"
              min={8}
              max={100}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }} />

            <label className='me-2'>Length:{length}</label>

            <input type="checkbox"
              defaultChecked={numAllow}
              id='numberInput'
              onChange={() => {
                setNumAllow((prev) => !prev);
              }} />

            <label className='me-2'>Numbers</label>

            <input type="checkbox"
              defaultChecked={numAllow}
              id='numberInput'
              onChange={() => {
                setCharAllow((prev) => !prev);
              }} />
            <label htmlFor='numberInput'>Characters</label>
          </div>

        </div>

      </div>

    </>
  );
}

export default App;
