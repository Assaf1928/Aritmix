import React from 'react';
import classes from './Tip.module.css';

const Tip = (props) => {

    return (
        <div>
           <li Id={`Tip${props.Id}`}> {props.children}</li>
        </div>
    )
}

export default Tip;