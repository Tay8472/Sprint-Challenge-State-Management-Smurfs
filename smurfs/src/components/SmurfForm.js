import React, {useState} from "react";

let SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
      });

      // Changer
    
      const handleChanges = e => {
        setNewSmurf({
          ...newSmurf,
          [e.target.name]: e.target.value
        });
      };
    
      // Submit

      const handleSubmit = e => {

        e.preventDefault();
    
        props.newSmurfOnProps(newSmurf);
        setNewSmurf({
          name: "",
          age: "",
          height: ""
        });
      };

      // Form
    
      return (
        <div className="InputBoxes">
          <h1> Add a Smurf!</h1>
          <input
            type="text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
            placeholder="put a name in here"
          />
          <input
            type="text"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
            placeholder="is it over 21"
          />
          <input
            type="text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
            placeholder="how big is this thing"
          />
          <button className="button" onClick={handleSubmit}>
            Add Smurf
          </button>
        </ div>
      );
}

export default SmurfForm;