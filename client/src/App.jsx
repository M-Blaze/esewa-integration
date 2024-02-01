import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './App.css'
import Products from './pages/products'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/success' element={<Products />} />
          <Route path='/failure' element={<Products />} />
          <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
