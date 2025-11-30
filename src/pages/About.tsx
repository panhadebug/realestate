import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
            bio: 'With over 15 years of experience in luxury real estate, Sarah leads the team with vision and integrity.'
        },
        {
            name: 'Michael Chen',
            role: 'Head of Sales',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
            bio: 'Michael is an expert in negotiation and market analysis, ensuring our clients get the best deals.'
        },
        {
            name: 'Emily White',
            role: 'Senior Agent',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
            bio: 'Emily specializes in residential properties and is known for her exceptional customer service.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* Hero */}
            <section className="relative py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About Estate<span className="text-accent">Prime</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We are redefining the real estate experience with a focus on luxury, technology, and personalized service.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Client Focus</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our clients are at the heart of everything we do. We listen, understand, and deliver results.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Excellence</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We strive for excellence in every transaction, ensuring the highest standards of professionalism.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We leverage the latest technology and market insights to give our clients a competitive edge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                                    <p className="text-accent font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
