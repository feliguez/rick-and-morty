import React, { useState } from 'react';

const Search = ({ filterHeroe }) => {
  const [heroeName, setHeroeName] = useState('');

  const handleFilterHeroe = event => {
    const { value } = event.target;

    setHeroeName(value);
    filterHeroe(value);
  };

  return (
    <div className="search-input">
      <input
        value={heroeName}
        type="text"
        placeholder="Buscar héroe"
        onChange={handleFilterHeroe}
      />
    </div>
  );
};

export default Search;
