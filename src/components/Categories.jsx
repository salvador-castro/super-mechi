import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
    const categories = [
        /* { id: 'frutas', icon: '🍎', name: 'Frutas', description: 'Frescas y de temporada', color: '#ef4444' },
        { id: 'verduras', icon: '🥬', name: 'Verduras', description: 'Del campo a tu mesa', color: '#22c55e' }, */
        { id: 'bebidas', icon: '🥤', name: 'Bebidas', description: 'Gaseosas, jugos y agua', color: '#8b5cf6' },
        { id: 'lacteos', icon: '🥛', name: 'Lácteos', description: 'Leche, quesos y más', color: '#3b82f6' },
        { id: 'carnes', icon: '🥩', name: 'Carnes', description: 'Cortes de calidad', color: '#dc2626' },
        { id: 'panaderia', icon: '🍞', name: 'Panadería', description: 'Pan fresco del día', color: '#d97706' },
        { id: 'limpieza', icon: '🧹', name: 'Limpieza', description: 'Todo para tu hogar', color: '#06b6d4' },
        { id: 'almacen', icon: '🍿', name: 'Almacén', description: 'Productos de despensa', color: '#f59e0b' },
    ];

    return (
        <section id="categorias" className="categories">
            <div className="container">
                <div className="section-title">
                    <h2>Nuestros Productos</h2>
                    <p>Encontrá todo lo que necesitás para tu hogar con la mejor calidad y los mejores precios</p>
                </div>

                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <Link
                            to={`/productos?categoria=${category.id}`}
                            key={category.id}
                            className="category-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="category-icon"
                                style={{ background: `linear-gradient(135deg, ${category.color}20 0%, ${category.color}10 100%)` }}
                            >
                                <span>{category.icon}</span>
                            </div>
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                            <div className="category-hover-effect" style={{ background: category.color }}></div>
                        </Link>
                    ))}
                </div>

                <div className="categories-cta">
                    <p>¿Querés ver todos nuestros productos?</p>
                    <Link to="/productos" className="btn btn-primary">
                        Ver catálogo completo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Categories;
