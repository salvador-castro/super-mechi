import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductThumb from './ProductThumb';
import Checkout from './Checkout';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showCartPreview, setShowCartPreview] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const { cartItems, getCartCount, getCartTotal, updateQuantity, removeFromCart } = useCart();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isProductsPage = location.pathname === '/productos';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close cart preview when navigating
    useEffect(() => {
        setShowCartPreview(false);
    }, [location]);

    const navLinks = isHomePage
        ? [
            { href: '#inicio', label: 'Inicio', isAnchor: true },
            { href: '/productos', label: 'Productos', isAnchor: false },
            { href: '#ubicacion', label: 'Ubicación', isAnchor: true },
        ]
        : [
            { href: '/', label: 'Inicio', isAnchor: false },
            { href: '/productos', label: 'Productos', isAnchor: false },
            { href: '/#ubicacion', label: 'Ubicación', isAnchor: false },
        ];

    const cartCount = getCartCount();

    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const handleQuantityChange = (itemId, newValue) => {
        const qty = parseInt(newValue, 10);
        if (!isNaN(qty) && qty >= 0) {
            updateQuantity(itemId, qty);
        }
    };

    return (
        <>
            <nav className={`navbar ${isScrolled || !isHomePage ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <span className="logo-icon">🛒</span>
                        <span className="logo-text">
                            Autoservicio <span className="logo-highlight">Mechi</span>
                        </span>
                    </Link>

                    <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                {link.isAnchor ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* Ver Carrito - solo si hay items */}
                        {cartCount > 0 && (
                            <li className="nav-cart">
                                <button
                                    className="cart-link"
                                    onClick={() => setShowCartPreview(!showCartPreview)}
                                >
                                    <span className="cart-icon-nav">🛒</span>
                                    <span className="cart-details">
                                        <span className="cart-count-text">{cartCount} {cartCount === 1 ? 'producto' : 'productos'}</span>
                                        <span className="cart-total-nav">{formatPrice(getCartTotal())}</span>
                                    </span>
                                </button>
                                {/* Overlay for cart preview */}
                                {showCartPreview && (
                                    <div
                                        className="cart-preview-overlay"
                                        onClick={() => setShowCartPreview(false)}
                                    />
                                )}
                                {/* Cart Preview Modal */}
                                {showCartPreview && (
                                    <div className="cart-preview">
                                        <div className="cart-preview-header">
                                            <h4>Tu Carrito</h4>
                                            <button
                                                className="cart-preview-close"
                                                onClick={() => setShowCartPreview(false)}
                                            >
                                                ×
                                            </button>
                                        </div>

                                        <div className="cart-preview-items">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="cart-preview-item">
                                                    <ProductThumb imagen={item.imagen} alt={item.nombre} size="md" />
                                                    <div className="preview-item-info">
                                                        <span className="preview-item-name">{item.nombre}</span>
                                                        <span className="preview-item-price">{formatPrice(item.precio)}/{item.unidad}</span>
                                                    </div>
                                                    <div className="preview-item-qty">
                                                        <button
                                                            className="preview-qty-btn"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            type="number"
                                                            className="preview-qty-input"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                            min="0"
                                                        />
                                                        <button
                                                            className="preview-qty-btn"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="preview-item-remove"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="cart-preview-footer">
                                            <div className="preview-total">
                                                <span>Total:</span>
                                                <span>{formatPrice(getCartTotal())}</span>
                                            </div>
                                            <button
                                                className="btn btn-accent cart-preview-btn"
                                                onClick={() => {
                                                    setShowCartPreview(false);
                                                    setShowCheckout(true);
                                                }}
                                            >
                                                Finalizar Pedido
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        )}

                        {/* Hacer Pedido - solo si NO hay items en carrito */}
                        {cartCount === 0 && (
                            <li className="nav-cta">
                                <Link to="/productos" className="btn btn-accent" onClick={() => setIsMenuOpen(false)}>
                                    Hacer Pedido
                                </Link>
                            </li>
                        )}
                    </ul>

                    <button
                        className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>



            {/* Checkout Modal */}
            {
                showCheckout && (
                    <Checkout onClose={() => setShowCheckout(false)} />
                )
            }
        </>
    );
};

export default Navbar;
