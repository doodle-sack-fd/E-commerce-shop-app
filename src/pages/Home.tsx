import React from 'react';
import Categories from '../components/Categories/Categories';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainBlock from '../components/MainBlock/MainBlock';

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <MainBlock />
      <Footer />
    </>
  );
};

export default Home;
