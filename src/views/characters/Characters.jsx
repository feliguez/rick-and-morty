import React from 'react';
import { Helmet } from 'react-helmet';
import CharacterWrapper from '../../components/characterWrapper/CharacterWrapper';

import './Characters.css';

const Characters = () => {
  return (
    <>
      <Helmet>
        <title>Rick and Morty characters by Felipe</title>
      </Helmet>
      <CharacterWrapper />
    </>
  );
};

export default Characters;
