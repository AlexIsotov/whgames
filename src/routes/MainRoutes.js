import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import history from './history';
import MainPage from '../components/MainPage';


export class MainRoutes extends Component {
	
  render(){
  return (
    <Router history={history}>
      <Switch>
	  {/* <Route path="/read/:post" component=null /> make sure about new tab in each post!!!!!!!!!!*/}
        <Route exact path="/" component={MainPage} />
       
        		
		<Route  path="*" render={() => <Redirect to="/" />} />
      
	  </Switch>
    </Router>
  );
}}

export default MainRoutes;