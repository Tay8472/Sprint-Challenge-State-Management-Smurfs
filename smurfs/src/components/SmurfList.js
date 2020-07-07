import React, { useContext } from "react";
import SmurfCtx from "../SmurfCtx";
import Smurf from "./Smurf";


let SmurfList = () => {

//Set Context

  const { smurfs1 } = useContext(SmurfCtx);
  console.log("test from context", smurfs1);

//List

  return (
    <div>
      <h1>Look at all these smurfs</h1>
      <>
        {smurfs1.map(smurf => (
          <Smurf key={smurf.id} smurfOnProps={smurf} />
        ))}
      </>
    </div>
  );
} 

export default SmurfList;