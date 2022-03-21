import './App.css';
import React, { useState } from 'react';
import Formulario from './Componentes/Formulario';

function App() {
  const [box,setBox] = useState([]);

  return (
    <div className="App">
      <Formulario setBox={setBox}/>
      <div className='flex-container'>
        {
          box.length>0?box.map((box,index) => (<div key={index} className="box" style={{backgroundColor:box.color, height:box.dimension+"px", width:box.dimension+"px"}}></div>)):""
        }
      </div>
      
    </div>
  );
}

export default App;
