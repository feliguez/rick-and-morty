import React, { Component } from 'react';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';
import Context from '../../Context';
import { heroes } from '../../services/hero.services';
import './Heroes.css';

class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesList: heroes,
      isRingUsed: false,
      handleKill: this.handleKill,
      handleRing: this.handleRing
    };
  }

  handleKill = i => {
    const { heroesList } = this.state;
    let newHeroesList = heroesList.slice(); // crea una copia del array original
    const isKill = newHeroesList[i].isKill ? false : true;
    newHeroesList[i].isKill = isKill;
    const selected = newHeroesList.splice(i, 1); // elimina un elemento por posición del índice
    newHeroesList = newHeroesList.concat(selected); // une un array con otro
    this.setState({ heroesList: newHeroesList });
  };

  handleRing = i => {
    const { heroesList } = this.state;
    const newHeroesList = heroesList.slice();
    const useRing = newHeroesList[i].useRing ? false : true;
    newHeroesList[i].useRing = useRing;
    this.setState({ heroesList: newHeroesList, isRingUsed: true });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="heroes">
          <Title>La Comunidad del Anillo</Title>
          <div className="heroes_container">
            <div className="search-input">
              <input type="text" placeholder="Buscar héroe" />
            </div>
            <HeroesTable />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default Heroes;
