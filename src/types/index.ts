export interface Property {
    id: string;
    title: string;
    price: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    beds: number;
    baths: number;
    sqft: number;
    type: 'House' | 'Apartment' | 'Condo' | 'Townhouse';
    image: string;
    images: string[];
    description: string;
    features: string[];
    agent: Agent;
    location: {
        lat: number;
        lng: number;
    };
    isFeatured?: boolean;
}

export interface Agent {
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: string;
}
