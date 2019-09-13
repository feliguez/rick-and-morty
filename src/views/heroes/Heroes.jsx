import React, { useState } from 'react';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';
import Context from '../../Context';
import { heroes } from '../../services/heroe.services';

import './Heroes.css';

const Heroes = () => {
  const [heroesList, setHeroesList] = useState(heroes);
  const [isRingUsed, setIsRingUsed] = useState(false);
  const [counter, setCounter] = useState(heroesList.length + 1);
  const [newUser, setNewUser] = useState({
    id: counter,
    name: '',
    race: '',
    age: undefined,
    weapon: '',
    isKill: false,
    useRing: false,
    editing: false
  });

  const handleKill = i => {
    let newHeroesList = heroesList.map((heroe, index) => {
      if (index === i) {
        heroe.isKill = !heroe.isKill;
      }
      return heroe;
    });
    const selected = newHeroesList.splice(i, 1); // elimina un elemento por posición del índice
    newHeroesList = newHeroesList.concat(selected); // une un array con otro

    setHeroesList(newHeroesList);
  };

  const handleRing = i => {
    // const newHeroesList = heroesList.slice();
    // const useRing = newHeroesList[i].useRing ? false : true;
    // newHeroesList[i].useRing = useRing;
    const newHeroesList = heroesList.map((heroe, index) => {
      if (index === i) {
        heroe.useRing = !heroe.useRing;
      }
      return heroe;
    });
    setHeroesList(newHeroesList);
    setIsRingUsed(true);
  };

  const handleRemove = i => {
    let newHeroesList = heroesList.slice(); // crea una copia del array original
    newHeroesList.splice(i, 1); // elimina un elemento por posición del índice
    // debugger;
    setHeroesList(newHeroesList);
  };

  const handleEdit = i => {
    let newHeroesList = heroesList.map((heroe, index) => {
      if (index === i) {
        heroe.editing = !heroe.editing;
      }
      return heroe;
    });
    setHeroesList(newHeroesList);
  };

  const handleOnChangeInput = event => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmitHeroe = event => {
    event.preventDefault();
    let newHeroesList = heroesList.slice();
    newHeroesList = newHeroesList.concat(newUser);
    setCounter(counter + 1);
    setNewUser({
      id: counter + 1,
      name: '',
      race: '',
      age: 0,
      weapon: '',
      isKill: false,
      useRing: false
    });
    setHeroesList(newHeroesList);
  };

  const handleUpdateHeroe = updatedHeroe => {
    const newHeroesList = heroesList.map(heroe => {
      if (heroe.id === updatedHeroe.id) {
        heroe.editing = !heroe.editing;
        return updatedHeroe;
      }
      return heroe;
    });
    setHeroesList(newHeroesList);
  };

  const state = {
    counter,
    heroesList,
    setHeroesList,
    isRingUsed,
    handleKill,
    handleRing,
    handleRemove,
    handleEdit,
    handleOnChangeInput,
    handleSubmitHeroe,
    newUser,
    handleUpdateHeroe
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
