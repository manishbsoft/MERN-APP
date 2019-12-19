import React from "react";
import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7485624,
            lng: -73.9917369
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no',
        address: '20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 40.7485624,
            lng: -73.9917369
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
