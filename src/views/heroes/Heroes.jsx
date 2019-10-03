import React from 'react';
import Form from '../../components/form/Form';
import HeroesTable from '../../components/heroesTable/HeroesTable';

import './Heroes.css';
import Search from '../../components/search/Search';

const Heroes = () => {
  return (
    <>
      <Form />
      <Search />
      <HeroesTable />
    </>
  );
};

export default Heroes;
