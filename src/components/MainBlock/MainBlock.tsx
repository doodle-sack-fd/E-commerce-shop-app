import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/ActionCreators';
import { useAppDispatch } from '../../redux/store';
import { selectProductsAll } from '../../redux/slices/products/productSlice';
import ItemBlock from '../ItemBlock/ItemBlock';

const MainBlock: FC = () => {
  const { products, status } = useSelector(selectProductsAll);

  const product = products.map((item) => <ItemBlock key={item.id} {...item} />);
  console.log(product);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const getItems = async () => {
      dispatch(fetchProducts());
    };
    getItems();
  }, []);

  return <div>{product}</div>;
};

export default MainBlock;
