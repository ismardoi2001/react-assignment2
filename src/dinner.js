import React from 'react';

function Dinner (props) {
    return (
        <div>
        <h1> Today we are Serving {props.dishName}</h1>
        <h1> Today we are Serving {props.SweetDish}</h1>
        <h1>Today we are Hot Drinking {props.MyDrink}</h1>
        <h1>Today we are Cool Drinking {props.youDrink}</h1>
        </div>
    )
}
export default Dinner;