import React from 'react';

function Button(props) {

    return (
        <div className={props.classes} onClick={props.buttonClicked}>
            <div>{props.title}</div>
        </div>
    )
}

export default Button;
