import React from 'react';

//Smurf Display

let Smurf = props => {

    console.log("here is my smurf", props)

    return (
        <div>
            <h3>Name: {props.smurfOnProps.name}</h3>
            <p>Age: {props.smurfOnProps.age}</p>
            <p>Height: {props.smurfOnProps.height}</p>
        </div>
    )
} 

export default Smurf;