import React from 'react';
import { connect, batch } from 'react-redux';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';

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
    addHeroe,
    counter,
    editHeroe,
    heroes,
    isRingUsed,
    removeHeroe,
    ringHeroe,
    updateHeroe
  } = props;

  return (
    <>
      {/* <div className="search-input">
            <input type="text" placeholder="Buscar héroe" />
          </div> */}
      <Form addHeroe={addHeroe} counter={counter} />
      <HeroesTable
        editHeroe={editHeroe}
        heroes={heroes}
        isRingUsed={isRingUsed}
        removeHeroe={removeHeroe}
        ringHeroe={ringHeroe}
        updateHeroe={updateHeroe}
      />
    </>
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
