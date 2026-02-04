import { useState } from 'react';
import { createPortal } from 'react-dom';
import { jsPDF } from 'jspdf';
import { useCart } from '../context/CartContext';
import ProductThumb from './ProductThumb';
import './Checkout.css';

const Checkout = ({ onClose }) => {
    const { cartItems, getCartTotal, getItemsByCategory, clearCart, updateQuantity, removeFromCart } = useCart();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        direccion: '',
        horario: 'mañana',
        notas: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

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

    const generatePDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        let yPos = 20;

        // Header
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.text('Autoservicio Mechi', pageWidth / 2, yPos, { align: 'center' });
        yPos += 8;
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.text('Pedido Online', pageWidth / 2, yPos, { align: 'center' });
        yPos += 15;

        // Línea separadora
        doc.setLineWidth(0.5);
        doc.line(20, yPos, pageWidth - 20, yPos);
        yPos += 10;

        // Datos del cliente
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('Datos del Cliente', 20, yPos);
        yPos += 8;
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        doc.text(`Nombre: ${formData.nombre}`, 20, yPos);
        yPos += 6;
        doc.text(`Teléfono: ${formData.telefono}`, 20, yPos);
        yPos += 6;
        doc.text(`Dirección: ${formData.direccion}`, 20, yPos);
        yPos += 6;
        doc.text(`Horario preferido: ${formData.horario}`, 20, yPos);
        yPos += 6;
        if (formData.notas) {
            doc.text(`Notas: ${formData.notas}`, 20, yPos);
            yPos += 6;
        }
        yPos += 10;

        // Línea separadora
        doc.line(20, yPos, pageWidth - 20, yPos);
        yPos += 10;

        // Productos por categoría
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('Productos Solicitados', 20, yPos);
        yPos += 10;

        const itemsByCategory = getItemsByCategory();

        Object.keys(itemsByCategory).forEach((category) => {
            if (yPos > 260) {
                doc.addPage();
                yPos = 20;
            }

            doc.setFontSize(12);
            doc.setFont(undefined, 'bold');
            doc.text(category, 20, yPos);
            yPos += 7;

            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');

            itemsByCategory[category].forEach((item) => {
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }
                const itemText = `  • ${item.nombre} x${item.quantity} - ${formatPrice(item.precio * item.quantity)}`;
                doc.text(itemText, 25, yPos);
                yPos += 6;
            });
            yPos += 5;
        });

        // Total
        yPos += 5;
        doc.setLineWidth(0.5);
        doc.line(20, yPos, pageWidth - 20, yPos);
        yPos += 10;
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(`TOTAL: ${formatPrice(getCartTotal())}`, pageWidth - 20, yPos, { align: 'right' });

        // Footer
        yPos += 20;
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        doc.text('Autoservicio Mechi - Av. Caseros 2651, CABA', pageWidth / 2, yPos, { align: 'center' });
        yPos += 5;
        doc.text('WhatsApp: 11 3280-4729', pageWidth / 2, yPos, { align: 'center' });

        return doc;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Generar PDF y obtener como base64
        const pdf = generatePDF();

        // Descargar el PDF primero
        pdf.save(`pedido-mechi-${Date.now()}.pdf`);

        // Crear mensaje para WhatsApp
        const itemsByCategory = getItemsByCategory();
        let productList = '';

        Object.keys(itemsByCategory).forEach((category) => {
            productList += `%0A*${category}:*%0A`;
            itemsByCategory[category].forEach((item) => {
                productList += `  • ${item.nombre} x${item.quantity}%0A`;
            });
        });

        const message = `🛒 *NUEVO PEDIDO - Autoservicio Mechi*%0A%0A` +
            `👤 *Cliente:* ${formData.nombre}%0A` +
            `📞 *Teléfono:* ${formData.telefono}%0A` +
            `📍 *Dirección:* ${formData.direccion}%0A` +
            `🕐 *Horario:* ${formData.horario}%0A` +
            `${formData.notas ? `📝 *Notas:* ${formData.notas}%0A` : ''}%0A` +
            `📦 *PRODUCTOS:*${productList}%0A` +
            `💰 *TOTAL:* ${formatPrice(getCartTotal())}%0A%0A` +
            `_(El PDF del pedido se descargó automáticamente)_`;

        // Abrir WhatsApp con el mensaje
        window.open(`https://wa.me/5491132804729?text=${message}`, '_blank');

        // Limpiar carrito
        clearCart();
        setIsSubmitting(false);
        onClose();
    };

    const itemsByCategory = getItemsByCategory();

    // Si no hay items, cerrar el modal
    if (cartItems.length === 0 && step === 1) {
        onClose();
        return null;
    }

    return createPortal(
        <div className="checkout-overlay" onClick={onClose}>
            <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
                <button className="checkout-close" onClick={onClose}>×</button>

                {/* Step Indicator */}
                <div className="checkout-steps-indicator">
                    <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>
                        <span>1</span>
                    </div>
                    <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                    <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>
                        <span>2</span>
                    </div>
                </div>

                {step === 1 && (
                    <div className="checkout-step checkout-step-1">
                        <h2>Resumen del Pedido</h2>
                        <p className="checkout-subtitle">Verificá y modificá las cantidades</p>

                        <div className="checkout-items-full">
                            {Object.keys(itemsByCategory).map((category) => (
                                <div key={category} className="checkout-category">
                                    <h4 className="category-header">{category}</h4>
                                    {itemsByCategory[category].map((item) => (
                                        <div key={item.id} className="checkout-item">
                                            <ProductThumb imagen={item.imagen} alt={item.nombre} size="lg" />
                                            <div className="item-info">
                                                <span className="item-name">{item.nombre}</span>
                                                <span className="item-unit">{formatPrice(item.precio)}/{item.unidad}</span>
                                            </div>
                                            <div className="item-qty-controls">
                                                <button
                                                    className="checkout-qty-btn"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    −
                                                </button>
                                                <input
                                                    type="number"
                                                    className="checkout-qty-input"
                                                    value={item.quantity}
                                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                    min="0"
                                                />
                                                <button
                                                    className="checkout-qty-btn"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="item-price">{formatPrice(item.precio * item.quantity)}</span>
                                            <button
                                                className="item-remove"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="checkout-total-box">
                            <span>Total del pedido:</span>
                            <span className="total-amount">{formatPrice(getCartTotal())}</span>
                        </div>

                        <button
                            className="btn btn-accent checkout-next"
                            onClick={() => setStep(2)}
                        >
                            Continuar →
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="checkout-step checkout-step-2">
                        <h2>Datos de Entrega</h2>
                        <p className="checkout-subtitle">Completá tus datos para recibir el pedido</p>

                        <form onSubmit={handleSubmit} className="checkout-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Nombre y Apellido *</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        className="form-input"
                                        placeholder="Nombre completo"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Teléfono *</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        className="form-input"
                                        placeholder="Número de contacto"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Dirección de entrega *</label>
                                <input
                                    type="text"
                                    name="direccion"
                                    className="form-input"
                                    placeholder="Calle, número, piso, depto"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Horario preferido de entrega</label>
                                <select
                                    name="horario"
                                    className="form-input"
                                    value={formData.horario}
                                    onChange={handleChange}
                                >
                                    <option value="mañana">Mañana (9:00 - 12:00)</option>
                                    <option value="mediodia">Mediodía (12:00 - 15:00)</option>
                                    <option value="tarde">Tarde (15:00 - 19:00)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Notas adicionales</label>
                                <textarea
                                    name="notas"
                                    className="form-input"
                                    placeholder="Indicaciones especiales, preferencias, etc."
                                    value={formData.notas}
                                    onChange={handleChange}
                                    rows={2}
                                />
                            </div>

                            <div className="checkout-total-inline">
                                <span>Total:</span>
                                <span>{formatPrice(getCartTotal())}</span>
                            </div>

                            <div className="checkout-actions">
                                <button
                                    type="button"
                                    className="btn btn-outline checkout-back"
                                    onClick={() => setStep(1)}
                                >
                                    ← Volver
                                </button>
                                <button
                                    type="submit"
                                    className={`btn btn-accent checkout-submit ${isSubmitting ? 'loading' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            Procesando...
                                        </>
                                    ) : (
                                        <>
                                            📱 Enviar Pedido
                                        </>
                                    )}
                                </button>
                            </div>

                            <p className="checkout-note">
                                La compra queda sujeta a confirmación de stock. Se descargará un PDF y se abrirá WhatsApp para confirmar.
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Checkout;
