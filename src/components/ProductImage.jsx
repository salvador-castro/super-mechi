// Componente helper para mostrar imagen de producto
// Soporta tanto emojis como URLs de imágenes
export const ProductImage = ({ imagen, alt, className = '' }) => {
    // Si es una URL (empieza con http, https, / o contiene extensión de imagen)
    const isImageUrl = imagen && (
        imagen.startsWith('http') ||
        imagen.startsWith('/') ||
        imagen.includes('.jpg') ||
        imagen.includes('.png') ||
        imagen.includes('.webp')
    );

    if (isImageUrl) {
        return (
            <div className={`product-image ${className}`}>
                <img
                    src={imagen}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 'inherit'
                    }}
                />
            </div>
        );
    }

    // Si es un emoji o texto
    return (
        <div className={`product-image ${className}`}>
            {imagen}
        </div>
    );
};

export default ProductImage;
