import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import "./newTodoForm.css";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), completed: false };

        this.props.addTodo(newTodo); //ako ne ni treba id ke bide samo this.state
        this.setState({ task: "" });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>

                <label htmlFor='task'>New Todo</label>
                <input id='task' type='text' name='task' placeholder='New Todo' value={this.state.task} onChange={this.handleChange}></input>

                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;