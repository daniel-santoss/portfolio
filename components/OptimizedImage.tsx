import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, className, ...props }) => {
    // Generate WebP path by replacing extension
    // We assume the webp file sits next to the original file
    const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    return (
        <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img src={src} alt={alt} className={className} {...props} loading="lazy" />
        </picture>
    );
};

export default OptimizedImage;
