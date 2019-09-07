import React from 'react';

function AddList(props) {
    return (
        <div className='add-btn-cont'>
            <button
                onClick={props.onClick}
                className='button add-task__btn'>
                &#10010;
            </button>
        </div>

    )
}

export default AddList;