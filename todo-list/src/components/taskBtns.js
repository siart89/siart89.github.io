import React from 'react';

function TaskBtns(props) {

    return (
        <div className={props.classM}>
            <div
                className={props.status ? props.statusOn : props.statusOff}
                onClick={props.onClick}>
            </div>
        </div>
    );
}

export default TaskBtns;