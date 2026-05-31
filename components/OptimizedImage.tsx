import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, ...props }) => {
    // Gera o caminho da imagem WebP substituindo a extensão original
    const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    return (
        <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img src={src} alt={alt} className={className} {...props} loading="lazy" />
        </picture>
    );
};

export default OptimizedImage;
