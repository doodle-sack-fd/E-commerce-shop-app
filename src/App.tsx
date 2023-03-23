import { Route, Routes } from 'react-router-dom';

import './App.css';
import './scss/global.scss';

import Home from './pages/Home';
import './scss/global.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
