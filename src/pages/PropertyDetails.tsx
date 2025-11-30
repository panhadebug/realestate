import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Phone, Mail, Calendar } from 'lucide-react';
import { properties } from '../data/mockData';
import { PropertyGallery } from '../components/property/PropertyGallery';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const PropertyDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const property = properties.find(p => p.id === id);

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Property not found</h2>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <PropertyGallery images={property.images} />

                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{property.title}</h1>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <MapPin size={20} className="mr-2 text-accent" />
                                    <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-accent">${property.price.toLocaleString()}</p>
                                <Badge variant="primary" className="mt-2">{property.type}</Badge>
                            </div>
                        </div>

                        <div className="flex gap-8 py-6 border-y border-gray-200 dark:border-slate-700">
                            <div className="flex items-center gap-2">
                                <Bed size={24} className="text-gray-400" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">{property.beds}</p>
                                    <p className="text-sm text-gray-500">Beds</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Bath size={24} className="text-gray-400" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">{property.baths}</p>
                                    <p className="text-sm text-gray-500">Baths</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Square size={24} className="text-gray-400" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">{property.sqft}</p>
                                    <p className="text-sm text-gray-500">Sq Ft</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {property.description}
                            </p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 sticky top-24">
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={property.agent.image}
                                alt={property.agent.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{property.agent.name}</h3>
                                <p className="text-sm text-gray-500">Listing Agent</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <Button className="w-full flex items-center justify-center gap-2">
                                <Phone size={18} />
                                {property.agent.phone}
                            </Button>
                            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                <Mail size={18} />
                                Send Email
                            </Button>
                        </div>

                        <div className="pt-6 border-t border-gray-100 dark:border-slate-700">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Schedule a Tour</h4>
                            <div className="space-y-3">
                                <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                                    <Calendar size={18} />
                                    Request Tour
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
