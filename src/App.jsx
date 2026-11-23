import { Routes, Route } from 'react-router'

import Homepage from './pages/Homepage';
import AllProductPage from './pages/AllProductPage';
import CreateProductPage from './pages/CreateProductPage';
import UpdateProductPage from './pages/UpdateProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<AllProductPage />} />
        <Route path='/products/create' element={<CreateProductPage />}></Route>
        <Route path='/products/:productId/edit' element={<UpdateProductPage />}></Route>
        <Route path='/products/:productId/details' element={<ProductDetailsPage />}></Route>
      </Routes>
    </>
  )
}

export default App;