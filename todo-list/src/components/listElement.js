import React from 'react';
import TaskBtns from './taskBtns';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: this.props.statusOfDone || false,
            isFocused: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);

    }
    handleChange() {
        this.setState({
            isDone: !this.state.isDone,
        });
        this.props.taskIsDone(!this.state.isDone, this.props.value, this.props.id);

    }
    handleRemoveTask() {
        this.props.RemoveTask(true, this.props.id)
    }
    handleOnFocus() {
        this.setState({
            isFocused: true,
        });
    }
    handleOnBlur() {
        this.setState({
            isFocused: false,
        });
    }

    render() {

        const show =
            <li className='task-title'
                onFocus={this.handleOnFocus}
                onBlur={this.handleOnBlur}
                tabIndex='0'>
                {this.props.hideBtns && 
                    <TaskBtns
                    classM='check-btn'
                    status={this.state.isDone}
                    statusOn='check-btn__inner check-btn__inner_checked'
                    statusOff='check-btn__inner'
                    onClick={this.handleChange}
                />
                }
                
                <div
                    className={this.state.isDone ? 'task-title__text task-title__done' : 'task-title__text'}>
                    {this.props.value}
                </div>

                {this.props.hideBtns && this.state.isFocused &&
                    <TaskBtns
                        classM='delete-btn'
                        status={true}
                        statusOn='delete-btn__inner delete-btn__inner_onFocus '
                        onClick={this.handleRemoveTask}
                    />
                }

            </li>;

        return (
            show
        )
    }

}

export default ListItem;