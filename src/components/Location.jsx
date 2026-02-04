import './Location.css';

const Location = () => {
    return (
        <section id="ubicacion" className="location">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestra Ubicación</h2>
                    <p>Visitanos en nuestro local o hacé tu pedido online</p>
                </div>

                <div className="location-wrapper">
                    <div className="location-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7427201163687!2d-58.39982359999999!3d-34.6359414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb16cbd0f7c1%3A0x16bee360f6f2a5bc!2sAutoservicio%20Mechi!5e0!3m2!1ses-419!2sar!4v1770210882930!5m2!1ses-419!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Autoservicio Mechi"
                        ></iframe>
                    </div>

                    <div className="location-info">
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h4>Dirección</h4>
                                <p>Av. Caseros 2651</p>
                                <p>C1264AAG, CABA</p>
                                <a
                                    href="https://maps.app.goo.gl/yQUxFjxWQ8ANYdix9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link"
                                >
                                    Ver en Google Maps →
                                </a>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">🕐</div>
                            <div className="info-content">
                                <h4>Horarios de Atención</h4>
                                <div className="schedule">
                                    <div className="schedule-row">
                                        <span>Lunes a Sábado</span>
                                        <span>8:30 - 21:00</span>
                                    </div>
                                    <div className="schedule-row">
                                        <span>Domingos</span>
                                        <span>9:30 - 20:30</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h4>Contacto</h4>
                                <p>
                                    <a href="https://wa.me/5491132804729" target="_blank" rel="noopener noreferrer">
                                        WhatsApp: 11 3280-4729
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
