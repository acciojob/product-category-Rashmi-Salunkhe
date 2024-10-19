
import React, { useState } from "react";
import './../styles/App.css';

const male=["Shirts", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"];
const female=["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"];
const App = () => {
  const[gender, setGender]=useState("");
  
  function changeGender(e){
       setGender(e.target.value);
  }
  return (
    <div>
        
        <select value={gender} onChange={changeGender}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <ul>
          {
            gender==="male" ? male.map(item=><li>{item}</li>) : female.map(item=><li>{item}</li>)
          }
        </ul>
    </div>
  )
}

export default App
