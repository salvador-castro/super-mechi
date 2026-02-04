export const categories = [
    // { id: 'frutas', name: 'Frutas', icon: '🍎', color: '#ef4444' },
    // { id: 'verduras', name: 'Verduras', icon: '🥬', color: '#22c55e' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤', color: '#8b5cf6' },
    { id: 'lacteos', name: 'Lácteos', icon: '🥛', color: '#3b82f6' },
    { id: 'carnes', name: 'Carnes', icon: '🥩', color: '#dc2626' },
    { id: 'panaderia', name: 'Panadería', icon: '🍞', color: '#d97706' },
    { id: 'limpieza', name: 'Limpieza', icon: '🧹', color: '#06b6d4' },
    { id: 'almacen', name: 'Almacén', icon: '🍿', color: '#f59e0b' },
];

export const products = [
    // Frutas
    { id: 1, nombre: 'Manzana Roja', precio: 350, categoria: 'Frutas', categoriaId: 'frutas', imagen: '🍎', unidad: 'kg' },
    { id: 2, nombre: 'Banana', precio: 450, categoria: 'Frutas', categoriaId: 'frutas', imagen: '🍌', unidad: 'kg' },
    { id: 3, nombre: 'Naranja', precio: 380, categoria: 'Frutas', categoriaId: 'frutas', imagen: '🍊', unidad: 'kg' },
    { id: 4, nombre: 'Limón', precio: 320, categoria: 'Frutas', categoriaId: 'frutas', imagen: '🍋', unidad: 'kg' },
    { id: 5, nombre: 'Pera', precio: 420, categoria: 'Frutas', categoriaId: 'frutas', imagen: '🍐', unidad: 'kg' },
    { id: 6, nombre: 'Uva', precio: 650, categoria: 'Frutas', categoriaId: 'frutas', imagen: '🍇', unidad: 'kg' },

    // Verduras
    { id: 7, nombre: 'Tomate', precio: 380, categoria: 'Verduras', categoriaId: 'verduras', imagen: '🍅', unidad: 'kg' },
    { id: 8, nombre: 'Lechuga', precio: 280, categoria: 'Verduras', categoriaId: 'verduras', imagen: '🥬', unidad: 'un' },
    { id: 9, nombre: 'Zanahoria', precio: 220, categoria: 'Verduras', categoriaId: 'verduras', imagen: '🥕', unidad: 'kg' },
    { id: 10, nombre: 'Papa', precio: 180, categoria: 'Verduras', categoriaId: 'verduras', imagen: '🥔', unidad: 'kg' },
    { id: 11, nombre: 'Cebolla', precio: 200, categoria: 'Verduras', categoriaId: 'verduras', imagen: '🧅', unidad: 'kg' },
    { id: 12, nombre: 'Pimiento', precio: 450, categoria: 'Verduras', categoriaId: 'verduras', imagen: '🫑', unidad: 'kg' },

    // Lácteos
    { id: 13, nombre: 'Leche Entera 1L', precio: 850, categoria: 'Lácteos', categoriaId: 'lacteos', imagen: '🥛', unidad: 'un' },
    { id: 14, nombre: 'Yogur Natural', precio: 620, categoria: 'Lácteos', categoriaId: 'lacteos', imagen: '🥛', unidad: 'un' },
    { id: 15, nombre: 'Queso Cremoso', precio: 1200, categoria: 'Lácteos', categoriaId: 'lacteos', imagen: '🧀', unidad: 'kg' },
    { id: 16, nombre: 'Manteca', precio: 980, categoria: 'Lácteos', categoriaId: 'lacteos', imagen: '🧈', unidad: 'un' },
    { id: 17, nombre: 'Crema de Leche', precio: 750, categoria: 'Lácteos', categoriaId: 'lacteos', imagen: '🥛', unidad: 'un' },

    // Carnes
    { id: 18, nombre: 'Carne Picada', precio: 2800, categoria: 'Carnes', categoriaId: 'carnes', imagen: '🥩', unidad: 'kg' },
    { id: 19, nombre: 'Milanesa de Pollo', precio: 2200, categoria: 'Carnes', categoriaId: 'carnes', imagen: '🍗', unidad: 'kg' },
    { id: 20, nombre: 'Asado', precio: 3500, categoria: 'Carnes', categoriaId: 'carnes', imagen: '🥩', unidad: 'kg' },
    { id: 21, nombre: 'Pollo Entero', precio: 1800, categoria: 'Carnes', categoriaId: 'carnes', imagen: '🍗', unidad: 'kg' },
    { id: 22, nombre: 'Chorizo', precio: 2400, categoria: 'Carnes', categoriaId: 'carnes', imagen: '🌭', unidad: 'kg' },

    // Panadería
    { id: 23, nombre: 'Pan Francés', precio: 450, categoria: 'Panadería', categoriaId: 'panaderia', imagen: '🥖', unidad: 'kg' },
    { id: 24, nombre: 'Facturas x6', precio: 1200, categoria: 'Panadería', categoriaId: 'panaderia', imagen: '🥐', unidad: 'un' },
    { id: 25, nombre: 'Pan Lactal', precio: 850, categoria: 'Panadería', categoriaId: 'panaderia', imagen: '🍞', unidad: 'un' },
    { id: 26, nombre: 'Medialunas x6', precio: 980, categoria: 'Panadería', categoriaId: 'panaderia', imagen: '🥐', unidad: 'un' },

    // Bebidas
    { id: 27, nombre: 'Coca-Cola 2.25L', precio: 1850, categoria: 'Bebidas', categoriaId: 'bebidas', imagen: '/assets/productos/gaseosas/coca-cola-225.jpg', unidad: 'un' },
    { id: 28, nombre: 'Agua Mineral 2L', precio: 650, categoria: 'Bebidas', categoriaId: 'bebidas', imagen: '💧', unidad: 'un' },
    { id: 29, nombre: 'Jugo de Naranja 1L', precio: 1200, categoria: 'Bebidas', categoriaId: 'bebidas', imagen: '🧃', unidad: 'un' },
    { id: 30, nombre: 'Cerveza Lata', precio: 850, categoria: 'Bebidas', categoriaId: 'bebidas', imagen: '🍺', unidad: 'un' },
    { id: 31, nombre: 'Vino Tinto', precio: 2500, categoria: 'Bebidas', categoriaId: 'bebidas', imagen: '🍷', unidad: 'un' },

    // Limpieza
    { id: 32, nombre: 'Detergente 750ml', precio: 980, categoria: 'Limpieza', categoriaId: 'limpieza', imagen: '🧴', unidad: 'un' },
    { id: 33, nombre: 'Lavandina 1L', precio: 450, categoria: 'Limpieza', categoriaId: 'limpieza', imagen: '🧪', unidad: 'un' },
    { id: 34, nombre: 'Jabón en Polvo 800g', precio: 1650, categoria: 'Limpieza', categoriaId: 'limpieza', imagen: '🧼', unidad: 'un' },
    { id: 35, nombre: 'Papel Higiénico x4', precio: 1200, categoria: 'Limpieza', categoriaId: 'limpieza', imagen: '🧻', unidad: 'un' },

    // Almacén
    { id: 36, nombre: 'Arroz 1kg', precio: 850, categoria: 'Almacén', categoriaId: 'almacen', imagen: '🍚', unidad: 'un' },
    { id: 37, nombre: 'Fideos 500g', precio: 520, categoria: 'Almacén', categoriaId: 'almacen', imagen: '🍝', unidad: 'un' },
    { id: 38, nombre: 'Aceite Girasol 1.5L', precio: 1450, categoria: 'Almacén', categoriaId: 'almacen', imagen: '🫒', unidad: 'un' },
    { id: 39, nombre: 'Azúcar 1kg', precio: 680, categoria: 'Almacén', categoriaId: 'almacen', imagen: '🧂', unidad: 'un' },
    { id: 40, nombre: 'Harina 1kg', precio: 450, categoria: 'Almacén', categoriaId: 'almacen', imagen: '🌾', unidad: 'un' },
    { id: 41, nombre: 'Galletitas Dulces', precio: 750, categoria: 'Almacén', categoriaId: 'almacen', imagen: '🍪', unidad: 'un' },
    { id: 42, nombre: 'Café 250g', precio: 1850, categoria: 'Almacén', categoriaId: 'almacen', imagen: '☕', unidad: 'un' },
];

export const getProductsByCategory = (categoryId) => {
    if (!categoryId || categoryId === 'todos') {
        return products;
    }
    return products.filter((product) => product.categoriaId === categoryId);
};

export const getCategoryById = (categoryId) => {
    return categories.find((cat) => cat.id === categoryId);
};
