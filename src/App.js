import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/shared/Header';

import './App.css';
import HeroList from './components/hero/HeroItems/HeroList';
import HeroDetail from './components/hero/HeroDetail/HeroDetail';
import HeroSearchName from './components/hero/HeroItems/HeroSearchName';
import HeroesLike from './components/hero/HeroItems/HeroesLike';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='container body-content'>
          <Switch>
            <Route exact path='/heroes' component={HeroList} />
            <Route exact path='/heroes/search/:name' component={HeroSearchName} />
            <Route exact path='/heroes/:id/detail' component={HeroDetail} />
            <Route exact path='/heroes/store/liked' component={HeroesLike} />
            <Route exact path='/' render={() => <Redirect to='/heroes' />} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
