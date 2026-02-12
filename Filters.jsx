import React from 'react';

const Filters = ({ locations, types, selectedLocation, selectedType, onFilterChange }) => {
  return (
    <div className="filters">
      <select value={selectedLocation} onChange={(e) => onFilterChange('location', e.target.value)}>
        <option value="">All Locations</option>
        {locations.map((loc, idx) => <option key={idx} value={loc}>{loc}</option>)}
      </select>

      <select value={selectedType} onChange={(e) => onFilterChange('type', e.target.value)}>
        <option value="">All Types</option>
        {types.map((type, idx) => <option key={idx} value={type}>{type}</option>)}
      </select>
    </div>
  );
};

export default Filters;
