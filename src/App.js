import React, { Component } from 'react';
import AppBarM from './components/AppBarM';
import Footer from './components/Footer';
import MainRoutes from './routes/MainRoutes';

class App extends Component {


  render() {
	  
   return (
   	<div>
	  <MainRoutes />
	</div>

    );
  }
}

export default App;
