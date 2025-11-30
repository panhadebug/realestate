import { Property, BlogPost } from '../types';

export const properties: Property[] = [
    {
        id: '1',
        title: 'Modern Luxury Villa',
        price: 2500000,
        address: '123 Palm Avenue',
        city: 'Beverly Hills',
        state: 'CA',
        zip: '90210',
        beds: 5,
        baths: 4,
        sqft: 4200,
        type: 'House',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Experience luxury living in this stunning modern villa featuring panoramic views, infinity pool, and state-of-the-art amenities.',
        features: ['Pool', 'Gym', 'Home Theater', 'Wine Cellar', 'Smart Home'],
        agent: {
            id: 'a1',
            name: 'Sarah Johnson',
            email: 'sarah@luxuryestates.com',
            phone: '(555) 123-4567',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 34.0736, lng: -118.4004 },
        isFeatured: true
    },
    {
        id: '2',
        title: 'Downtown Penthouse',
        price: 1800000,
        address: '456 Skyline Blvd',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        beds: 3,
        baths: 3,
        sqft: 2800,
        type: 'Apartment',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Breathtaking city views from this top-floor penthouse. Open concept living with floor-to-ceiling windows.',
        features: ['Concierge', 'Rooftop Deck', 'Parking', 'Gym'],
        agent: {
            id: 'a2',
            name: 'Michael Chen',
            email: 'michael@urbanliving.com',
            phone: '(555) 987-6543',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 40.7128, lng: -74.0060 },
        isFeatured: true
    },
    {
        id: '3',
        title: 'Cozy Cottage',
        price: 450000,
        address: '789 Maple Lane',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
        beds: 2,
        baths: 2,
        sqft: 1500,
        type: 'House',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Charming cottage with a beautiful garden and renovated interior. Perfect for a small family.',
        features: ['Garden', 'Fireplace', 'Hardwood Floors'],
        agent: {
            id: 'a1',
            name: 'Sarah Johnson',
            email: 'sarah@luxuryestates.com',
            phone: '(555) 123-4567',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 30.2672, lng: -97.7431 },
        isFeatured: false
    },
    {
        id: '4',
        title: 'Seaside Retreat',
        price: 3200000,
        address: '101 Ocean Drive',
        city: 'Miami',
        state: 'FL',
        zip: '33101',
        beds: 6,
        baths: 5,
        sqft: 5500,
        type: 'House',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Direct ocean access with private dock. This sprawling estate offers the ultimate waterfront lifestyle.',
        features: ['Private Dock', 'Pool', 'Guest House', 'Outdoor Kitchen'],
        agent: {
            id: 'a3',
            name: 'Jessica Davis',
            email: 'jessica@coastalhomes.com',
            phone: '(555) 456-7890',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 25.7617, lng: -80.1918 },
        isFeatured: true
    },
    {
        id: '5',
        title: 'Modern Loft',
        price: 850000,
        address: '55 Industrial Way',
        city: 'Chicago',
        state: 'IL',
        zip: '60601',
        beds: 1,
        baths: 1.5,
        sqft: 1200,
        type: 'Apartment',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Converted warehouse loft with exposed brick and high ceilings. Located in the heart of the arts district.',
        features: ['Exposed Brick', 'High Ceilings', 'Smart Home'],
        agent: {
            id: 'a2',
            name: 'Michael Chen',
            email: 'michael@urbanliving.com',
            phone: '(555) 987-6543',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 41.8781, lng: -87.6298 },
        isFeatured: false
    },
    {
        id: '6',
        title: 'Mountain Cabin',
        price: 650000,
        address: '42 Pine Ridge',
        city: 'Aspen',
        state: 'CO',
        zip: '81611',
        beds: 3,
        baths: 2,
        sqft: 1800,
        type: 'House',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Rustic luxury in the mountains. Ski-in/ski-out access and a hot tub for apres-ski relaxation.',
        features: ['Hot Tub', 'Fireplace', 'Ski Access', 'Mountain View'],
        agent: {
            id: 'a1',
            name: 'Sarah Johnson',
            email: 'sarah@luxuryestates.com',
            phone: '(555) 123-4567',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 39.1911, lng: -106.8175 },
        isFeatured: true
    },
    {
        id: '7',
        title: 'Suburban Family Home',
        price: 750000,
        address: '88 Oak Street',
        city: 'Seattle',
        state: 'WA',
        zip: '98101',
        beds: 4,
        baths: 3,
        sqft: 2400,
        type: 'House',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Spacious family home with a large backyard and updated kitchen. Close to top-rated schools.',
        features: ['Backyard', 'Garage', 'Updated Kitchen'],
        agent: {
            id: 'a3',
            name: 'Jessica Davis',
            email: 'jessica@coastalhomes.com',
            phone: '(555) 456-7890',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 47.6062, lng: -122.3321 },
        isFeatured: false
    },
    {
        id: '8',
        title: 'Luxury Condo',
        price: 1200000,
        address: '200 Bay View',
        city: 'San Francisco',
        state: 'CA',
        zip: '94105',
        beds: 2,
        baths: 2,
        sqft: 1400,
        type: 'Condo',
        image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Modern condo with bay views and high-end finishes. Building amenities include a gym and doorman.',
        features: ['Bay View', 'Gym', 'Doorman', 'Parking'],
        agent: {
            id: 'a2',
            name: 'Michael Chen',
            email: 'michael@urbanliving.com',
            phone: '(555) 987-6543',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 37.7749, lng: -122.4194 },
        isFeatured: true
    },
    {
        id: '9',
        title: 'Historic Townhouse',
        price: 2100000,
        address: '15 Beacon Hill',
        city: 'Boston',
        state: 'MA',
        zip: '02108',
        beds: 4,
        baths: 3.5,
        sqft: 3200,
        type: 'Townhouse',
        image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&q=80&w=1600'
        ],
        description: 'Beautifully preserved historic townhouse with original details and modern updates. Private courtyard.',
        features: ['Historic Details', 'Courtyard', 'Fireplace'],
        agent: {
            id: 'a1',
            name: 'Sarah Johnson',
            email: 'sarah@luxuryestates.com',
            phone: '(555) 123-4567',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
        },
        location: { lat: 42.3601, lng: -71.0589 },
        isFeatured: true
    }
];

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Art of Minimalist Living',
        excerpt: 'How to declutter your space and mind for a more peaceful and productive home environment.',
        content: '...',
        author: 'Elena Fisher',
        date: 'Oct 20, 2025',
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '2',
        title: 'Investing in Real Estate: A Beginner\'s Guide',
        excerpt: 'Learn the basics of real estate investment and how to build a profitable portfolio.',
        content: '...',
        author: 'David Miller',
        date: 'Sep 28, 2025',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '3',
        title: 'Sustainable Living: Eco-Friendly Home Features',
        excerpt: 'Explore the latest green technologies and sustainable features that are becoming standard in modern homes.',
        content: '...',
        author: 'Sarah Green',
        date: 'Sep 10, 2025',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '4',
        title: 'Maximizing Curb Appeal on a Budget',
        excerpt: 'Simple and affordable ways to make your home look its best from the outside.',
        content: '...',
        author: 'Mike Builder',
        date: 'Aug 22, 2025',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '5',
        title: 'Creating the Perfect Home Office',
        excerpt: 'Tips and tricks for designing a workspace that boosts productivity and creativity.',
        content: '...',
        author: 'James Wilson',
        date: 'Aug 15, 2025',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '6',
        title: 'Navigating the Housing Market in 2025',
        excerpt: 'Expert analysis and predictions for the real estate market in the coming year.',
        content: '...',
        author: 'Market Watch',
        date: 'Jul 30, 2025',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800'
    }
];
