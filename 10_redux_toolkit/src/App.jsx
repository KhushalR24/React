import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Components/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/Home' element={<Products />} />
          <Route path='/product' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
