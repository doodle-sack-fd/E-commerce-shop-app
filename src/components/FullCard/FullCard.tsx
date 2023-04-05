import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FullCard: FC = () => {
  const [products, setProducts] = useState<{
    image: string;
    title: string;
  }>();
  const { id } = useParams();
  const API_URL = 'https://fakestoreapi.com/products/';
  useEffect(() => {
    async function fetchDataProductsId() {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products/' + id);
        console.log(data);
        setProducts(data);
        console.log(products);
      } catch (error) {
        alert('Ошибка получения данных о товаре');
      }
    }

    fetchDataProductsId();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <img src={products.image} alt="" />
      <h2>{products.title}</h2>
    </div>
  );
};

export default FullCard;
