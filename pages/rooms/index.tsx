import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Define TypeScript types for Room and Amenity
interface Room {
    id: number;
    type: 'deluxe' | 'suite' | 'standard';
    name: string;
    description: string;
    price: number;
    image: string;
}

interface Amenity {
    id: string;
    label: string;
}

const mockRooms: Room[] = [
    {
        id: 1,
        type: 'deluxe',
        name: 'Deluxe Room',
        description: 'A spacious room with all modern amenities and a beautiful view.',
        price: 120,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 2,
        type: 'suite',
        name: 'Suite Room',
        description: 'A luxurious suite with premium facilities for a memorable stay.',
        price: 200,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 3,
        type: 'standard',
        name: 'Standard Room',
        description: 'A comfortable room designed for budget-conscious travelers.',
        price: 80,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 4,
        type: 'deluxe',
        name: 'Deluxe Room',
        description: 'A spacious room with all modern amenities and a beautiful view.',
        price: 120,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 5,
        type: 'suite',
        name: 'Suite Room',
        description: 'A luxurious suite with premium facilities for a memorable stay.',
        price: 200,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 6,
        type: 'standard',
        name: 'Standard Room',
        description: 'A comfortable room designed for budget-conscious travelers.',
        price: 80,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 7,
        type: 'deluxe',
        name: 'Deluxe Room',
        description: 'A spacious room with all modern amenities and a beautiful view.',
        price: 120,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 8,
        type: 'suite',
        name: 'Suite Room',
        description: 'A luxurious suite with premium facilities for a memorable stay.',
        price: 200,
        image: '/assets/image/bg_home.svg',
    },
    {
        id: 9,
        type: 'standard',
        name: 'Standard Room',
        description: 'A comfortable room designed for budget-conscious travelers.',
        price: 80,
        image: '/assets/image/bg_home.svg',
    },
];

const mockAmenities: Amenity[] = [
    { id: 'wifi', label: 'Free Wi-Fi' },
    { id: 'pool', label: 'Pool' },
    { id: 'parking', label: 'Free Parking' },
];

// Main component
const RoomsPage: React.FC = () => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [amenities, setAmenities] = useState<Amenity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setRooms(mockRooms);
            setAmenities(mockAmenities);
            setLoading(false);
        }, 1000);
    }, []);

    // Loading state
    if (loading) {
        return (
            <div className="container-lg text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <main className="d-flex gap-4 p-4">
                {/* Filter Section */}
                <aside className="col-md-3 bg-white p-3 rounded shadow-sm">
                    <h2 className="h5 font-weight-medium text-dark mb-4">Filters</h2>
                    <div className="mb-4">
                        <label className="form-label text-dark">Room Type</label>
                        <select className="form-select">
                            <option value="">All Types</option>
                            <option value="deluxe">Deluxe Room</option>
                            <option value="suite">Suite Room</option>
                            <option value="standard">Standard Room</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-dark">Price Range</label>
                        <input type="range" min="50" max="500" step="10" className="form-range w-100" />
                        <div className="d-flex justify-content-between text-muted small">
                            <span>$50</span>
                            <span>$500</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-dark">Amenities</label>
                        {amenities.map((amenity) => (
                            <div className="form-check" key={amenity.id}>
                                <input type="checkbox" id={amenity.id} className="form-check-input" />
                                <label htmlFor={amenity.id} className="form-check-label text-dark">
                                    {amenity.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary w-100 mt-3">Apply Filters</button>
                </aside>

                {/* Room Listings Section */}
                <div className="flex-1">
                    <div className="mb-4 d-flex gap-4">
                        <input type="text" placeholder="Search by room type..." className="form-control" />
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <section className="mb-4">
                        <h2 className="h5 font-weight-medium text-dark mb-4">Available Rooms</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {rooms.map((room) => (
                                <article className="col" key={room.id}>
                                    <div className="card h-100 shadow-lg">
                                        {/* Uniform image sizing */}
                                        <div className="card-img-container" style={{ height: '200px' }}>
                                            <img
                                                src={room.image}
                                                alt={room.name}
                                                className="card-img-top rounded"
                                                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{room.name}</h5>
                                            <p className="card-text text-muted">{room.description}</p>
                                            <p className="card-text font-weight-bold">${room.price.toFixed(2)}/night</p>
                                            {/* Use Link for navigation */}
                                            <Link href={`/rooms/detail/${room.id}`} passHref>
                                                <button className="btn btn-primary">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default RoomsPage;
