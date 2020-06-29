import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App(){
  return(
    <div className ="App">
    {/*<dinner></dinner>*/}
    <Dinner dishName ="Sahji" SweetDish="Kabab"/>
    <Dinner dishName ="Sahji" SweetDish="cool"/>
  
  
    <hr/>
    </div>
  );
}
export default App;
