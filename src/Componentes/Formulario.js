import React, { useState } from "react";


const Formulario = (props) =>{
    const {setBox} = props
    const [colorDimension,setColorDimension] = useState({
        color:"",
        dimension:0
    });
    const handleSubmit=(e) =>{
        e.preventDefault();
        setBox((prev) => [...prev,colorDimension]);
        setColorDimension({
            color:"",
            dimension:0
        });
    }

    const onChange = (e) =>{
        setColorDimension({
            ...colorDimension,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" id="color" onChange={onChange} value={colorDimension.color}/>
            <label htmlFor="dimension">Dimension:</label>
            <input type="number" name="dimension" id="dimension" onChange={onChange} value={colorDimension.dimension}/>
            <button type="submit">Crear</button>
        </form>
    )

}

export default Formulario;