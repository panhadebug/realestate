import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { properties } from '../data/mockData';
import { PropertyCard } from '../components/property/PropertyCard';

export const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const featuredProperties = properties.filter(p => p.isFeatured);

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/properties?search=${encodeURIComponent(searchTerm)}`);
        } else {
            navigate('/properties');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        Find Your Dream Home
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        Discover the perfect property in the most desirable locations.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white p-4 rounded-lg shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                        <div className="flex-grow">
                            <Input
                                placeholder="Search by location, property type..."
                                icon={<Search size={20} />}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleKeyPress}
                                className="h-12 border-none bg-gray-50 focus:ring-0 text-gray-900"
                            />
                        </div>
                        <div className="md:w-48">
                            <Button size="lg" className="w-full h-12" onClick={handleSearch}>Search</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Listings */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Properties</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our hand-picked selection of premium properties available for sale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" onClick={() => navigate('/properties')}>View All Properties</Button>
                </div>
            </section>
        </div>
    );
};

