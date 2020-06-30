import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App(){
  return(
    <div className ="App">
    <Dinner dishName ="Sahji" SweetDish="Kabab"/>
    <hr/>
    <Dinner dishName ="Sahji" SweetDish="cool"/>
  
    <hr/>
    </div>
  );
}
export default App;
