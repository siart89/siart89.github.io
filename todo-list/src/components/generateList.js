import React from 'react';
import ListItem from './listElement';


class GenerateList extends React.Component {

    render() {
        
        const elem = this.props.listArr.map((item) => {
            let status = false;

            this.props.doneStatus.forEach(state => {
                if (state.id === item.id) status = true;
            });

            return (<ListItem
                value={item.taskValue}
                key={item.id}
                taskIsDone={this.props.isDone}
                RemoveTask={this.props.removeTask}
                id={item.id}
                statusOfDone={status}
                hideBtns={this.props.isHiden}
            />)
        }

        )
        return (
            <ul className='list'>
                {elem}
            </ul>
        )
    }

}

export default GenerateList;