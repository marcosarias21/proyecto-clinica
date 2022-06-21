import React from 'react';
import './boton1.css';

const Boton1 = (props) => {
    return (
        <div>
         <a href={props.link} > <button class="btn btn-3"> {props.name} </button> </a>
        </div>
    );
};

export default Boton1;
