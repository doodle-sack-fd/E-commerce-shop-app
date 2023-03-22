import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import ItemBlock from './components/ItemBlock/ItemBlock';
import MainBlock from './components/MainBlock/MainBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <MainBlock />
    </div>
  );
}

export default App;
