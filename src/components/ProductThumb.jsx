// Componente helper para mostrar imagen de producto en preview (navbar, checkout)
// Soporta tanto emojis como URLs de imágenes
const ProductThumb = ({ imagen, alt, size = 'md' }) => {
    // Si es una URL (empieza con http, https, / o contiene extensión de imagen)
    const isImageUrl = imagen && (
        imagen.startsWith('http') ||
        imagen.startsWith('/') ||
        imagen.includes('.jpg') ||
        imagen.includes('.png') ||
        imagen.includes('.webp')
    );

    const sizes = {
        sm: '24px',
        md: '32px',
        lg: '48px'
    };

    const sizeValue = sizes[size] || sizes.md;

    if (isImageUrl) {
        return (
            <img
                src={imagen}
                alt={alt}
                style={{
                    width: sizeValue,
                    height: sizeValue,
                    objectFit: 'cover',
                    borderRadius: '6px',
                    flexShrink: 0
                }}
            />
        );
    }

    // Si es un emoji o texto
    return (
        <span style={{ fontSize: size === 'lg' ? '1.5rem' : '1.25rem', flexShrink: 0 }}>
            {imagen}
        </span>
    );
};

export default ProductThumb;
