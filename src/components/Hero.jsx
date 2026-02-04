import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="hero-bg">
                <div className="hero-bg-image"></div>
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-badge animate-fade-in-up">
                    <span className="badge-icon">✨</span>
                    Tu supermercado de confianza
                </div>

                <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Bienvenidos a<br />
                    <span className="title-highlight">Autoservicio Mechi</span>
                </h1>

                <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Los mejores productos, los mejores precios. Ahora con
                    <strong> pedidos online</strong> para tu comodidad.
                </p>

                <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link to="/productos" className="btn btn-accent btn-lg">
                        <span>🛒</span> Hacer Pedido Online
                    </Link>
                    <Link to="/productos" className="btn btn-outline-light">
                        Ver Productos
                    </Link>
                </div>

                <div className="hero-features animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="feature-item">
                        <span className="feature-icon">🚚</span>
                        <span>Envío a domicilio</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">💳</span>
                        <span>Todos los medios de pago</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">⭐</span>
                        <span>Productos frescos</span>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
