import './App.css';
import './scss/global.scss';

import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
