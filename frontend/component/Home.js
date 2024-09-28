// Home.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomDetail from './RoomDetail';
import './RoomCSS/home.css';

const Home = () => {
  const [roomType, setRoomType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Fetch available rooms based on search criteria
    const response = await fetch(`http://localhost:5000/search?type=${roomType}&maxPrice=${maxPrice}`);
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <div>
      {/* Hotel Name and Description Section */}
      <div className="position-relative">
        <img
          src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Background"
          className="img-fluid w-100"
        />
        <div className="overlay text-center text-white position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4">Welcome to Paradise Hotels</h1>
          <p className="lead">Experience luxury and comfort like never before.</p>
        </div>
      </div>

      {/* Room Filter Section */}
      <div className="container">
        <h2>Search Available Rooms</h2>
        <form onSubmit={handleSearch}>
          <div className="form-row">
            <div className="col">
              <select className="form-control" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option value="">Select Room Type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="deluxe">Deluxe</option>
                <option value="family">Family</option>
                <option value="standard">Standard</option>
              </select>
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>

        {/* Display Search Results */}
        {searchResults.length > 0 && (
          <RoomDetail rooms={searchResults} />
        )}
      </div>
    </div>
  );
};

export default Home;