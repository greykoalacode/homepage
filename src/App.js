import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
// import Recommender from './Components/Recommender/';
import TestCard from './Components/testCard/testCard';
import './App.css';
import DataTable from './Components/Data/DataTable';
const initialState ={
  route:"signin",
  isSignedIn:false
}
class App extends Component  {
  constructor(){
    super();
    this.state = initialState;
  }
  onRouteChange = route => {
    if (route === "signout") {
      // this.setState(initalState);
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  render (){
    const {isSignedIn,route} = this.state;
    return(
    <div>
      <DataTable/>
    </div>
    
    );

  }
}

export default App;
