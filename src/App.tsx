import { Route, Routes } from 'react-router-dom';

import './App.css';
import './scss/global.scss';

import Home from './pages/Home';
import './scss/global.scss';
import Cart from './pages/Cart';
import MainLayout from './layouts/MainLayout';
import FullCart from './components/FullCard/FullCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/product/:id" element={<FullCart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
