import React from 'react';
import './boton1.css';

const Boton1 = (props) => {
    return (
        <a href={props.link}>
            <button  class="btn btn-3"> {props.name} </button>
        </a>
    );
};

export default Boton1;
