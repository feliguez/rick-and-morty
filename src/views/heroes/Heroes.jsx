import React from 'react';
import { connect, batch } from 'react-redux';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';

import { ringHeroe, removeHeroe } from '../../store/actions/heroe.actions';

import './Heroes.css';

const Heroes = props => {
  const { isRingUsed, ringHeroe, removeHeroe, heroes } = props;

  // const [newUser, setNewUser] = useState({
  //   id: counter,
  //   name: '',
  //   race: '',
  //   age: undefined,
  //   weapon: '',
  //   isKill: false,
  //   useRing: false,
  //   editing: false
  // });

  // const handleKill = i => {
  //   let newHeroesList = heroesList.map((heroe, index) => {
  //     if (index === i) {
  //       heroe.isKill = !heroe.isKill;
  //     }
  //     return heroe;
  //   });
  //   const selected = newHeroesList.splice(i, 1); // elimina un elemento por posición del índice
  //   newHeroesList = newHeroesList.concat(selected); // une un array con otro

  //   setHeroesList(newHeroesList);
  // };

  // const handleEdit = i => {
  //   let newHeroesList = heroesList.map((heroe, index) => {
  //     if (index === i) {
  //       heroe.editing = !heroe.editing;
  //     }
  //     return heroe;
  //   });
  //   setHeroesList(newHeroesList);
  // };

  // const handleOnChangeInput = event => {
  //   // const name = event.target.name;
  //   // const value = event.target.value;
  //   const { name, value } = event.target;
  //   setNewUser({ ...newUser, [name]: value });
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
        {/* <Form addHeroe={addHeroe} /> */}
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
    // addHeroe: heroes => {
    //   batch(() => {
    //     dispatch(increaseCounter());
    //     dispatch(addHeroe(heroes));
    //   });
    // },
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
