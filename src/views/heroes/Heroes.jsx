import React from 'react';
import { connect, batch } from 'react-redux';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';

import {
  ringHeroe,
  removeHeroe,
  addHeroe,
  editHeroe,
  updateHeroe,
  filterHeroe
} from '../../store/actions/heroe.actions';

import './Heroes.css';
import Search from '../../components/search/Search';

const Heroes = props => {
  const {
    addHeroe,
    counter,
    editHeroe,
    filterHeroe,
    heroes,
    isRingUsed,
    removeHeroe,
    ringHeroe,
    updateHeroe
  } = props;

  return (
    <>
      <Form addHeroe={addHeroe} counter={counter} />
      <Search filterHeroe={filterHeroe} />
      <HeroesTable
        editHeroe={editHeroe}
        heroes={heroes.filter(hero => hero.show)}
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
    updateHeroe: heroes => dispatch(updateHeroe(heroes)),
    filterHeroe: heroes => dispatch(filterHeroe(heroes))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Heroes);
