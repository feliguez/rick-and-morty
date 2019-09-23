import React from 'react';
import { connect, batch } from 'react-redux';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';

import {
  ringHeroe,
  removeHeroe,
  addHeroe
} from '../../store/actions/heroe.actions';

import './Heroes.css';

const Heroes = props => {
  const {
    isRingUsed,
    ringHeroe,
    removeHeroe,
    heroes,
    addHeroe,
    counter
  } = props;

  // const handleEdit = i => {
  //   let newHeroesList = heroesList.map((heroe, index) => {
  //     if (index === i) {
  //       heroe.editing = !heroe.editing;
  //     }
  //     return heroe;
  //   });
  //   setHeroesList(newHeroesList);
  // };

  // const handleSubmitHeroe = event => {
  //   event.preventDefault();
  //   let newHeroesList = heroesList.slice();
  //   newHeroesList = newHeroesList.concat(newUser);
  //   setCounter(counter + 1);
  //   setNewUser({
  //     id: counter + 1,
  //     name: '',
  //     race: '',
  //     age: 0,
  //     weapon: '',
  //     isKill: false,
  //     useRing: false
  //   });
  //   setHeroesList(newHeroesList);
  // };

  // const handleUpdateHeroe = updatedHeroe => {
  //   const newHeroesList = heroesList.map(heroe => {
  //     if (heroe.id === updatedHeroe.id) {
  //       heroe.editing = !heroe.editing;
  //       return updatedHeroe;
  //     }
  //     return heroe;
  //   });
  //   setHeroesList(newHeroesList);
  // };

  return (
    <div className="container heroes">
      <Title>La Comunidad del Anillo</Title>
      <div className="heroes--container">
        {/* <div className="search-input">
            <input type="text" placeholder="Buscar héroe" />
          </div> */}
        <Form counter={counter} addHeroe={addHeroe} />
        <HeroesTable
          heroes={heroes}
          ringHeroe={ringHeroe}
          removeHeroe={removeHeroe}
          isRingUsed={isRingUsed}
        />
      </div>
    </div>
  );
};

const mapStatetoProps = state => state.heroes;

const mapDispatchToProps = dispatch => {
  return {
    addHeroe: heroes => {
      batch(() => {
        dispatch(addHeroe(heroes));
        // dispatch(increaseCounter());
      });
    },
    ringHeroe: heroes => {
      dispatch(ringHeroe(heroes));
    },
    removeHeroe: heroes => dispatch(removeHeroe(heroes))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Heroes);
