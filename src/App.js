import React from 'react';
import Welcome from './Components/Welcome'
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {

  render(){
  return   (<div>
  <Welcome user='you'/>
  <Welcome user='toi'/>
  <Welcome user='nous'/>
  </div>
  ) }
  
}; 

export default App;
