import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App(){
  return(
    <div className ="App">
    {/*<dinner></dinner>*/}
    <Dinner dishName ="Sahji" SweetDish="Kabab"/>
  
    <hr/>
    </div>
  );
}
export default App;
