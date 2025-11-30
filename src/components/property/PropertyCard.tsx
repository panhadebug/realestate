import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Property } from '../../types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

import { useFavorites } from '../../context/FavoritesContext';

interface PropertyCardProps {
    property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(property.id);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault();
        if (favorite) {
            removeFavorite(property.id);
        } else {
            addFavorite(property.id);
        }
    };

    return (
        <Card hover className="group h-full flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="primary">{property.type}</Badge>
                </div>
                <button
                    onClick={toggleFavorite}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors backdrop-blur-sm ${favorite
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-white/80 dark:bg-slate-900/80 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500'
                        }`}
                >
                    <Heart size={20} fill={favorite ? "currentColor" : "none"} />
                </button>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-bold text-xl">
                        ${property.price.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                        {property.title}
                    </h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <MapPin size={16} className="mr-1" />
                        <span className="line-clamp-1">{property.address}, {property.city}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Bed size={18} className="text-accent" />
                        <span className="text-sm font-medium">{property.beds} <span className="hidden sm:inline">Beds</span></span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Bath size={18} className="text-accent" />
                        <span className="text-sm font-medium">{property.baths} <span className="hidden sm:inline">Baths</span></span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                        <Square size={18} className="text-accent" />
                        <span className="text-sm font-medium">{property.sqft} <span className="hidden sm:inline">sqft</span></span>
                    </div>
                </div>

                <Link
                    to={`/property/${property.id}`}
                    className="block w-full text-center py-2.5 mt-4 rounded-lg bg-gray-50 dark:bg-slate-700 text-primary dark:text-white font-medium hover:bg-accent hover:text-white transition-colors duration-300"
                >
                    View Details
                </Link>
            </div>
        </Card>
    );
};
