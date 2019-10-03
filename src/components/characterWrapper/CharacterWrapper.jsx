import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { characterGellAllAsyncActionCreator } from '../../store/actions/getAllCharacter.actions';
import CharacterItem from '../characterItem/CharacterItem';
import './CharacterWrapper.css';

const CharacterWrapper = () => {
  const dispatch = useDispatch();
  const characters = useSelector(store => {
    return store.characterGetAllReducer;
  });

  useEffect(() => {
    dispatch(characterGellAllAsyncActionCreator());
  }, [dispatch]);

  const { data } = characters;
  return characters.loading ? (
    <div className="text-center">
      <FontAwesomeIcon icon={faSpinner} pulse size="3x" />
    </div>
  ) : (
    <div className="characters characters--container">
      <div className="container">
        <div className="card-columns">
          {data.map((character, i) => (
            <CharacterItem character={character} heroeIndex={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterWrapper;
