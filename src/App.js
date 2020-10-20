import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/shared/Header';

import './App.css';
import HeroList from './components/hero/HeroItems/HeroList';
import HeroDetail from './components/hero/HeroDetail/HeroDetail';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container'>
          <Switch>
            <Route exact path='/heroes' component={HeroList} />
            <Route exact path='/heroes/:id' component={HeroDetail} />
            <Route exact path='/' render={() => <Redirect to='/heroes' />} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
