import React, { useState, useEffect } from "react";

//Axios import

import Axios from "axios";

//Components import

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import SmurfCtx from "../SmurfCtx";

//App ---------------- Start

 let App = () => {

// State

  const [smurfs1, setSmurfs] = useState([]);

//Get section

  useEffect(() => {
    Axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("Get Working", response.data);
        setSmurfs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

//Add section

  const addSmurf = smurf => {
    Axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        console.log('post res', response);
        setSmurfs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Context

  return (
    <div className="App">
      <SmurfCtx.Provider value={{ smurfs1 }}>
        <SmurfList />
        <SmurfForm newSmurfOnProps={addSmurf} />
      </SmurfCtx.Provider>
    </div>
  );
} 

export default App;
