import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todos from './todoData';
import Welcome from './components/default';

class App extends Component {

  constructor() {
    super()
    this.state = {
        todos: todos
    }
  }


  handleChange = (id) => {
    this.setState(prevState => {
        const updatedTodo = prevState.todos.map(todoIterable => {
          // console.log("todoIterable"); 
          if (todoIterable.id === id) {
              return {
                  ...todoIterable,
                  completed: !todoIterable.completed
              }
          }
          return todoIterable
      })
      return {
        todos: updatedTodo
      }
    })
  }

  render() {
    const data = this.state.todos.map( item => < TodoItem key = {item.id} value = {item} 
    handleChange = {this.handleChange} />)
    return (
      <div className="todo-list">
        < Welcome />
        {data}
      </div>
    )
  }
}
export default App;