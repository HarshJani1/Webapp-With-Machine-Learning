import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import ProductCard from '../Common/ProductCard';
import './AdminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const updateProduct = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:4000/api/products/${id}`, updatedData, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Dashboard</h1>
      <ProductForm
        fetchProducts={fetchProducts}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="admin-product-card">
            <ProductCard product={product} />
            <div className="admin-actions">
              <button onClick={() => setEditingProduct(product)}>Edit</button>
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
