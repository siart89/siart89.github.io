import React from 'react';

function SwitchTask(props) {
    return (
        <span className='count-unit'>
            <span
                onClick={props.onClick}
                className={props.nameOfClass}>
                {props.titleName} {props.amount}
            </span>
        </span>
    )
}

export default SwitchTask;