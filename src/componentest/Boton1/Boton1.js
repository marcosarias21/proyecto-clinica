import React from 'react';
import './boton1.css';

const Boton1 = (props) => {
    return (
        <div>
            <button class="btn btn-3" type="submit"> {props.name} </button>
        </div>
    );
};

export default Boton1;

