import React from 'react';
import search from "../assets/search.png";

export default function SearchCom({ city, setCity, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <img
        src={search}
        alt="Search icon"
        className="search-icon"
        onClick={onSearch}
      />
    </div>
  );
}