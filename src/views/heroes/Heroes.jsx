import React from 'react';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';
import './Heroes.css';

const Heroes = () => {
  return (
    <div className="heroes">
      <Title>La Comunidad del Anillo</Title>
      <div className="heroes_container">
        <div className="search-input">
          <input type="text" placeholder="Buscar héroe" />
        </div>
        <HeroesTable />
      </div>
    </div>
  );
};

export default Heroes;
