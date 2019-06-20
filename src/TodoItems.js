import React, { Component } from 'react'

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    //Todo:
    //How to add button icons here while also
    //preserving the function of deleting tasks.
    
    createTasks(item) {
        return <li onClick= {() => this.delete(item.key)} 
        key= {item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className= 'theList'>
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;