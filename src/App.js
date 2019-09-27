import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import store from './store';
import HeroeDetail from './views/heroe-detail/HeroeDetail';
import Heroes from './views/heroes/Heroes';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container heroes heroes--container">
            <Header />
            <Route path="/" exact component={Heroes} />
            <Route path="/heroe-detail/:id" component={HeroeDetail} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
