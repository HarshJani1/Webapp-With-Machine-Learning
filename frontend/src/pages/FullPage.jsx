import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard1 from '../components/Common/ProductCard1';
import './FullPage.css'
const FullPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [productList, setProductList] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/products/${id}`);
                setProduct(res.data);

                const res1 = await axios.get('http://localhost:4000/api/products');
                setProductList(res1.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                if (!product?.name) return;

                const res3 = await axios.get(
                    `http://localhost:4000/api/products/recommend/${product.name}`
                );

                setRecommended(
                    Array.isArray(res3.data.recommendations) ? res3.data.recommendations : []
                );
            } catch (err) {
                console.error("Failed to fetch recommendations:", err);
                setRecommended([]);
            }
        };

        fetchRecommendations();
    }, [product]);

    const recommendedProducts = Array.isArray(recommended)
        ? productList.filter(p => recommended.includes(p.name))
        : [];

    if (!product) return <div className="text-white text-center mt-10">Loading...</div>;

    return (
        <div className="p-6 md:p-10 text-white bg-[#0f0f1c] min-h-screen">
            <section className="mb-12">
                <h1 className="text-3xl font-bold text-violet-400 mb-2">{product.name}</h1>
                <h4 className="text-lg text-gray-300 mb-4">{product.description}</h4>
                <p className="text-blue-400 font-semibold text-lg mb-2">💰 Price: ${product.price}</p>

                <div className="text-sm text-gray-400 mt-2">
                    <p>👍 Positive Reviews: {product.positiveReviews}</p>
                    <p>👎 Negative Reviews: {product.negativeReviews}</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-violet-300 mb-4">
                    🧠 Recommended Products
                </h2>

                {recommendedProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendedProducts.map(item => (
                            <ProductCard1 key={item._id} product={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No recommended products found</p>
                )}
            </section>

        </div>
    );
};

export default FullPage;
