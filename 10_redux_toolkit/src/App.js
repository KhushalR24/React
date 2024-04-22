import './App.css';
import Cart from './Components/Cart';
import Product from './Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <> 
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>   
    </>
  );
}
export default App;

