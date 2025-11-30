import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { Button } from '../components/common/Button';

export const Blog: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Real Estate Insights</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest trends, market analysis, and home improvement tips.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-800 flex flex-col">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={16} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <Button variant="outline" size="sm" className="self-start flex items-center gap-2 group">
                                    Read More
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
