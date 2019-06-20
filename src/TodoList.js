import React, { Component } from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

//Default constructor, set to the default super method.
class TodoList extends Component {
    constructor(props) {
        super(props)

        //Creating an array of todo items.
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            }
            );
        }
        this._inputElement.value = "";
        //Prevents from refreshing to 0.
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });

        this.setState ({
            items: filteredItems
        });
    }

    //Don't bind with this._input.
    //Instead use onChange (Look up later...)
    render() {
        return (
            <div class= 'header'>
                <h1>ToDo List</h1>
            <div className= 'todoListMain'>
            <div className= 'input'>
                <form onSubmit= {this.addItem}>
                    <input ref= {(a) => this._inputElement = a}
                    placeholder= 'enter task'>

                    </input>
                    <button type= 'submit'>Add</button>
                </form>
            </div>
            <TodoItems entries= {this.state.items}
            delete= {this.deleteItem}/>
            </div>
            </div>
        );
    }
}

export default TodoList;