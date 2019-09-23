import React from 'react';
import { connect, batch } from 'react-redux';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';
import Title from '../../components/title/Title';

import {
  ringHeroe,
  removeHeroe,
  addHeroe,
  editHeroe,
  updateHeroe
} from '../../store/actions/heroe.actions';

import './Heroes.css';

const Heroes = props => {
  const {
    isRingUsed,
    ringHeroe,
    removeHeroe,
    heroes,
    addHeroe,
    counter,
    editHeroe,
    updateHeroe
  } = props;

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
          editHeroe={editHeroe}
          updateHeroe={updateHeroe}
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
    removeHeroe: heroes => dispatch(removeHeroe(heroes)),
    editHeroe: heroes => dispatch(editHeroe(heroes)),
    updateHeroe: heroes => dispatch(updateHeroe(heroes))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Heroes);
