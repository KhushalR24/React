import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrInfo from './hooks/useCurrInfo';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [conAmt, setConAmt] = useState(0)

  const currInfo = useCurrInfo(from)
  const options = Object.keys(currInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConAmt(amount)
    setAmount(conAmt)
  }
const convert = () => {
  setConAmt(amount * currInfo[to])
}
  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjews_uFOvkEhxWdFNDSLzVTRasSRrpvu73SdiGbgcIJbLwwu1-7UFdqbr6dWyY3T6AZgZ6_Su0JT5F32yTs4ftFmb1Xm72yLtuEowoNwpMEiMsw7fTIc7WS3qzodmY1scgjzOopu-3mTE_/s16000/heroscreen.cc-V1-01282021-stock-market-wallpaper-HD.png')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();    
                            convert()                      
                        }}>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currOption={options}
                                onCurrChange={(curr) => setFrom(curr)}
                                onAmountChange={(amount) => setAmount(amount)}
                                selectCurr={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"  
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={conAmt}
                                currOption={options}
                                onCurrChange={(curr) => setTo(curr)}
                                selectCurr={to}
                                amountDisable = {amount}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default App;
