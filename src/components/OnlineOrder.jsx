import { Link } from 'react-router-dom';
import './OnlineOrder.css';

const OnlineOrder = () => {
    return (
        <section id="pedidos" className="online-order">
            <div className="container">
                <div className="order-wrapper-redesign">
                    <div className="order-content">
                        <div className="section-title" style={{ textAlign: 'center' }}>
                            <h2>¿Cómo hacer tu pedido?</h2>
                            <p>Es muy fácil. Seguí estos pasos y recibí tus productos en casa</p>
                        </div>

                        <div className="order-steps-horizontal">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <div className="step-icon">🛒</div>
                                <h4>Elegí tus productos</h4>
                                <p>Navegá nuestro catálogo y agregá lo que necesitás al carrito</p>
                            </div>

                            <div className="step-arrow">→</div>

                            <div className="step-card">
                                <div className="step-number">2</div>
                                <div className="step-icon">📝</div>
                                <h4>Completá tus datos</h4>
                                <p>Indicanos tu dirección y horario preferido de entrega</p>
                            </div>

                            <div className="step-arrow">→</div>

                            <div className="step-card">
                                <div className="step-number">3</div>
                                <div className="step-icon">📱</div>
                                <h4>Confirmamos por WhatsApp</h4>
                                <p>Te enviamos la confirmación y coordinamos la entrega</p>
                            </div>

                            <div className="step-arrow">→</div>

                            <div className="step-card">
                                <div className="step-number">4</div>
                                <div className="step-icon">🚚</div>
                                <h4>Recibí tu pedido</h4>
                                <p>Te lo llevamos a domicilio en el horario acordado</p>
                            </div>
                        </div>

                        <div className="order-cta">
                            <Link to="/productos" className="btn btn-accent btn-lg">
                                <span>🛒</span> Empezar a comprar
                            </Link>
                            <div className="order-contact-inline">
                                <span>¿Preferís llamarnos?</span>
                                <a href="tel:+5491132804729" className="phone-link">
                                    📞 11 3280-4729
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineOrder;
