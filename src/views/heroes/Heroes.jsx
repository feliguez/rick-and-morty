import React, { useState } from 'react';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';
import Context from '../../Context';
import { heroes } from '../../services/hero.services';

import './Heroes.css';

const Heroes = () => {
  const [heroesList, setHeroesList] = useState(heroes);
  const [isRingUsed, setIsRingUsed] = useState(false);

  const handleKill = i => {
    let newHeroesList = heroesList.slice(); // crea una copia del array original
    const isKill = newHeroesList[i].isKill ? false : true;
    newHeroesList[i].isKill = isKill;
    const selected = newHeroesList.splice(i, 1); // elimina un elemento por posición del índice
    newHeroesList = newHeroesList.concat(selected); // une un array con otro
    setHeroesList(newHeroesList);
  };

  const handleRing = i => {
    const newHeroesList = heroesList.slice();
    const useRing = newHeroesList[i].useRing ? false : true;
    newHeroesList[i].useRing = useRing;
    setHeroesList(newHeroesList);
    setIsRingUsed(true);
  };

  const state = {
    heroesList,
    setHeroesList,
    isRingUsed,
    handleKill,
    handleRing
  };

  return (
    <Context.Provider value={state}>
      <div className="container heroes">
        <Title>La Comunidad del Anillo</Title>
        <div className="heroes--container">
          {/* <div className="search-input">
            <input type="text" placeholder="Buscar héroe" />
          </div> */}
          <Form />
          <HeroesTable />
        </div>
      </div>
    </Context.Provider>
  );
};

export default Heroes;
