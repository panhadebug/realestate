import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/mockData';
import { PropertyCard } from '../components/property/PropertyCard';
import { Button } from '../components/common/Button';
import { SlidersHorizontal } from 'lucide-react';

export const Properties: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';

    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [sortBy, setSortBy] = useState('newest');
    const [visibleCount, setVisibleCount] = useState(6);

    // Update searchTerm when URL param changes
    useEffect(() => {
        const query = searchParams.get('search');
        if (query !== null) {
            setSearchTerm(query);
        }
    }, [searchParams]);

    const filteredProperties = properties.filter(property => {
        const matchesSearch =
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.type.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Properties</h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Showing {filteredProperties.length} properties
                        </p>
                    </div>

                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Button variant="outline" className="flex items-center gap-2">
                            <SlidersHorizontal size={18} />
                            Filters
                        </Button>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-accent"
                        >
                            <option value="featured">Sort by: Featured</option>
                            <option value="price_asc">Price: Low to High</option>
                            <option value="price_desc">Price: High to Low</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.slice(0, visibleCount).map((property, index) => (
                        <div
                            key={property.id}
                            className="animate-in fade-in slide-in-from-bottom-5 duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <PropertyCard property={property} />
                        </div>
                    ))}
                </div>

                {visibleCount < filteredProperties.length && (
                    <div className="mt-12 flex justify-center">
                        <Button variant="outline" size="lg" onClick={() => setVisibleCount(prev => prev + 6)}>
                            Load More
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
