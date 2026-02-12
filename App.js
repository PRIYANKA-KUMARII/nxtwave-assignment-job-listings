import React, { useState } from 'react';
import { jobs } from './jobsData';
import JobCard from './components/JobCard';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const locations = [...new Set(jobs.map(job => job.location))];
  const types = [...new Set(jobs.map(job => job.type))];

  const filteredJobs = jobs
    .filter(job => !selectedLocation || job.location === selectedLocation)
    .filter(job => !selectedType || job.type === selectedType)
    .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'location') setSelectedLocation(value);
    if (filterType === 'type') setSelectedType(value);
  };

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Filters
        locations={locations}
        types={types}
        selectedLocation={selectedLocation}
        selectedType={selectedType}
        onFilterChange={handleFilterChange}
      />
      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default App;
