import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './newTodoForm';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    addTodo(newTodo) {

        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }


    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                completed={todo.completed}
                delete={this.removeTodo}
                updateTodo={this.update}
                toggleTodo={this.toggleCompletion}
            />;
        });


        return (
            <div className='TodoList'>
                <h1>Todo List!</h1>
                <span>A Simple React Todo List App</span>
                {/* <ul>
                    {this.state.todos.map(todo => (
                        <li >
                            {todos}
                            
                        </li>
                    ))}
                </ul> */}

                <ul>{todos}</ul>
                <NewTodoForm addTodo={this.addTodo} />

            </div>
        );
    }
}

export default TodoList;