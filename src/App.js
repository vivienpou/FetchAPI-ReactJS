import React, { Component } from 'react';
import './App.css';
import MainPage from './containers/MainPage';
import { Route, Switch } from "react-router-dom";
import AdminPage from './containers/AdminPage';
import DetailBeer from './components/BeerDetail/DetailBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/'>
        <div>
          <MainPage/>
        </div>
        </Route>
        <Route path='/admin'>
          <AdminPage/>
        </Route>
        <Route path='/beer-detail' component={DetailBeer}/>
      </Switch>
      </div>
    );
  }
}

export default App;
