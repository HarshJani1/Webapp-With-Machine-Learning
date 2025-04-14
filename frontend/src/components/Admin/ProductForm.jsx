import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductForm.css';

const ProductForm = ({ fetchProducts, editingProduct, setEditingProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name,
        description: editingProduct.description,
        price: editingProduct.price
      });
    } else {
      setFormData({ name: '', price: '', description: '' });
    }
  }, [editingProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(
          `http://localhost:4000/api/admin/products/${editingProduct._id}`,
          formData,
          { headers: { 'x-auth-token': localStorage.getItem('token') } }
        );
      } else {
        await axios.post(
          'http://localhost:4000/api/admin/products',
          formData,
          { headers: { 'x-auth-token': localStorage.getItem('token') } }
        );
      }
      fetchProducts();
      setFormData({ name: '', description: '', price: '' });
      setEditingProduct(null);
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        placeholder="Product Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <button type="submit">
        {editingProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
