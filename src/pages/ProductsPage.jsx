import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products, categories, getProductsByCategory } from '../data/products';
import Checkout from '../components/Checkout';
import ProductImage from '../components/ProductImage';
import './ProductsPage.css';

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('todos');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showCheckout, setShowCheckout] = useState(false);
    const { cartItems, addToCart, updateQuantity, getCartTotal, getCartCount } = useCart();

    useEffect(() => {
        const categoryFromUrl = searchParams.get('categoria');
        if (categoryFromUrl) {
            setActiveCategory(categoryFromUrl);
            setFilteredProducts(getProductsByCategory(categoryFromUrl));
        } else {
            setActiveCategory('todos');
            setFilteredProducts(products);
        }
    }, [searchParams]);

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setFilteredProducts(getProductsByCategory(categoryId));
    };

    const getItemQuantity = (productId) => {
        const item = cartItems.find((item) => item.id === productId);
        return item ? item.quantity : 0;
    };

    const handleQuantityInput = (productId, value, product) => {
        const qty = parseInt(value, 10);
        if (!isNaN(qty) && qty >= 0) {
            if (qty === 0) {
                updateQuantity(productId, 0);
            } else {
                // Si el producto no está en el carrito, agregarlo con la cantidad
                const existingItem = cartItems.find(item => item.id === productId);
                if (existingItem) {
                    updateQuantity(productId, qty);
                } else {
                    // Add product and then update quantity
                    addToCart(product);
                    if (qty > 1) {
                        updateQuantity(productId, qty);
                    }
                }
            }
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="products-page">
            <header className="products-header">
                <div className="container">
                    <Link to="/" className="back-link">
                        ← Volver al inicio
                    </Link>
                    <h1>Nuestros Productos</h1>
                    <p>Seleccioná los productos que necesitás y te los llevamos a domicilio</p>
                </div>
            </header>

            <div className="products-layout container">
                <aside className="categories-sidebar">
                    <h3>Categorías</h3>
                    <ul className="category-list">
                        <li>
                            <button
                                className={`category-btn ${activeCategory === 'todos' ? 'active' : ''}`}
                                onClick={() => handleCategoryChange('todos')}
                            >
                                <span>🛒</span> Todos los productos
                            </button>
                        </li>
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(cat.id)}
                                >
                                    <span>{cat.icon}</span> {cat.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="products-grid-container">
                    <div className="products-grid">
                        {filteredProducts.map((product) => {
                            const quantity = getItemQuantity(product.id);
                            return (
                                <div key={product.id} className="product-card">
                                    <ProductImage imagen={product.imagen} alt={product.nombre} />
                                    <div className="product-info">
                                        <h4>{product.nombre}</h4>
                                        <p className="product-category">{product.categoria}</p>
                                        <p className="product-price">
                                            {formatPrice(product.precio)}
                                            <span className="product-unit">/{product.unidad}</span>
                                        </p>
                                    </div>
                                    <div className="product-actions">
                                        {quantity === 0 ? (
                                            <button
                                                className="btn-add"
                                                onClick={() => addToCart(product)}
                                            >
                                                <span>+</span> Agregar
                                            </button>
                                        ) : (
                                            <div className="quantity-controls">
                                                <button
                                                    className="qty-btn"
                                                    onClick={() => updateQuantity(product.id, quantity - 1)}
                                                >
                                                    −
                                                </button>
                                                <input
                                                    type="number"
                                                    className="qty-input"
                                                    value={quantity}
                                                    onChange={(e) => handleQuantityInput(product.id, e.target.value, product)}
                                                    min="0"
                                                />
                                                <button
                                                    className="qty-btn"
                                                    onClick={() => updateQuantity(product.id, quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>

                {getCartCount() > 0 && (
                    <div className="cart-summary">
                        <div className="cart-summary-content">
                            <div className="cart-info">
                                <span className="cart-icon">🛒</span>
                                <span className="cart-count">{getCartCount()} productos</span>
                                <span className="cart-total">{formatPrice(getCartTotal())}</span>
                            </div>
                            <button
                                className="btn btn-accent"
                                onClick={() => setShowCheckout(true)}
                            >
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {showCheckout && (
                <Checkout onClose={() => setShowCheckout(false)} />
            )}
        </div>
    );
};

export default ProductsPage;
