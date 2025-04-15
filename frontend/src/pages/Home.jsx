import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard1 from '../components/Common/ProductCard1';
import './Home.css';
import Navbar from '../components/Common/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:4000/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard1 key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;