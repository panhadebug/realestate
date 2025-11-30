import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyGalleryProps {
    images: string[];
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative group">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-slate-800">
                <img
                    src={images[currentIndex]}
                    alt={`Property view ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                />
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-900"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-900"
            >
                <ChevronRight size={24} />
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${currentIndex === index
                                ? 'ring-2 ring-accent ring-offset-2 dark:ring-offset-slate-950'
                                : 'opacity-70 hover:opacity-100'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
