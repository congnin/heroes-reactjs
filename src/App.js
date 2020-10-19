import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/shared/Header';

import './App.css';
import HeroList from './components/hero/HeroItems/HeroList';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/heroes' />} />
            <Route exact path='/heroes' component={HeroList} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
