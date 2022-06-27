import React from 'react';
import './boton1.css';

const Boton1 = (props) => {
    return (
        <div>
            <button onClick={()=>window.location.href=props.link} class="btn btn-3"> {props.name} </button>
        </div>
    );
};

export default Boton1;
