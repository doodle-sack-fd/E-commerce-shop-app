import { FC } from 'react';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import MainBlock from '../components/MainBlock/MainBlock';

const Home: FC = () => {
  return (
    <>
      <Categories />
      <MainBlock />
      <Footer />
    </>
  );
};

export default Home;
