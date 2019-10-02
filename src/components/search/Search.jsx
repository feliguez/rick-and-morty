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
      <div className="form-group row  justify-content-center">
        <div className="col-sm-6">
          <label htmlFor="name" className="col-form-label">
            Buscar héroe por nombre
          </label>
          <input
            value={heroeName}
            type="text"
            placeholder="Legolas"
            onChange={handleFilterHeroe}
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
