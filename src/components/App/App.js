import React, { useState, useEffect } from 'react';
import fetch from 'cross-fetch';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import './App.scss';

const App = () => {
    const [ properties, setProperties ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:3000/api/properties');
                const data = await res.json();
                setProperties(data);
            } catch (err) {
                console.log('Error: Failed to fetch properties', err);
                setError(err);
            }
            setLoading(false);
        })();
    });

    return (
        <div className="App">
            <Header/>
            <main>
                <SortAndFilter/>
                <PropertyListing loading={loading} items={properties} error={error} />
            </main>
        </div>
    );
};

export default App;
