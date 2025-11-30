import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Home className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-primary dark:text-white">
                                Estate<span className="text-accent">Prime</span>
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Discover your dream home with our premium real estate services. We help you find the perfect property that matches your lifestyle.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-400 hover:text-accent transition-colors"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Properties', 'Agents', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-6">Services</h3>
                        <ul className="space-y-4">
                            {['Buy a Home', 'Sell a Home', 'Rent a Home', 'Property Management', 'Consulting'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                                <span>123 Real Estate Blvd,<br />Beverly Hills, CA 90210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <Phone size={20} className="text-accent shrink-0" />
                                <span>(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <Mail size={20} className="text-accent shrink-0" />
                                <span>hello@estateprime.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-800 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} EstatePrime. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
