import React from 'react';

function Dinner (props) {
    return (
        <div>
        <h1> Today we are Serving {props.dishName}</h1>
        <h2> Today we are Serving {props.SweetDish}</h2>
        <h3> Today we are Serving {props.SweetDish}</h3>
        <hr/>
        </div>
    )
}
export default Dinner;