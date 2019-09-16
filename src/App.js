import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import './bootstrap.css';
import store from './store';
import Heroes from './views/heroes/Heroes';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Heroes />
        {console.log(store.getState())}
      </div>
    </Provider>
  );
};

export default App;
