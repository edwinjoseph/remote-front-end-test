import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ loading, error, items = [] }) => {
    return (
        <div className="PropertyListing">
            {loading && (
                <div className="loading">Loading...</div>
            )}
            {!loading && !!error && (
                <div>Whoops, something went wrong! Try again later</div>
            )}
            {!loading && !error && items.map(property => (
                <PropertyCard key={property.id} {...property} />
            ))}
        </div>
    )
};

export default PropertyListing;
