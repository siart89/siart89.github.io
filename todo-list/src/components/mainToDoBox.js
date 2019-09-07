import React from 'react';
import AddList from './addList';
import GenerateList from './generateList';
import SwitchTask from './switchTask';

class ListBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listArr: [],
            value: '',
            allDoneTasks: [],
            removHistory: [],
            showRemoved: false,
            showCompleted: false,
            showAll: true,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.doDoneTasks = this.doDoneTasks.bind(this);
        this.allDeleted = this.allDeleted.bind(this);
        this.handleChangeListToRemoved = this.handleChangeListToRemoved.bind(this);
        this.handleChangeListToAll = this.handleChangeListToAll.bind(this);
        this.handleChangeListToCompleted = this.handleChangeListToCompleted.bind(this);
        this.handleClearList = this.handleClearList.bind(this);
    }

    handleOnClick() {
        const list = this.state.listArr.slice();
        let key = require('uniqid')();

        if (!this.state.value) return;

        let newTask = {
            taskValue: this.state.value,
            id: key,
            isDone: false,
        };
        list.push(newTask);

        this.setState({
            listArr: list,
            value: '',
        });
    }

    handleOnChange(e) {
        this.setState({
            value: e.target.value,
        })

    }

    handleKeyDown(e) {
        if (e.key !== 'Enter') return;
        this.handleOnClick()
    }
    // поставить галочку "сделано"
    doDoneTasks(set, value, id) {
        const nowDone = this.state.allDoneTasks.slice();

        if (set) {
            for (let item of this.state.allDoneTasks) {
                if (item.id === id) return;
            }
            let newTask = {
                taskValue: value,
                id: id,
                isDone: true,
            };
            nowDone.push(newTask);

        } else {
            for (let i = 0; i < nowDone.length; i++) {
                if (nowDone[i].id === id) {
                    nowDone.splice(i, 1)
                }
            }

        };
        this.setState({
            allDoneTasks: nowDone,

        });
    }
    // удаление строки
    allDeleted(set, id) {
        const allTasks = this.state.listArr.slice();
        const nowDone = this.state.allDoneTasks.slice();
        const removed = this.state.removHistory.slice();
        let newArr;

        if (set) {
            for (let i = 0; i < allTasks.length; i++) {
                if (allTasks[i].id === id) {
                    newArr = (allTasks.splice(i, 1))
                    removed.push(newArr[0]);
                }
            };

            for (let i = 0; i < nowDone.length; i++) {
                if (nowDone[i].id === id) {
                    nowDone.splice(i, 1)
                }
            };
        };

        this.setState({
            allDoneTasks: nowDone,
            listArr: allTasks,
            removHistory: removed,
        });
    }

    handleChangeListToRemoved() {
        if (this.state.removHistory.length === 0) return;
        this.setState({
            showRemoved: true,
            showCompleted: false
        })
    }
    handleChangeListToAll() {
        this.setState({
            showRemoved: false,
            showCompleted: false,
        })
    }

    handleChangeListToCompleted() {
        this.setState({
            showCompleted: true,
            showRemoved: false,
        })
    }
    handleClearList() {
        this.setState({
            listArr: [],
            value: '',
            allDoneTasks: [],
            removHistory: [],
            showRemoved: false,
            showCompleted: false,
            showAll: true,
        })
    }
    render() {
        let isHidenBtns = (this.state.showRemoved ? false : true)
        return (
            <div className='toDo-list'>
                <h1 className='toDo-list__title'>TO-DO LIST</h1>
                <div className='add-task'>
                    <AddList onClick={this.handleOnClick} />
                    <input
                        className='input-task'
                        type="text"
                        onChange={this.handleOnChange}
                        onKeyDown={this.handleKeyDown}
                        value={this.state.value}
                        placeholder="Enter task" />

                </div>
                <div className='tasks'>

                    <GenerateList
                        listArr={this.state.showRemoved ? this.state.removHistory :
                            this.state.showCompleted ? this.state.allDoneTasks :
                                this.state.listArr}
                        isDone={this.doDoneTasks}
                        removeTask={this.allDeleted}
                        doneStatus={this.state.allDoneTasks}
                        isHiden={isHidenBtns}

                    />
                </div>
                <div className='count'>
                    <SwitchTask
                        onClick={this.handleChangeListToAll}
                        titleName='All :'
                        nameOfClass={(this.state.showCompleted || this.state.showRemoved) ? 'count-btn' : 'count-btn count-btn_onFocus'}
                        amount={this.state.listArr.length}
                    />

                    <SwitchTask
                        onClick={this.handleChangeListToCompleted}
                        titleName='Completed :'
                        nameOfClass={this.state.showCompleted ? 'count-btn count-btn_onFocus' : 'count-btn'}
                        amount={this.state.allDoneTasks.length}
                    />

                    <SwitchTask
                        onClick={this.handleChangeListToRemoved}
                        titleName='Deleted :'
                        nameOfClass={this.state.showRemoved ? 'count-btn count-btn_onFocus' : 'count-btn'}
                        amount={this.state.removHistory.length}
                    />
                    <SwitchTask
                        onClick={this.handleClearList}
                        titleName='Clear'
                    />
                </div>
            </div>
        )
    }
}

export default ListBox;