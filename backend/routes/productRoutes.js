//productRoutes.js
const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { getProducts, submitReview, createProduct, updateProduct, deleteProduct, getProductById, getRecommendation } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.get('/recommend/:name', getRecommendation);
router.post('/review/:id', auth, submitReview);
router.post('/add', auth, createProduct);
router.put('/:id', auth, updateProduct);   
router.delete('/:id', auth, deleteProduct);

module.exports = router;