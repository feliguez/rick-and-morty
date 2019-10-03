import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.css';
import Header from './components/header/Header';
import store from './store';
import CharacterDetail from './views/characterDetail/CharacterDetail';
import Characters from './views/characters/Characters';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Characters} />
          <Route path="/character/:id" component={CharacterDetail} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
